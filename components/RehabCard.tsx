'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Phone, ChevronRight } from 'lucide-react';

interface RehabCardProps {
  id: string;
  name: string;
  city: string;
  state: string;
  phone: string;
  description: string;
  treatments: string[];
  rating: number;
  imageUrl: string;
  insurance: string[];
  amenities: string[];
  accreditations: string[];
  specialties: string[];
}

export default function RehabCard({
  id,
  name,
  city,
  state,
  phone,
  description,
  treatments,
  rating,
  imageUrl,
  insurance,
  specialties,
}: RehabCardProps) {
  return (
    <Link href={`/rehabs/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800/50 dark:shadow-gray-900/30">
        <div className="relative h-64 w-full overflow-hidden sm:h-72">
          <Image
            src={imageUrl}
            alt={`${name} facility`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

          {/* Rating Badge */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-sm font-medium text-gray-900 shadow-lg backdrop-blur-sm dark:bg-gray-900/90 dark:text-white">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1">{rating.toFixed(1)}</span>
          </div>

          {/* Facility Name on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="mt-2 flex items-center text-sm text-white/90">
              {city}, {state}
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {description}
          </p>

          {/* Treatments */}
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                Treatment Programs
              </h4>
              <div className="flex flex-wrap gap-2">
                {treatments.slice(0, 3).map((treatment) => (
                  <span
                    key={treatment}
                    className="inline-flex items-center rounded-full bg-primary-50/50 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                  >
                    {treatment}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {specialties.slice(0, 2).map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center rounded-full bg-secondary-50/50 px-2.5 py-1 text-xs font-medium text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Insurance */}
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                Insurance Accepted
              </h4>
              <div className="flex flex-wrap gap-2">
                {insurance.slice(0, 2).map((ins) => (
                  <span
                    key={ins}
                    className="inline-flex items-center rounded-full bg-blue-50/50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {ins}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6 flex gap-3">
            <a
              href={`tel:${phone}`}
              className="flex-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </span>
            </a>
            <button className="flex items-center justify-center rounded-xl bg-muted px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted/80">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
} 