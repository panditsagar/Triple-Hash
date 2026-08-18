"use client"; // This page will also use client-side hooks and Framer Motion

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiPhp,
    SiBootstrap,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiFirebase,
    SiPrisma,
    SiCloudflare,
    SiCapacitor,
    SiExpo,
    SiRazorpay,
    SiGooglecalendar,
    SiZoom,
    SiAuth0,
    SiOpenai,
    SiGoogle,
} from "react-icons/si";
import { FaChevronLeft, FaExternalLinkAlt, FaCreditCard, FaPlayCircle, FaCode, FaReceipt, FaArrowRight, FaRocket, FaUserTie, FaTag } from "react-icons/fa";
import TestimonialsSection from "@/components/TestimonialsSection";

import { projects } from "../projects";

const techIconMap = {
    "next.js": { icon: SiNextdotjs, color: "text-white" },
    "react.js": { icon: SiReact, color: "text-[#61DAFB]" },
    "react": { icon: SiReact, color: "text-[#61DAFB]" },
    "react native": { icon: SiReact, color: "text-[#61DAFB]" },
    "typescript": { icon: SiTypescript, color: "text-[#3178C6]" },
    "node.js": { icon: SiNodedotjs, color: "text-[#5FA04E]" },
    "express.js": { icon: SiExpress, color: "text-gray-300" },
    "express": { icon: SiExpress, color: "text-gray-300" },
    "php": { icon: SiPhp, color: "text-[#777BB4]" },
    "bootstrap": { icon: SiBootstrap, color: "text-[#7952B3]" },
    "tailwind css": { icon: SiTailwindcss, color: "text-[#06B6D4]" },
    "mysql": { icon: SiMysql, color: "text-[#4479A1]" },
    "postgresql": { icon: SiPostgresql, color: "text-[#4169E1]" },
    "mongodb": { icon: SiMongodb, color: "text-[#47A248]" },
    "firebase": { icon: SiFirebase, color: "text-[#FFCA28]" },
    "firebase login": { icon: SiFirebase, color: "text-[#FFCA28]" },
    "firebase auth": { icon: SiFirebase, color: "text-[#FFCA28]" },
    "firestore": { icon: SiFirebase, color: "text-[#FFA000]" },
    "prisma": { icon: SiPrisma, color: "text-white" },
    "cloudflare r2": { icon: SiCloudflare, color: "text-[#F38020]" },
    "capacitor": { icon: SiCapacitor, color: "text-[#119EFF]" },
    "expo": { icon: SiExpo, color: "text-white" },
    "razorpay": { icon: SiRazorpay, color: "text-[#3395FF]" },
    "revenuecat": { icon: FaReceipt, color: "text-[#E75963]" },
    "cashfree": { icon: FaCreditCard, color: "text-[#FF7043]" },
    "google calendar": { icon: SiGooglecalendar, color: "text-[#4285F4]" },
    "google calendar api": { icon: SiGooglecalendar, color: "text-[#4285F4]" },
    "zoom": { icon: SiZoom, color: "text-[#2D8CFF]" },
    "zoom api": { icon: SiZoom, color: "text-[#2D8CFF]" },
    "oauth 2.0": { icon: SiAuth0, color: "text-[#EB5424]" },
    "vidstack player": { icon: FaPlayCircle, color: "text-[#E11D48]" },
    "model context protocol": { icon: SiOpenai, color: "text-[#10A37F]" },
    "ai integration": { icon: SiOpenai, color: "text-[#10A37F]" },
    "gemini api": { icon: SiGoogle, color: "text-[#4285F4]" },
};

function TechBadge({ tech }) {
    const key = tech.toLowerCase().trim();
    const config = techIconMap[key] || { icon: FaCode, color: "text-orange-400" };
    const Icon = config.icon;
    return (
        <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium text-gray-200 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all duration-300 shadow-sm group">
            <Icon className={`w-4 h-4 ${config.color} shrink-0 group-hover:scale-110 transition-transform`} />
            <span>{tech}</span>
        </span>
    );
}

