import React from 'react';
import StateCard from '@/components/StateCard';
import rehabs from '@/data/rehabs.json';

export default function StatesPage() {
  return (
    <div className="min-h-screen bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find Treatment Centers by State
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Browse rehabilitation centers across the United States. Each state offers unique treatment options and
            specialized programs to support your recovery journey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mt-20">
          {rehabs.states.map((state) => (
            <StateCard key={state.abbreviation} {...state} />
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Need Help Finding the Right Treatment Center?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Our treatment specialists are available 24/7 to help you find the best rehabilitation center for your needs.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="tel:8001234567"
              className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors duration-200"
            >
              Call Now: (800) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 