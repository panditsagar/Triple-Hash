"use client";

import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CallToAction from "../../../components/CallToAction";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpotlightCard from "@/components/ReactBit/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const renderIcon = (iconType) => {
  switch (iconType) {
    case "flower":
      return (
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
      );
    case "starburst":
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
        </svg>
      );
    case "lightning":
      return (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "pinwheel":
    default:
      return (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
        </svg>
      );
  }
};

const renderStepIcon = (iconType) => {
  switch (iconType) {
    case "flower":
      return (
        <svg
          className="w-8 h-8"
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
      );
    case "starburst":
      return (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
        </svg>
      );
    case "lightning":
      return (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "pinwheel":
    default:
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
        </svg>
      );
  }
};

const defaultFeatures = [
  {
    title: "B2B expertise that matters",
    description: "Deep expertise in navigating B2B challenges and opportunities.",
    icon: "pinwheel",
  },
  {
    title: "End-to-End consulting",
    description: "From planning to execution, we cover every step.",
    icon: "flower",
  },
  {
    title: "Data-Driven decisions",
    description: "We use data and experience to drive smart business moves.",
    icon: "starburst",
  },
  {
    title: "Tailored B2B Strategy & Execution",
    description:
      "Our insights, professionalism, and tailored approach help you unlock new growth, streamline business operations, and build an extension of your leadership team. We focus on delivering measurable results and long-term value for your business.",
    icon: "lightning",
  },
];

const defaultPerformance = {
  title: "Proven performance, Measurable results",
  description:
    "Our work is backed by measurable results. These numbers reflect the trust, success, and outcomes we've delivered for our B2B partners across industries and regions.",
  image: "/globe-mesh.png",
  stats: [
    {
      value: "4X",
      label: "Average ROI on digital strategy projects",
    },
    {
      value: "5",
      label: "Countries served with B2B services",
    },
  ],
};

