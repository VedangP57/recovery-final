import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { label: 'Treatment Centers', value: '500+' },
    { label: 'States Covered', value: '50' },
    { label: 'Years of Experience', value: '15+' },
    { label: 'Success Stories', value: '10,000+' },
  ];

  const values = [
    {
      name: 'Compassion',
      description:
        "We approach every individual with understanding and empathy, recognizing that each person&apos;s journey to recovery is unique.",
    },
    {
      name: 'Excellence',
      description:
        'We maintain high standards in our directory, featuring only licensed and accredited treatment centers that provide quality care.',
    },
    {
      name: 'Accessibility',
      description:
        'We believe that everyone deserves access to quality treatment, regardless of their background or circumstances.',
    },
    {
      name: 'Transparency',
      description:
        'We provide clear, honest information about treatment centers, including their programs, amenities, and insurance options.',
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-50/20 dark:from-background pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">About  Rehab Directory</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We&apos;re dedicated to helping individuals find the right path to recovery by connecting them with trusted
              rehabilitation centers across the United States. Our mission is to make the journey to recovery more
              accessible and transparent for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our values guide everything we do, from how we select treatment centers for our directory to how we interact
            with individuals seeking help.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-foreground">{value.name}</dt>
              <dd className="mt-1 text-muted-foreground">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Mission section */}
      <div className="relative isolate overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-foreground sm:text-2xl sm:leading-9">
              <p>
                &ldquo;Our mission is to break down barriers to treatment and provide hope to those struggling with addiction.
                We believe that with the right support and resources, recovery is possible for everyone.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-foreground">Dr. Sarah Johnson</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-foreground">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-muted-foreground">Chief Medical Advisor</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-50/50 dark:bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Our treatment specialists are available 24/7 to help you find the right rehabilitation center for your needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                Call Now: (800) 123-4567
              </button>
              <a href="/states" className="text-sm font-semibold leading-6 text-foreground">
                Browse Centers <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 