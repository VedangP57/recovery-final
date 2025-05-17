'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      console.log('Submitting form data:', data);

      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      let result;
      const text = await response.text();
      console.log('Raw response:', text);

      try {
        result = JSON.parse(text);
      } catch (e) {
        console.error('Error parsing JSON response:', e);
        throw new Error(`Invalid server response: ${text.substring(0, 100)}`);
      }

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      });
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary-950 dark:text-white">Send Us a Message</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            We&apos;ll get back to you as soon as possible
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Name
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className={cn(
                            "pl-10 h-11",
                            "bg-gray-50 dark:bg-gray-900/50",
                            "border-gray-200 dark:border-gray-700",
                            "focus:border-primary-500 dark:focus:border-primary-400",
                            "focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-400/20",
                            "placeholder:text-gray-500/60 dark:placeholder:text-gray-400/60"
                          )}
                        />
                        <User className="h-5 w-5 text-primary-500/70 dark:text-gray-500 absolute left-3 top-3" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 dark:text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className={cn(
                            "pl-10 h-11",
                            "bg-gray-50 dark:bg-gray-900/50",
                            "border-gray-200 dark:border-gray-700",
                            "focus:border-primary-500 dark:focus:border-primary-400",
                            "focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-400/20",
                            "placeholder:text-gray-500/60 dark:placeholder:text-gray-400/60"
                          )}
                        />
                        <Mail className="h-5 w-5 text-primary-500/70 dark:text-gray-500 absolute left-3 top-3" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 dark:text-red-400" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Phone (Optional)
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="tel"
                        placeholder="(123) 456-7890"
                        {...field}
                        className={cn(
                          "pl-10 h-11",
                          "bg-gray-50 dark:bg-gray-900/50",
                          "border-gray-200 dark:border-gray-700",
                          "focus:border-primary-500 dark:focus:border-primary-400",
                          "focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-400/20",
                          "placeholder:text-gray-500/60 dark:placeholder:text-gray-400/60"
                        )}
                      />
                      <Phone className="h-5 w-5 text-primary-500/70 dark:text-gray-500 absolute left-3 top-3" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Message
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea
                        placeholder="How can we help you?"
                        {...field}
                        className={cn(
                          "pl-10 min-h-[120px]",
                          "bg-gray-50 dark:bg-gray-900/50",
                          "border-gray-200 dark:border-gray-700",
                          "focus:border-primary-500 dark:focus:border-primary-400",
                          "focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-400/20",
                          "placeholder:text-gray-500/60 dark:placeholder:text-gray-400/60"
                        )}
                      />
                      <MessageSquare className="h-5 w-5 text-primary-500/70 dark:text-gray-500 absolute left-3 top-3" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />

            {submitStatus.type && (
              <div
                className={cn(
                  'p-4 rounded-lg text-sm',
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-400'
                    : 'bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-400'
                )}
              >
                {submitStatus.message}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-11 bg-primary-600 hover:bg-primary-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
} 