const defaultRoadmap = {
  title: "Our 3-step approach to strategic B2B growth",
  description:
    "Our streamlined 3-step approach ensures your business gets a focused strategy, practical solutions, and measurable outcomes.",
  ctaText: "Explore our services",
  steps: [
    { line1: "Understand", line2: "your business", icon: "flower" },
    { line1: "Build the right", line2: "strategy", icon: "pinwheel" },
    { line1: "Execute &", line2: "deliver results", icon: "starburst" },
  ],
};

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

  const features = service.features || defaultFeatures;
  const topThreeFeatures = features.slice(0, 3);
  const fourthFeature = features[3] || defaultFeatures[3];

  const performanceTitle =
    service.performance?.title ||
    service.performanceTitle ||
    defaultPerformance.title;
  const performanceDescription =
    service.performance?.description ||
    service.performanceDescription ||
    defaultPerformance.description;
  const performanceImage =
    service.performance?.image || defaultPerformance.image;
  const stats =
    service.performance?.stats || service.stats || defaultPerformance.stats;

  const roadmapTitle = service.roadmap?.title || defaultRoadmap.title;
  const roadmapDescription =
    service.roadmap?.description || defaultRoadmap.description;
  const roadmapCtaText = service.roadmap?.ctaText || defaultRoadmap.ctaText;
  const roadmapSteps = service.roadmap?.steps || defaultRoadmap.steps;

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
            <p className="text-xl text-[#C4BBD3] font-normal mb-8">
              {service.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex z-2 flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() =>
                  window.open("https://hashboard.in/book/web", "_blank")
                }
                className="cursor-pointer buttonfont w-full sm:w-auto border border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              >
                Get Started Today
              </button>

              <button
                onClick={() =>
                  window.open("https://hashboard.in/book/web", "_blank")
                }
                className="cursor-pointer buttonfont w-full sm:w-auto bg-transparent border border-[#FFFFFF63] text-gray-200 px-5 py-2 rounded-lg hover:bg-white/10 hover:border-gray-400 transition-colors duration-300"
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
                src={service.heroImage || "/serviceshero.png"}
                alt={`${service.title} Hero Graphic`}
                className="relative w-full h-auto object-contain scale-115 lg:scale-130 xl:scale-145 transform transition-transform duration-500 drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards & Client Quote Banner Section */}
      <section className="w-full pb-24 relative overflow-hidden font-raleway">
        <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          {/* Top 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {topThreeFeatures.map((feat, idx) => (
              <SpotlightCard
                key={idx}
                spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)"
              >
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
                      {/* Icon */}
                      <div className="w-[56px] h-[56px] rounded-[16px] bg-[#cbd5e1] flex items-center justify-center text-[#1E192B] shrink-0 shadow-md">
                        {renderIcon(feat.icon)}
                      </div>
                      <h3 className="subheadline text-white font-bold text-lg leading-snug">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="description text-[#C4BBD3] text-sm lg:text-base leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
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
                  {/* Icon */}
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[#cbd5e1] flex items-center justify-center text-[#1E192B] shrink-0 shadow-md">
                    {renderIcon(fourthFeature.icon || "lightning")}
                  </div>
                  <h3 className="subheadline text-white font-bold text-lg lg:text-xl leading-snug">
                    {fourthFeature.title}
                  </h3>
                </div>
                <p className="description text-[#C4BBD3] text-sm lg:text-base leading-relaxed">
                  {fourthFeature.description}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Performance & Measurable Results Section */}
      <section className="w-full pb-24 relative overflow-hidden">
        <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex gap-6 xl:gap-8 justify-between items-center">
            {/* Left Column: Globe Image */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative z-10 w-full max-w-[500px] h-auto p-4 flex items-center justify-center">
                <img
                  src={performanceImage}
                  alt="Globe performance graphic"
                  className="w-full h-auto object-contain max-h-[480px] invert-50"
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
                {performanceTitle}
              </h2>

              {/* Description Paragraph */}
              <p className="description text-[#C4BBD3] text-base lg:text-lg leading-relaxed mb-12 max-w-xl">
                {performanceDescription}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                {stats.map((stat, index) => (
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

      {/* 3-Step Strategic B2B Growth Roadmap Section */}
      <section className="w-full pb-24 relative overflow-hidden">
        <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Description & CTA */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2
                style={{
                  backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                  WebkitBackgroundClip: "text",
                }}
                className="headline bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight mb-6"
              >
                {roadmapTitle}
              </h2>

              <p className="description text-[#C4BBD3] text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                {roadmapDescription}
              </p>

              <button
                onClick={() =>
                  window.open("https://hashboard.in/book/web", "_blank")
                }
                className="cursor-pointer buttonfont border border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
              >
                {roadmapCtaText}
              </button>
            </div>

            {/* Right Column: Stepped Growth Curve Area Chart & Milestone Cards */}
            <div className="lg:col-span-7 w-full pt-8 lg:pt-0">
              <div className="relative w-full max-w-[680px] mx-auto h-[380px] sm:h-[420px] lg:h-[450px] flex flex-col justify-end">
                {/* SVG Growth Chart with Highlighted Step 1 Region & Dashed Pin Lines */}
                <svg
                  className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 700 360"
                  preserveAspectRatio="none"
                >
                  <defs>
                    {/* Step 1 Highlighted Area Fill Gradient (Brand Orange/Gold Glow) */}
                    <linearGradient
                      id="step1HighlightGradient"
                      x1="0"
                      y1="1"
                      x2="1"
                      y2="0"
                    >
                      <stop
                        offset="0%"
                        stopColor="#FF8C00"
                        stopOpacity="0.12"
                      />
                      <stop
                        offset="60%"
                        stopColor="#FF9B26"
                        stopOpacity="0.45"
                      />
                      <stop
                        offset="100%"
                        stopColor="#FFD166"
                        stopOpacity="0.75"
                      />
                    </linearGradient>

                    {/* Main Growth Area Fill Gradient (Brand Dark Purple/Orange Glow) */}
                    <linearGradient
                      id="mainGrowthAreaGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#1E142B" stopOpacity="0.8" />
                      <stop
                        offset="50%"
                        stopColor="#6B21EF"
                        stopOpacity="0.25"
                      />
                      <stop
                        offset="100%"
                        stopColor="#FF8C00"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>

                  {/* 1. Step 1 Highlighted Triangle Base (0 to 220) */}
                  <path
                    d="M 0 340 Q 110 325, 220 295 L 220 340 Z"
                    fill="url(#step1HighlightGradient)"
                  />

                  {/* 2. Main Area under curve (220 to 700) */}
                  <path
                    d="M 220 295 Q 460 220, 700 140 L 700 340 L 220 340 Z"
                    fill="url(#mainGrowthAreaGradient)"
                  />

                  {/* 3. Glowing Top Curve Stroke */}
                  <path
                    d="M 0 340 Q 300 300, 700 140"
                    fill="none"
                    stroke="url(#curveStrokeGradient)"
                    strokeWidth="3.5"
                  />

                  {/* 4. Vertical Dashed Pin Lines dropping from Right Edge of each Card */}
                  <line
                    x1="220"
                    y1="196"
                    x2="220"
                    y2="340"
                    stroke="#FFFFFF1A"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1="462"
                    y1="124"
                    x2="462"
                    y2="340"
                    stroke="#FFFFFF1A"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1="700"
                    y1="52"
                    x2="700"
                    y2="340"
                    stroke="#FFFFFF1A"
                    strokeDasharray="4 4"
                    strokeWidth="1.5"
                  />
                </svg>

                {/* Cards overlay positioned relative to percentage coordinates */}
                <div className="relative z-10 w-full h-full">
                  {/* Step 1 Card */}
                  {roadmapSteps[0] && (
                    <div className="absolute left-[31.4%] top-[40%] -translate-x-full">
                      <div className="rounded-t-xl px-4 py-3 flex items-center gap-3 border border-white/10 min-w-[170px]">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbd5e1] shrink-0 shadow-md">
                          {renderStepIcon(roadmapSteps[0].icon)}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-white font-bold text-md leading-tight">
                            {roadmapSteps[0].line1}
                          </span>
                          <span className="text-white font-bold text-md leading-tight">
                            {roadmapSteps[0].line2}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2 Card */}
                  {roadmapSteps[1] && (
                    <div className="absolute left-[66%] top-[20%] -translate-x-full">
                      <div className="rounded-t-xl px-4 py-3 flex items-center gap-3 border border-white/10 min-w-[170px]">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbd5e1] shrink-0 shadow-md">
                          {renderStepIcon(roadmapSteps[1].icon)}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-white font-bold text-md leading-tight">
                            {roadmapSteps[1].line1}
                          </span>
                          <span className="text-white font-bold text-md leading-tight">
                            {roadmapSteps[1].line2}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 Card */}
                  {roadmapSteps[2] && (
                    <div className="absolute left-[100%] top-[0%] -translate-x-full">
                      <div className="rounded-t-xl px-4 py-3 flex items-center gap-3 border border-white/10 min-w-[180px]">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#cbd5e1] shrink-0 shadow-md">
                          {renderStepIcon(roadmapSteps[2].icon)}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-white font-bold text-md leading-tight">
                            {roadmapSteps[2].line1}
                          </span>
                          <span className="text-white font-bold text-md leading-tight">
                            {roadmapSteps[2].line2}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