export default function ProjectDetailPage({ params }) {
    const projectId = parseInt(params.id); // Get the ID from the URL parameters
    const project = projects.find((p) => p.id === projectId);

    // Handle case where project is not found
    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0D0816] px-4">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <p className="text-lg text-gray-400 mb-8">
                    The project you are looking for does not exist.
                </p>
                <Link
                    href="/portfolio"
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300"
                >
                    <FaChevronLeft /> Back to Portfolio
                </Link>
            </div>
        );
    }

    // Framer Motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
        <section className="min-h-screen pb-20 pt-40 bg-[#0D0816] text-white overflow-hidden">
            <div className="max-w-[1360px] mx-auto px-4 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="mb-12"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <Link
                            href="/portfolio" // Link back to your main portfolio page or home
                            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 group"
                        >
                            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
                        </Link>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <motion.h1
                            variants={itemVariants}
                            className="headline"
                            style={{
                                backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                WebkitBackgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            {project.title}
                        </motion.h1>

                        {project.link && (
                            <motion.div variants={itemVariants} className="shrink-0">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,140,0,0.4)] cursor-pointer"
                                >
                                    Visit Project <FaExternalLinkAlt className="ml-1 w-3.5 h-3.5" />
                                </a>
                            </motion.div>
                        )}
                    </div>
                    <motion.p
                        variants={itemVariants}
                        className="subheadline text-gray-400 mb-8"
                    >
                        {project.category}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="
    relative 
    w-full 
    max-w-[1300px] 
    h-[200px] sm:h-[350px] md:h-[450px] lg:h-[600px] 
    overflow-hidden 
    mb-12
  "
                    >
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="rounded-2xl  "
                            priority
                        />
                    </motion.div>

                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                    <div className="lg:col-span-2">
                        <motion.h2 variants={itemVariants} className="subheadline mb-4 text-white">
                            Project Overview
                        </motion.h2>
                        <motion.p variants={itemVariants} className="description text-[#C4BBD3] mb-8">
                            {project.description}
                        </motion.p>

                        {project.technologies && (
                            <>
                                <motion.h3 variants={itemVariants} className="subheadline mb-3 text-white">
                                    Technologies Used
                                </motion.h3>
                                <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
                                    {project.technologies.map((tech, index) => (
                                        <motion.div key={index} variants={itemVariants}>
                                            <TechBadge tech={tech} />
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </>
                        )}

                        {project.challenge && (
                            <>
                                <motion.h3 variants={itemVariants} className="subheadline mb-3 text-white">
                                    Challenges
                                </motion.h3>
                                <motion.p variants={itemVariants} className="description text-[#C4BBD3] mb-8">
                                    {project.challenge}
                                </motion.p>
                            </>
                        )}

                        {project.solution && (
                            <>
                                <motion.h3 variants={itemVariants} className="subheadline mb-3 text-white">
                                    Solution Implemented
                                </motion.h3>
                                <motion.p variants={itemVariants} className="description text-[#C4BBD3] mb-8">
                                    {project.solution}
                                </motion.p>
                            </>
                        )}
                          {project.impact && (
                            <>
                                <motion.h3 variants={itemVariants} className="subheadline mb-3 text-white">
                                    Impact
                                </motion.h3>
                                <motion.p variants={itemVariants} className="description text-[#C4BBD3] mb-8">
                                    {project.impact}
                                </motion.p>
                            </>
                        )}
                    </div>

                    <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8 space-y-6 lg:sticky lg:top-28 lg:self-start">
                        {/* Sleek Project Metadata & Client Info Card */}
                        <motion.div
                            variants={itemVariants}
                            className="p-6 rounded-2xl bg-[#140E20]/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-5"
                        >
                            {/* Client Block */}
                            <div className="flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 shadow-inner">
                                    <FaUserTie className="w-4 h-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block">
                                        Client / Founder
                                    </span>
                                    <h4 className="text-base font-bold text-white tracking-tight mt-0.5 truncate">
                                        {project.clientName}
                                    </h4>
                                    <p className="text-xs text-[#C4BBD3] font-medium mt-0.5">
                                        {project.profession}
                                    </p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            {/* Industry / Category Block */}
                            <div className="space-y-2.5">
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                    <FaTag className="w-2.5 h-2.5 text-orange-400" />
                                    Project Scope & Category
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {project.category.split(",").map((cat, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#E0D8EE] border border-white/10 text-xs font-medium transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                            {cat.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Project Highlights / Key Specs */}
                        <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-4">
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Project Highlights</h3>
                            
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                                    <span className="text-gray-400 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        Deployment
                                    </span>
                                    <span className="text-white font-medium">Production Live</span>
                                </div>

                                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                                    <span className="text-gray-400">Architecture</span>
                                    <span className="text-white font-medium">Cloud & Scalable</span>
                                </div>

                                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                                    <span className="text-gray-400">Deliverables</span>
                                    <span className="text-white font-medium">Full-Stack Solution</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* High-Converting CTA Card */}
                        <motion.div
                            variants={itemVariants}
                            className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/15 via-white/[0.02] to-transparent border border-orange-500/30 backdrop-blur-md space-y-4 shadow-[0_10px_30px_rgba(255,140,0,0.1)]"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-md">
                                <FaRocket className="w-5 h-5" />
                            </div>

                            <div className="space-y-1.5">
                                <h4 className="text-lg font-bold text-white leading-snug">
                                    Need a similar solution?
                                </h4>
                                <p className="text-xs text-[#C4BBD3] leading-relaxed">
                                    Let’s turn your vision into an AI-powered, high-converting product tailored to your business.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white px-5 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,140,0,0.4)] cursor-pointer"
                            >
                                Book a Strategy Call <FaArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Testimonials Section above Footer */}
        <TestimonialsSection />
        </>
    );
}