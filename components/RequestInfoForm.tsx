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
import { Mail, Phone, User, Shield, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

interface RequestInfoFormProps {
  insurance: string[];
  phone: string;
}

export default function RequestInfoForm({ insurance, phone }: RequestInfoFormProps) {
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
    <div className="overflow-hidden rounded-2xl bg-card shadow-soft-xl ring-1 ring-gray-900/5 dark:bg-gray-900/80 dark:ring-white/5">
      <div className="p-6">
        {/* Form Header */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold text-foreground dark:text-gray-100">Request Information</h3>
          <p className="mt-2 text-sm text-muted-foreground dark:text-gray-400">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground dark:text-gray-200">Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Your full name"
                        {...field}
                        className={cn(
                          "pl-10 h-11",
                          "bg-muted/50 border-input",
                          "dark:bg-gray-800/50 dark:border-gray-700",
                          "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                          "dark:focus:ring-primary-400 dark:focus:border-primary-400",
                          "placeholder:text-muted-foreground/60 dark:placeholder:text-gray-500",
                          "text-foreground dark:text-gray-200",
                          "transition-colors duration-200"
                        )}
                      />
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/70 dark:text-gray-500" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground dark:text-gray-200">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                        className={cn(
                          "pl-10 h-11",
                          "bg-muted/50 border-input",
                          "dark:bg-gray-800/50 dark:border-gray-700",
                          "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                          "dark:focus:ring-primary-400 dark:focus:border-primary-400",
                          "placeholder:text-muted-foreground/60 dark:placeholder:text-gray-500",
                          "text-foreground dark:text-gray-200",
                          "transition-colors duration-200"
                        )}
                      />
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/70 dark:text-gray-500" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground dark:text-gray-200">Phone</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="tel"
                        placeholder="(123) 456-7890"
                        {...field}
                        className={cn(
                          "pl-10 h-11",
                          "bg-muted/50 border-input",
                          "dark:bg-gray-800/50 dark:border-gray-700",
                          "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                          "dark:focus:ring-primary-400 dark:focus:border-primary-400",
                          "placeholder:text-muted-foreground/60 dark:placeholder:text-gray-500",
                          "text-foreground dark:text-gray-200",
                          "transition-colors duration-200"
                        )}
                      />
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/70 dark:text-gray-500" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground dark:text-gray-200">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your needs..."
                      className={cn(
                        "min-h-[100px] resize-none",
                        "bg-muted/50 border-input",
                        "dark:bg-gray-800/50 dark:border-gray-700",
                        "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                        "dark:focus:ring-primary-400 dark:focus:border-primary-400",
                        "placeholder:text-muted-foreground/60 dark:placeholder:text-gray-500",
                        "text-foreground dark:text-gray-200",
                        "transition-colors duration-200"
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={cn(
                "w-full h-12",
                "bg-primary-600 hover:bg-primary-500",
                "dark:bg-primary-600 dark:hover:bg-primary-500",
                "text-white dark:text-white",
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

        {/* Insurance Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary-500 dark:text-primary-400" />
            <h4 className="text-sm font-semibold text-foreground dark:text-gray-200">Insurance Accepted</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {insurance.map((ins) => (
              <span
                key={ins}
                className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-1",
                  "text-xs font-medium",
                  "bg-primary-50/40 text-primary-700 border border-primary-100",
                  "dark:bg-primary-900/40 dark:text-primary-300 dark:border-primary-800/60",
                  "transition-colors duration-200"
                )}
              >
                {ins}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Contact Section */}
        <div className="mt-8">
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-foreground dark:text-gray-200">Contact Directly</h4>
            <p className="mt-1 text-sm text-muted-foreground dark:text-gray-400">
              Speak with a treatment specialist now:
            </p>
          </div>
          <a
            href={`tel:${phone}`}
            className={cn(
              "flex items-center justify-center gap-2 w-full rounded-xl",
              "px-4 py-3 text-base font-semibold",
              "bg-primary-50/50 text-primary-700 border border-primary-200",
              "dark:bg-primary-900/40 dark:text-primary-300 dark:border-primary-800/60",
              "hover:bg-primary-100/60 dark:hover:bg-primary-900/50",
              "hover:shadow-soft-md",
              "transition-all duration-200"
            )}
          >
            <Phone className="h-5 w-5" />
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
} 