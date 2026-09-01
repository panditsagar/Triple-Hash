"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "../Gsap/ScrollReveal";
import { projects } from "../../app/portfolio/projects";

export default function PortfolioProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const totalProjects = projects.length;

    const currentProject = projects[currentIndex] || projects[0];

    const nextProject = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, [totalProjects]);

    const prevProject = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    }, [totalProjects]);

    // Keyboard navigation (Arrow keys)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") prevProject();
            if (e.key === "ArrowRight") nextProject();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextProject, prevProject]);

    // Optional subtle autoplay (pauses on user hover)
    useEffect(() => {
        if (!isAutoPlay) return;
        const timer = setInterval(() => {
            nextProject();
        }, 6000);
        return () => clearInterval(timer);
    }, [isAutoPlay, nextProject]);

    // Handle drag swipe threshold
    const handleDragEnd = (_, info) => {
        const swipeThreshold = 50;
        if (info.offset.x < -swipeThreshold) {
            nextProject();
        } else if (info.offset.x > swipeThreshold) {
            prevProject();
        }
    };

    // Helper to calculate circular offset relative to active card
    const getCardOffset = (index) => {
        let diff = index - currentIndex;
        if (diff > totalProjects / 2) diff -= totalProjects;
        if (diff < -totalProjects / 2) diff += totalProjects;
        return diff;
    };

    return (
        <section
            className="relative min-h-screen  py-20     select-none bg-[#0D0816]"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="py-8 sm:py-16 sm:pb-0  ">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8 gap-4">
                        <ScrollReveal>
                            <h1
                                style={{
                                    backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                    WebkitBackgroundClip: "text",
                                }}
                                className="bg-clip-text text-transparent text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight"
                            >
                                WORK
                            </h1>
                            <p
                                style={{
                                    backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                                    WebkitBackgroundClip: "text",
                                }}
                                className="text-xs xs:text-sm sm:text-xl md:text-2xl bg-clip-text text-transparent font-light tracking-[0.2em] sm:tracking-[0.25em] mt-2 sm:mt-3"
                            >
                                PORTFOLIO MAGAZINE
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="text-left sm:text-right text-gray-400">
                                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">Edition</p>
                                <p className="text-xs sm:text-sm font-semibold text-gray-300">2025 • ISSUE #01</p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="h-px bg-gradient-to-r from-orange-500 via-white/20 to-transparent" />
                </div>

                {/* 3-Card Carousel Stage */}
                <div className="relative w-full py-4 sm:py-6 overflow-hidden">
                    {/* Left & Right Gradient Blend Overlays into Section Background */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-44 bg-gradient-to-r from-[#0D0816] via-[#0D0816]/80 to-transparent pointer-events-none z-30" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-44 bg-gradient-to-l from-[#0D0816] via-[#0D0816]/80 to-transparent pointer-events-none z-30" />

                    <div className="relative w-full h-[220px] xs:h-[260px] sm:h-[380px] md:h-[560px] flex items-center justify-center">
                        {projects.map((project, index) => {
                            const offset = getCardOffset(index);
                            const isActive = offset === 0;
                            const isVisible = Math.abs(offset) <= 1;

                            if (!isVisible) return null;

                            // Calculate 3-card transforms contained within section width
                            let xOffset = "0%";
                            let scale = 1.05;
                            let opacity = 1;
                            let zIndex = 20;

                            if (offset === -1) {
                                xOffset = "-53%";
                                scale = 0.88;
                                opacity = 0.25;
                                zIndex = 10;
                            } else if (offset === 1) {
                                xOffset = "53%";
                                scale = 0.88;
                                opacity = 0.25;
                                zIndex = 10;
                            }

                            return (
                                <motion.div
                                    key={project.id}
                                    className="absolute w-[88%] sm:w-[74%] md:w-[56%] lg:w-[50%] aspect-[16/10] cursor-grab active:cursor-grabbing"
                                    animate={{
                                        x: xOffset,
                                        scale: scale,
                                        opacity: opacity,
                                        zIndex: zIndex,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 28,
                                        mass: 0.8,
                                    }}
                                    drag={isActive ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.25}
                                    onDragEnd={handleDragEnd}
                                    onClick={() => {
                                        if (!isActive) setCurrentIndex(index);
                                    }}
                                >
                                    <div
                                        className={`relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden flex flex-col bg-[#1E1E22] border transition-all duration-300 ${
                                            isActive
                                                ? "border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.7)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
                                                : "border-white/10 hover:border-white/25 hover:opacity-70 shadow-lg cursor-pointer"
                                        }`}
                                    >
                                        {/* Exact Safari Top Toolbar */}
                                        <div className="h-7 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 flex items-center justify-between bg-white border-b border-[#E5E5EA] select-none z-10 shrink-0 gap-1.5 sm:gap-2">
                                            {/* Left Section: macOS Traffic Light Buttons */}
                                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0">
                                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]/60 shadow-sm" />
                                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#FEBC2E] border border-[#DEA123]/60 shadow-sm" />
                                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#28C840] border border-[#1AAB29]/60 shadow-sm" />
                                            </div>

                                            {/* Center Section: Safari Search / Address Capsule */}
                                            <div className="flex-1 max-w-[150px] xs:max-w-[190px] sm:max-w-[240px] md:max-w-[280px] h-5 sm:h-6 md:h-7 px-1.5 sm:px-2.5 rounded-md bg-white border border-[#E2E2E8] flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] md:text-[11px] text-gray-600 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                                                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="truncate text-[9px] sm:text-[10px] md:text-[11px] font-normal text-gray-700">
                                                    {project.link ? project.link.replace(/^https?:\/\//, '') : `${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`}
                                                </span>
                                            </div>

                                            {/* Right Section: Safari Action Icons (Home, Download, Share) */}
                                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-gray-600 shrink-0">
                                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Browser Viewport / Web Page Image Area */}
                                        {isActive ? (
                                            <Link href={`/portfolio/${project.id}`} className="relative flex-1 w-full h-full overflow-hidden bg-[#1E1E22] block cursor-pointer">
                                                <Image
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    fill
                                                    priority={isActive}
                                                    className="object-cover object-top"
                                                />
                                            </Link>
                                        ) : (
                                            <div className="relative flex-1 w-full h-full overflow-hidden bg-[#1E1E22]">
                                                <Image
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover object-top"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Minimal Pill Dots Pagination */}
                    <div className="flex items-center justify-center gap-1.5 mt-4 sm:mt-6">
                        {projects.map((p, idx) => (
                            <button
                                key={p.id}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to project ${idx + 1}`}
                                className={`transition-all duration-300 rounded-full cursor-pointer ${
                                    idx === currentIndex
                                        ? "w-5 sm:w-7 h-1.5 sm:h-2 bg-gradient-to-r from-[#ff9b26] to-[#ee4f27]"
                                        : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 hover:bg-white/60"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
