import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Recovery.com',
  description: 'Get in touch with our team at Recovery.com. We\'re here to help you find the right treatment program for your journey to wellness.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/10 dark:to-background pt-24 md:pt-28">
      <div className="w-full px-4 py-8 sm:py-12 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-950 dark:text-white sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Our caring team is available 24/7 to help you find the right treatment program.
              Take the first step towards recovery today.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700/50 transition-all duration-200">
              <Phone className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="font-semibold text-primary-950 dark:text-white">Phone</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">(800) 123-4567</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700/50 transition-all duration-200">
              <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="font-semibold text-primary-950 dark:text-white">Email</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">help@recovery.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700/50 transition-all duration-200">
              <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="font-semibold text-primary-950 dark:text-white">Location</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Los Angeles, CA 90001</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700/50 transition-all duration-200">
              <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="font-semibold text-primary-950 dark:text-white">Hours</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full px-4 md:px-8 lg:px-12 pb-24">
        <ContactForm />
      </div>
    </div>
  );
} 