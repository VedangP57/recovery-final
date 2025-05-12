'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

interface StateCardProps {
  name: string;
  abbreviation: string;
  totalCenters: number;
  imageUrl: string;
  description: string;
}

export default function StateCard({ name, abbreviation, totalCenters, imageUrl, description }: StateCardProps) {
  return (
    <Link href={`/states/${abbreviation.toLowerCase()}`} className="group">
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 group-hover:shadow-xl dark:bg-gray-800/50 dark:shadow-gray-900/30">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${name} rehabilitation centers`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

          {/* Location Badge */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-sm font-medium text-gray-900 shadow-lg backdrop-blur-sm dark:bg-gray-900/90 dark:text-white">
            <MapPin className="h-4 w-4" />
            {abbreviation}
          </div>

          {/* State Name on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="mt-1 text-sm font-medium text-white/90">
              {totalCenters} Treatment Centers
            </p>
          </div>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-300">
            {description}
          </p>

          <div className="mt-4 flex items-center text-sm font-medium text-primary-600 dark:text-primary-400">
            View Centers
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
} 