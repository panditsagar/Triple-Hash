"use client";

import React, { useLayoutEffect, useRef } from "react";
 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CallToAction from "../../../components/CallToAction";
import NavBar from "../../../components/NavBar";

import TestimonialsSection from "@/components/TestimonialsSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceDetailClient({ service, allServices }) {
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  if (!service) return null;

  return (
    <main className="w-full bg-[#0D0816] text-white min-h-screen relative overflow-hidden font-raleway">
      {/* Red Radial Gradient Centered on Screen */}
      <div
        className="absolute top-[-2%] left-1/2 -translate-x-1/2 w-[900px] h-[750px] pointer-events-none rounded-full blur-[150px] opacity-80 z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(238, 79, 39, 0.45) 0%, rgba(220, 38, 38, 0.32) 35%, rgba(139, 53, 107, 0.22) 60%, transparent 80%)",
        }}
      />

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 pt-32 pb-16 relative z-10">
        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center mt-8">
          {/* Left Content Column */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            {/* Title */}
            <h1 className="headline mb-6">
              <span
                style={{
                  backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                  WebkitBackgroundClip: "text",
                }}
                className="bg-clip-text text-transparent block"
              >
                {service.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl   text-[#C4BBD3] font-normal  mb-8">
              {service.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="  flex z-2 flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() =>
                  window.open("https://hashboard.in/book/web", "_blank")
                }
                className="cursor-pointer buttonfont w-full sm:w-auto border border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white   px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              >
                Get Started Today
              </button>

              <button
                onClick={() =>
                  window.open("https://hashboard.in/book/web", "_blank")
                }
                className="cursor-pointer buttonfont w-full sm:w-auto   bg-transparent border border-[#FFFFFF63] text-gray-200  px-5 py-2 rounded-lg hover:bg-white/10 hover:border-gray-400 transition-colors duration-300"
              >
                Book Clarity Call
              </button>
            </div>
          </div>

          {/* Right Hero Image Column */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative mt-8 lg:mt-0 z-10 lg:translate-x-16 xl:translate-x-28 lg:-translate-y-12 xl:-translate-y-20">
            <div className="w-full max-w-[800px] relative group" ref={imageRef}>
              {/* Light Red Radial Gradient Displayed Above & Over the Image */}
              <div
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[600px] rounded-full blur-[140px] opacity-50 pointer-events-none z-20 mix-blend-screen"
                style={{
                  background:
                    "radial-gradient(circle at 50% 30%, rgba(255, 99, 71, 0.28) 0%, rgba(239, 68, 68, 0.16) 40%, rgba(139, 53, 107, 0.08) 70%, transparent 85%)",
                }}
              />
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF9B26]/15 via-[#6B21EF]/20 to-transparent rounded-3xl blur-2xl opacity-50 pointer-events-none z-0" />

              {/* Hero Image */}
              <img
                src="/serviceshero.png"
                alt={`${service.title} Hero Graphic`}
                className="relative w-full h-auto object-contain scale-115 lg:scale-130 xl:scale-145 transform transition-transform duration-500 drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 pt-12 border-t border-white/10">
          {service.stats?.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#C4BBD3] font-geomanist">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <CallToAction />
      <TestimonialsSection />
    </main>
  );
}
