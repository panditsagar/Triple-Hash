'use client';

import React, { useLayoutEffect, useRef } from 'react';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const lines = textRef.current?.querySelectorAll('.animateLine');
            if (lines && lines.length > 0) {
                gsap.from(lines, {
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    opacity: 0,
                    y: 50,
                    stagger: 0.3,
                    duration: 0.8,
                    ease: "power3.out",
                });
            }

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
                    delay: 0.6,
                    ease: "power3.out",
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={`${styles.section} relative overflow-hidden`}>
            {/* Red Radial Gradient Centered on Screen */}
            <div
                className="absolute top-[-2%] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[350px] sm:h-[450px] md:h-[550px] pointer-events-none rounded-full blur-[100px] sm:blur-[150px] opacity-80 z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(238, 79, 39, 0.45) 0%, rgba(220, 38, 38, 0.32) 35%, rgba(139, 53, 107, 0.22) 60%, transparent 80%)',
                }}
            />

            <div className={`${styles.paddingSection} relative z-10`}>
                <aside className={styles.containerSmall}>
                    {/* Left Side - Unmodified Original Content & Styling */}
                    <div className={styles.heroSection} ref={textRef}>
                        <div style={{
                            backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                            WebkitBackgroundClip: "text",
                        }} className={`animateLine subheadline bg-clip-text text-transparent ${styles.subtitle}`}>
                            [ FROM IDEA TO IMPACT ]
                        </div>
                        <h1
                            style={{
                                backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                WebkitBackgroundClip: 'text',
                            }}
                            className="animateLine text-transparent bg-clip-text"
                        >
                            Web, Mobile & AI Solutions That Scale Beyond Launch
                        </h1>
                        <p className="animateLine description w">
                            Empower your vision, ignite your growth. Effortel provides the expertise,
                            technology, and unwavering support to transform your communication services
                            with ours.
                        </p>
                    </div>

                    {/* Right Side Image Placement & Scaling */}
                    <div className={`${styles.isImage} relative`}>
                        <div className={`${styles.imageWrapper} relative group max-w-[800px] lg:translate-x-16 xl:translate-x-28 lg:-translate-y-12 xl:-translate-y-20`} ref={imageRef}>
                            {/* Light Red Radial Gradient Displayed Above & Over the Image */}
                            <div
                                className="absolute -top-12 sm:-top-24 left-1/2 -translate-x-1/2 w-full max-w-[750px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full blur-[100px] sm:blur-[140px] opacity-50 pointer-events-none z-20 mix-blend-screen"
                                style={{
                                    background: 'radial-gradient(circle at 50% 30%, rgba(255, 99, 71, 0.28) 0%, rgba(239, 68, 68, 0.16) 40%, rgba(139, 53, 107, 0.08) 70%, transparent 85%)',
                                }}
                            />
                            <img
                                src="/serviceshero.png"
                                alt="Effortel Services"
                                className="relative w-full h-auto object-contain scale-115 lg:scale-130 xl:scale-145 transform transition-transform duration-500 drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10"
                            />
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
