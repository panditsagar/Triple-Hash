'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import ScrollReveal from './Gsap/ScrollReveal';

const servicesData = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Engineering fast, modern, and responsive websites tailored to establish strong digital presence and drive conversions.',
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'Designing high-converting, personalized landing pages optimized for maximum lead generation and user engagement.',
  },
  {
    id: 'custom-web-app',
    title: 'Custom Web App',
    description: 'Building scalable, high-performance web applications and custom SaaS products engineered for enterprise scale.',
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Streamlining workflows and business operations with AI-driven integrations and automated system solutions.',
  },
  {
    id: 'social-media-seo',
    title: 'Social Media and SEO',
    description: 'Boosting organic search visibility, audience reach, and search engine performance to maximize digital growth.',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Crafting intuitive iOS and Android mobile applications built with seamless UI/UX and native performance for optimal user engagement.',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Creating high-impact video content, motion graphics, and visual edits designed to captivate your audience.',
  },
];

export default function ServiceSection() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full bg-[#0D0816] py-20 relative overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <ScrollReveal>
            <h2 className="headline text-center">
              <span
                style={{
                  backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                  WebkitBackgroundClip: 'text',
                }}
                className="headline bg-clip-text text-transparent reveal-item block"
              >
                Services Built To Help
              </span>
              <span
                style={{
                  backgroundImage: 'linear-gradient(to right, #ff9b26, #ee4f27)',
                  WebkitBackgroundClip: 'text',
                }}
                className="headline reveal-item block bg-clip-text text-transparent"
              >
                Move Your Business Forward
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Services Container */}
        <div  className="w-full relative flex flex-col border-t border-white/10">
          {/* Interactive Service List */}
          <div className="w-full flex flex-col" onMouseLeave={() => setActiveId(null)}>
            {servicesData.map((service) => {
              const isActive = service.id === activeId;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className={`w-full border-b border-white/10 cursor-pointer group p-6 sm:p-8  transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-50 hover:opacity-85'
                  }`}
                   style={{
                 
                  boxShadow: "inset 0 1px #ff8e5d66",
                  backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                }}
                >
                  <div className="w-full flex items-start justify-between gap-6 relative">
                    {/* Left Content Area: Title + Description */}
                    <div className="flex flex-col max-w-xl sm:max-w-2xl lg:max-w-3xl pr-6">
                      <Link href={`/services/${service.id}`} className="inline-block">
                        <h3
                          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-geomanist transition-colors duration-300 ${
                            isActive ? 'font-bold text-white' : 'font-normal text-white/50 group-hover:text-white'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </Link>

                      {/* Smooth CSS Grid Expand & Collapse Transition */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isActive ? 'grid-rows-[1fr] opacity-100 pt-2' : 'grid-rows-[0fr] opacity-0 pt-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-[#C4BBD3] text-sm sm:text-base leading-relaxed font-raleway font-normal">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Far Right End: Circular Arrow Icon */}
                    <div className="shrink-0 z-30 pt-1">
                      <Link href={`/services/${service.id}`} aria-label={`View ${service.title} service details`}>
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? 'border-white/50 text-white bg-white/10 shadow-lg'
                              : 'border-white/20 text-white/60 group-hover:border-white/50 group-hover:text-white group-hover:bg-white/5'
                          }`}
                        >
                          <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
