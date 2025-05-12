'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, User, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-primary-950 dark:text-white">Send Us a Message</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            We'll get back to you as soon as possible
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
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</FormLabel>
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
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</FormLabel>
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
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</FormLabel>
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
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help..."
                      className={cn(
                        "min-h-[150px] resize-none",
                        "bg-gray-50 dark:bg-gray-900/50",
                        "border-gray-200 dark:border-gray-700",
                        "focus:border-primary-500 dark:focus:border-primary-400",
                        "focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-400/20",
                        "placeholder:text-gray-500/60 dark:placeholder:text-gray-400/60"
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 dark:text-red-400" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={cn(
                "w-full h-12",
                "bg-primary-600 hover:bg-primary-500",
                "dark:bg-primary-500 dark:hover:bg-primary-400",
                "text-primary-50 dark:text-primary-50",
                "font-semibold text-base",
                "rounded-xl",
                "shadow-md hover:shadow-lg",
                "transition-all duration-200",
                "flex items-center justify-center gap-2",
                "group"
              )}
            >
              Send Message
              <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
} 