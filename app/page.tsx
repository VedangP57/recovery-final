import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import StateCard from '@/components/StateCard';
import Testimonial from '@/components/Testimonial';
import rehabs from '@/data/rehabs.json';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  // Get the top 3 states with the most treatment centers
  const featuredStates = [...rehabs.states]
    .sort((a, b) => b.totalCenters - a.totalCenters)
    .slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Featured States Section */}
      <section className="bg-gray-100 py-24 dark:bg-gray-900 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Find Treatment Centers Near You
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Browse our directory of trusted rehabilitation centers across the
              United States. Get the help you need, when you need it.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredStates.map((state) => (
              <StateCard key={state.abbreviation} {...state} />
            ))}
          </div>

          {/* Show More Button */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/states"
              className={cn(
                'group inline-flex items-center gap-x-2 rounded-full',
                'bg-primary-600 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-50 dark:text-white',
                'px-8 py-4 text-base font-semibold text-black',
                'dark:shadow-primary-900/20 shadow-sm hover:shadow-md',
                'hover:scale-[1.02] dark:hover:scale-[1.02]',
                'transition-all duration-200',
                'focus-visible:outline focus-visible:outline-2',
                'focus-visible:outline-primary-600 focus-visible:outline-offset-2'
              )}
            >
              View&nbsp;All&nbsp;Treatment&nbsp;Centers
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24 dark:bg-gray-900/50 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Recovery Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Read inspiring stories from individuals who have found their path
              to recovery through our network of treatment centers.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root sm:mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rehabs.testimonials.map((testimonial, index) => (
                <div key={index} className="h-full">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logo Trust Section */}
      <section className="bg-white py-24 dark:bg-gray-900/30 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-300">
              Our network maintains the highest standards through accreditation
              from respected organizations and leading treatment centers.
            </p>

            {/* Single Row of Important Logos */}
            <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {/* JCAHO */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logos/jcaho.svg"
                  alt="Joint Commission Accreditation"
                  width={160}
                  height={60}
                  className="h-14 object-contain dark:opacity-80 dark:invert"
                />
              </div>
              {/* CARF */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logos/carf.svg"
                  alt="CARF International"
                  width={160}
                  height={60}
                  className="h-14 object-contain dark:opacity-80 dark:invert"
                />
              </div>
              {/* Hazelden */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logos/hazelden.svg"
                  alt="Hazelden Betty Ford Foundation"
                  width={180}
                  height={60}
                  className="h-14 object-contain dark:opacity-80 dark:invert"
                />
              </div>
              {/* Caron */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logos/caron.svg"
                  alt="Caron Treatment Centers"
                  width={180}
                  height={60}
                  className="h-14 object-contain dark:opacity-80 dark:invert"
                />
              </div>
              {/* SAMHSA */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logos/samhsa.svg"
                  alt="Substance Abuse and Mental Health Services Administration"
                  width={160}
                  height={60}
                  className="h-14 object-contain dark:opacity-80 dark:invert"
                />
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-6 py-2 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <span className="mr-2">✓</span>
                All centers are verified and accredited
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
