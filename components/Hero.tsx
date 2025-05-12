'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-cover bg-center bg-gray-50 dark:bg-background">
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1520975918313-263c130b32b4?auto=format&fit=crop&w=1600&q=80)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 dark:from-background dark:to-background flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Journey to Recovery
            <span className="block mt-2 text-secondary dark:text-gray-500">Starts Here</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Find trusted addiction treatment centers across the United States. Take the first step towards a healthier, happier life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              <Link href="/states">Browse Centers</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              <Link href="/contact">Get Help Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 