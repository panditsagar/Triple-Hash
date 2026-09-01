import Image from 'next/image'
import React from 'react'
import ScrollReveal from "./Gsap/ScrollReveal";

const HeroText = () => {
    return (
        // Adjusted main container for responsive flex direction, margin-top, and alignment
        <div className="flex flex-col lg:flex-row lg:justify-between mt-30 sm:mt-32 md:mt-40 lg:mt-50 max-w-[1360px] px-6 lg:px-8 z-2 mx-auto">
            {/* Left column for text content */}
            {/* w-full on mobile, w-1/2 on large screens. items-center on mobile, items-start on large. */}
            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2">
                <div
                    className="flex flex-col items-center  lg:items-start text-center lg:text-left animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}

                >
                    <ScrollReveal  >
                        <h1>
                            <span className=" heading reveal-item block z-2 lead text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Have an Idea?

                            </span>
                            <span
                                className="heading reveal-item block bg-clip-text text-transparent "
                                style={{
                                    backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                                    WebkitBackgroundClip: "text",
                                }}
                            >
                                Let’s Engineer It Into Reality !
                            </span>
                        </h1>
                    </ScrollReveal>



                    <p className="mt-6  z-2  text-[#C4BBD3] max-w-lg description">
                        We help founders turn raw ideas into high-performing web & mobile apps — with full-stack development, AI integration, and scalable architecture built for long-term&nbsp;growth.
                    </p>

                    <div className="mt-6 sm:mt-8 flex z-2 flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-4 w-full sm:w-auto">

                        <button onClick={() => window.open('https://hashboard.in/book/web', '_blank')} className="cursor-pointer buttonfont w-full sm:w-auto border border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white   px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                            Get Started Today
                        </button>

                        <button onClick={() => window.open('https://hashboard.in/book/web', '_blank')} className="cursor-pointer buttonfont w-full sm:w-auto   bg-transparent border border-[#FFFFFF63] text-gray-200  px-5 py-2 rounded-lg hover:bg-white/10 hover:border-gray-400 transition-colors duration-300">
                            Book Clarity Call
                        </button>

                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 mt-10 lg:mt-0">

                <div className="hidden lg:block relative h-full lg:-ms-12  w-full animate-fade-in">
                    <div className="">
                        <Image
                            src="/hash.webp"
                            alt="AI Workflow"
                            fill
                            className="object-contain scale-140"
                            priority
                            style={{ filter: 'drop-shadow(0px 10px 40px rgba(238, 79, 39, 0.25))' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroText