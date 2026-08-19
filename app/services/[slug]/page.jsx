import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData, getServiceBySlug } from '../servicesData';
import ServiceDetailClient from './ServiceDetailClient';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Triple Hash',
    };
  }

  return {
    title: `${service.title} Services | Triple Hash`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Triple Hash`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} allServices={servicesData} />;
}
