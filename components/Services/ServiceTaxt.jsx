"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollLines = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const lines = containerRef.current.querySelectorAll(".line");

      gsap.from(lines, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        stagger: 0.4,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const gradientText = {
    backgroundImage:
      "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="bg-[#0D0816] text-center ">
      <div
        ref={containerRef}
        className="
          font-[700] 
          leading-[1.1]
          pt-12
          text-[2.2rem] sm:text-[3rem] md:text-[4rem]    
          px-4
          flex flex-col items-center justify-center
          
        "
      >
        <h2
          style={{
            backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
            WebkitBackgroundClip: "text",
          }}
          className="
            line 
            font-mono 
             text-[1.2rem] sm:text-[1.2rem] md:text-[1.5rem]
            font-semibold 
            tracking-[0.1em] 
            uppercase 
            bg-clip-text text-transparent
            mb-6 sm:mb-10
          "
        >
          [ OUR SERVICES ]
        </h2>

        {/* gradient lines */}
        <p className="line w-full sm:w-[50%] text-center mb-8 sm:mb-12 md:mb-16" style={gradientText}>
          End-to-End Solutions That Build,

          Automate & Scale Your Business
        </p>
      </div>
    </div>
  );
};

export default ScrollLines;
