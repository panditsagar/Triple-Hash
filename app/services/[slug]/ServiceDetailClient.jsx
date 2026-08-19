"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiArrowLeft,
  HiArrowRight,
  HiCheckCircle,
  HiSparkles,
  HiCode,
  HiLightningBolt,
} from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../../components/Services/Hero.module.css";
import ScrollReveal from "../../../components/Gsap/ScrollReveal";
import SpotlightCard from "../../../components/ReactBit/SpotlightCard";
import CallToAction from "../../../components/CallToAction";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

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

      {/* Overview Section */}
      <section className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-geomanist mb-4">
            Overview
          </h2>
          <p className="text-lg text-[#C4BBD3] leading-relaxed max-w-4xl">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-geomanist mb-3">
            Key Capabilities
          </h2>
          <p className="text-[#C4BBD3] text-base max-w-2xl mx-auto">
            What makes our {service.title} service standout in performance and
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features?.map((feature, idx) => (
            <SpotlightCard
              key={idx}
              className="custom-spotlight-card h-full"
              spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(107, 33, 239, 0.3), rgba(7, 122, 199, 0.15) 60%, transparent 80%)"
            >
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#077AC7]/20 to-[#6B21EF]/20 border border-white/10 flex items-center justify-center text-[#10B981] mb-6">
                    <HiSparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-geomanist mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#C4BBD3] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Process Workflow Section */}
      <section className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-geomanist mb-3">
            Our Process
          </h2>
          <p className="text-[#C4BBD3] text-base max-w-2xl mx-auto">
            A proven 4-step execution model engineered for predictability and
            speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process?.map((proc, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 relative"
            >
              <span className="text-3xl font-extrabold text-[#077AC7] opacity-60 font-mono mb-4 block">
                {proc.step}
              </span>
              <h4 className="text-lg font-bold text-white mb-2 font-geomanist">
                {proc.title}
              </h4>
              <p className="text-xs text-[#C4BBD3] leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack & Deliverables */}
      <section className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white font-geomanist mb-2">
              Tools & Technologies We Use
            </h3>
            <p className="text-sm text-[#C4BBD3] max-w-xl">
              We leverage modern enterprise frameworks and industry-standard
              tools to build robust solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 max-w-md justify-start md:justify-end">
            {service.techStack?.map((tech, idx) => (
              <span
                key={idx}
                className="bg-white/10 border border-white/15 text-white px-4 py-2 rounded-xl text-xs font-semibold font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 py-16 relative z-10 border-t border-white/10">
        <h3 className="text-xl font-bold text-white font-geomanist mb-6">
          Explore Other Services
        </h3>
        <div className="flex flex-wrap gap-3">
          {allServices
            ?.filter((s) => s.id !== service.id)
            .map((otherService) => (
              <Link
                key={otherService.id}
                href={`/services/${otherService.slug}`}
                className="bg-white/5 border border-white/10 hover:border-white/30 text-white/80 hover:text-white px-5 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 flex items-center gap-2 group"
              >
                <span>{otherService.title}</span>
                <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <CallToAction />

      
    </main>
  );
}
