'use client';

import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}

export default function Testimonial({ quote, author, role, imageUrl }: TestimonialProps) {
  return (
    <div className="h-full">
      <div className="relative h-full rounded-2xl bg-white shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-90 rounded-2xl" />
        <div className="relative h-full p-8 flex flex-col justify-between">
          <figure className="flex flex-col h-full justify-between">
            <blockquote className="text-lg font-semibold text-gray-900 sm:text-xl sm:leading-8">
              <p>&ldquo;{quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-x-4">
              <div className="relative h-10 w-10 rounded-full">
                <Image
                  src={imageUrl}
                  alt={author}
                  fill
                  className="rounded-full object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{author}</div>
                <div className="text-sm text-gray-600">{role}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
} 