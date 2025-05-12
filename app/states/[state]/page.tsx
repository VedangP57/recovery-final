'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import RehabCard from '@/components/RehabCard';
import rehabs from '@/data/rehabs.json';

export default function StatePage() {
  const params = useParams();
  const stateAbbr = (params.state as string)?.toUpperCase();

  // Find state info
  const stateInfo = rehabs.states.find(
    (state) => state.abbreviation === stateAbbr
  );

  // Filter rehabs for this state
  const stateRehabs = rehabs.rehabs.filter(
    (rehab) => rehab.state === stateAbbr
  );

  if (!stateInfo) {
    return (
      <div className="min-h-screen bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              State Not Found
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Treatment Centers in {stateInfo.name}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {stateInfo.description}
          </p>
          <p className="mt-2 text-sm text-muted-foreground/80">
            {stateInfo.totalCenters} Treatment Centers Available
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stateRehabs.map((rehab) => (
            <RehabCard key={rehab.id} {...rehab} />
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
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
            >
              Call Now: (800) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 