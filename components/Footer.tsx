'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    resources: [
      { name: 'Find Treatment', href: '/states' },
      { name: 'Insurance Coverage', href: '/insurance' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQs', href: '/faqs' },
    ],
    social: [
      { name: 'Facebook', href: '#', icon: Facebook },
      { name: 'Twitter', href: '#', icon: Twitter },
      { name: 'LinkedIn', href: '#', icon: Linkedin },
    ],
  };

  return (
    <footer className="border-t bg-gray-50 dark:bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-foreground">
                Recovery<span className="text-primary-600">.</span>com
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted source for finding addiction treatment and recovery resources across the United States.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary-600 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest resources and updates.
            </p>
            <form className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "bg-muted/50 border-input",
                    "text-foreground placeholder:text-muted-foreground",
                    "focus-visible:ring-primary-500 focus-visible:border-primary-500"
                  )}
                />
                <Button
                  type="submit"
                  size="icon"
                  className={cn(
                    "bg-primary-600 hover:bg-primary-500",
                    "dark:bg-primary-500 dark:hover:bg-primary-400",
                    "text-primary-50 dark:text-primary-50",
                    "h-11 w-11",
                    "shadow-md hover:shadow-lg",
                    "transition-all duration-200",
                    "rounded-md",
                    "flex items-center justify-center"
                  )}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </form>
            {/* Contact info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-600 transition-colors group">
                <Phone className="h-4 w-4 group-hover:text-primary-600" />
                <a href="tel:(800) 123-4567" className="hover:text-primary-600">(800) 123-4567</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Los Angeles, CA 90001</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Footer bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Recovery.com. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary-600 transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 