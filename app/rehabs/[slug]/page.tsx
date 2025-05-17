import React from 'react';
import Image from 'next/image';
import rehabs from '@/data/rehabs.json';
import RequestInfoForm from '@/components/RequestInfoForm';

interface RehabDetailPageProps {
  params: {
    slug: string;
  };
}

export default function RehabDetailPage({ params }: RehabDetailPageProps) {
  const rehab = rehabs.rehabs.find((r) => r.id === params.slug);

  if (!rehab) {
    return (
      <div className="min-h-screen bg-background px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Treatment Center Not Found
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The rehabilitation center you&apos;re looking for doesn&apos;t exist in our database.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Hero section */}
      <div className="relative h-[400px] mt-14">
        <Image
          src={rehab.imageUrl}
          alt={rehab.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{rehab.name}</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {rehab.address}, {rehab.city}, {rehab.state}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Overview</h2>
                <p className="mt-4 text-lg text-muted-foreground">{rehab.description}</p>
              </div>

              {/* Treatments */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Treatment Programs</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {rehab.treatments.map((treatment) => (
                    <span
                      key={treatment}
                      className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {treatment}
                    </span>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Amenities</h2>
                <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {rehab.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-x-3 text-muted-foreground">
                      <svg
                        className="h-5 w-5 flex-none text-primary-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accreditations */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">Accreditations</h2>
                <div className="mt-4 flex flex-wrap gap-4">
                  {rehab.accreditations.map((accreditation) => (
                    <div
                      key={accreditation}
                      className="flex h-20 w-20 items-center justify-center rounded-lg bg-muted/60 dark:bg-gray-800/60 p-4 text-center text-sm font-medium text-foreground dark:text-gray-200 border border-gray-200/20 dark:border-gray-700/30 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      {accreditation}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <RequestInfoForm insurance={rehab.insurance} phone={rehab.phone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 