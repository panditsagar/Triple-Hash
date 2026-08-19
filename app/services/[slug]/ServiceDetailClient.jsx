"use client";

import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CallToAction from "../../../components/CallToAction";
import NavBar from "../../../components/NavBar";

import TestimonialsSection from "@/components/TestimonialsSection";
import SpotlightCard from "@/components/ReactBit/SpotlightCard";

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
      </section>

      {/* Feature Cards & Client Quote Banner Section */}
      <section className="w-full  pb-20  relative overflow-hidden font-raleway">
        <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          {/* Top 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Card 1 */}
            <SpotlightCard spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)">
              <div
                className="w-full h-full rounded-[25px] p-6 lg:p-10 flex flex-col justify-between"
                style={{
                  border: "1px solid hsla(0, 0%, 100%, .16)",
                  boxShadow: "inset 0 1px #ff8e5d66",
                  backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Pinwheel Icon */}
                    <div className="w-[56px] h-[56px] rounded-[16px] bg-[#cbd5e1] flex items-center justify-center text-[#1E192B] shrink-0 shadow-md">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                      </svg>
                    </div>
                    <h3 className="subheadline text-white font-bold text-lg leading-snug">
                      B2B expertise that matters
                    </h3>
                  </div>
                  <p className="description text-[#C4BBD3] text-sm lg:text-base leading-relaxed">
                    Deep expertise in navigating B2B challenges and
                    opportunities.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2 */}
            <SpotlightCard spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)">
              <div
                className="w-full h-full rounded-[25px] p-6 lg:p-8 flex flex-col justify-between"
                style={{
                  border: "1px solid hsla(0, 0%, 100%, .16)",
                  boxShadow: "inset 0 1px #ff8e5d66",
                  backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Flower Petals Icon */}
                    <div className="w-[56px] h-[56px] rounded-[16px] bg-[#cbd5e1] flex items-center justify-center text-[#1E192B] shrink-0 shadow-md">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <ellipse cx="12" cy="7" rx="3" ry="5" />
                        <ellipse cx="12" cy="17" rx="3" ry="5" />
                        <ellipse cx="7" cy="12" rx="5" ry="3" />
                        <ellipse cx="17" cy="12" rx="5" ry="3" />
                      </svg>
                    </div>
                    <h3 className="subheadline text-white font-bold text-lg leading-snug">
                      End-to-End consulting
                    </h3>
                  </div>
                  <p className="description text-[#C4BBD3] text-sm lg:text-base leading-relaxed">
                    From planning to execution, we cover every step.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)">
              <div
                className="w-full h-full rounded-[25px] p-6 lg:p-8 flex flex-col justify-between"
                style={{
                  border: "1px solid hsla(0, 0%, 100%, .16)",
                  boxShadow: "inset 0 1px #ff8e5d66",
                  backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Starburst Icon */}
                    <div className="w-[56px] h-[56px] rounded-[16px] bg-[#cbd5e1] flex items-center justify-center text-[#1E192B] shrink-0 shadow-md">
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                      </svg>
                    </div>
                    <h3 className="subheadline text-white font-bold text-lg leading-snug">
                      Data-Driven decisions
                    </h3>
                  </div>
                  <p className="description text-[#C4BBD3] text-sm lg:text-base leading-relaxed">
                    We use data and experience to drive smart business moves.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Feature Card 4 */}
          <SpotlightCard spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)">
            <div
              className="w-full rounded-[25px] p-6 lg:p-10 flex flex-col justify-between"
              style={{
                border: "1px solid hsla(0, 0%, 100%, .16)",
                boxShadow: "inset 0 1px #ff8e5d66",
                backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
              }}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {/* Lightning / Growth Feature Icon */}
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[#cbd5e1] flex items-center justify-center text-[#1E192B] shrink-0 shadow-md">
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <h3 className="subheadline text-white font-bold text-lg lg:text-xl leading-snug">
                    Tailored B2B Strategy & Execution
                  </h3>
                </div>
                <p className="description text-[#C4BBD3] text-sm lg:text-base leading-relaxed">
                  Our insights, professionalism, and tailored approach help you
                  unlock new growth, streamline business operations, and build
                  an extension of your leadership team. We focus on delivering
                  measurable results and long-term value for your business.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Performance & Measurable Results Section */}
      <section className="w-full pb-20 relative overflow-hidden">
        <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex gap-6 xl:gap-8 justify-between items-center">
            {/* Left Column: Globe Image */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative z-10 w-full max-w-[500px] h-auto p-4 flex items-center justify-center">
                <img
                  src="/globe-mesh.png"
                  alt="Globe performance graphic"
                  className="w-full h-auto object-contain max-h-[480px] invert-50 "
                />
              </div>
            </div>

            {/* Right Column: Title, Description & Stat Items */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Section Title */}
              <h2
                style={{
                  backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                  WebkitBackgroundClip: "text",
                }}
                className="headline bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight mb-6"
              >
                {service?.performanceTitle ||
                  "Proven performance, Measurable results"}
              </h2>

              {/* Description Paragraph */}
              <p className="description text-[#C4BBD3] text-base lg:text-lg leading-relaxed mb-12 max-w-xl">
                {service?.performanceDescription ||
                  "Our work is backed by measurable results. These numbers reflect the trust, success, and outcomes we've delivered for our B2B partners across industries and regions."}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                {(
                  service?.stats || [
                    {
                      value: "4X",
                      label: "Average ROI on digital strategy projects",
                    },
                    {
                      value: "5",
                      label: "Countries served with B2B services",
                    },
                  ]
                ).map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    {/* Stat Metric Number */}
                    <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
                      {stat.value}
                    </div>

                    {/* Horizontal Border Line Divider */}
                    <div className="w-full h-[1px] bg-[#FFFFFF26] mb-4" />

                    {/* Stat Label */}
                    <p className="description text-[#C4BBD3] text-sm sm:text-base leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CallToAction />
      <TestimonialsSection />
    </main>
  );
}
