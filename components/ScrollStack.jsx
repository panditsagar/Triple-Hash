'use client';
import React from 'react';
import { MdCheck } from 'react-icons/md';
import styles from './ScrollStackPureCSS.module.css';
import { FaCode } from "react-icons/fa";

export default function ScrollStack() {
  return (
    <div className={styles.wrapper}>
      {/* Ambient Gradient Glow between IntegrationsSection and ScrollStack */}
      <div
        className="pointer-events-none absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[700px] h-[350px] rounded-full opacity-60 blur-[110px] z-0"
        style={{
          background: "radial-gradient(circle, #7877C6 0%, #5159d9 35%, transparent 5%)",
        }}
      />

      <div className={styles.container}>
        <div className={styles.cards}>
          {/* card 1 */}
          <div
            className={`${styles.card1} rounded-2xl shadow-2xl border border-gray-700 [background:radial-gradient(circle_at_top_left,rgba(0,200,255,0.4),transparent_10%),radial-gradient(circle_at_top_right,rgba(0,200,255,0.4),transparent_10%),radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.4),transparent_2%),radial-gradient(circle_at_bottom_right,rgba(0,200,255,0.4),transparent_10%),#FFF9EF]`}
          >
            <div className="flex flex-col-reverse lg:flex-row items-center w-full h-full gap-5 lg:gap-20 p-4 sm:p-8 lg:p-14">
              <div className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-4 lg:p-8">
                <div className="flex flex-col gap-2 sm:gap-4">
                  <h2 className="text-black headline text-xl sm:text-2xl lg:text-3xl">
                    Apps? Nah.   We Build Business Engines.
                  </h2>
                  <p className="lg:w-[100%] text-gray-800 description text-sm sm:text-base">
                    Every feature we design is tied to your business goals — not just technical specs. Our team blends entrepreneurial insight with technical expertise, so what you get isn’t just a product… it’s a system that helps you grow.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:gap-6">
                  <p className="flex gap-2 description text-sm sm:text-base"><strong>We follow a simple, proven framework to bring your vision to life:</strong></p>
                  <p className="flex items-start gap-2 description text-sm sm:text-base"><span className="text-gray-700 shrink-0 mt-0.5"><FaCode className="w-5 h-5 sm:w-6 sm:h-6" /></span><span><strong>Plan: </strong> Understand your goals, market, and users.</span></p>
                  <p className="flex items-start gap-2 description text-sm sm:text-base"><span className="text-gray-700 shrink-0 mt-0.5"><FaCode className="w-5 h-5 sm:w-6 sm:h-6" /></span><span><strong>Build: </strong> Develop fast, scalable products with AI at the core.</span></p>
                  <p className="flex items-start gap-2 description text-sm sm:text-base"><span className="text-gray-700 shrink-0 mt-0.5"><FaCode className="w-5 h-5 sm:w-6 sm:h-6" /> </span><span><strong>Scale: </strong> Optimize funnels, automate workflows, and grow with you.</span></p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-2 sm:p-4 lg:pr-8 flex justify-center">
                <img src="/service.jpeg" alt="Code Preview" className="
                    w-full
                    max-h-[260px]
                    sm:max-h-[340px]
                    lg:max-h-none
                    object-cover
                    lg:object-contain
                    rounded-2xl
                    origin-center 
                    lg:[transform:perspective(1000px)_rotateY(-20deg)]
                    transition-transform duration-300 ease-in-out
                    will-change-transform 
                    [backface-visibility:hidden] 
                    scale-100
                  " style={{ borderRadius: '16px' }} />
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div
            style={{ border: '1px solid hsla(0, 0%, 100%, .16)' }}
            className={`${styles.card2} rounded-2xl shadow-2xl bg-[#0e0918]`}
          >
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center w-full h-full gap-6 lg:gap-20 p-4 py-6 sm:py-8 lg:p-14 lg:py-20">
              <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-4 lg:p-8">
                <div className="flex flex-col gap-0">
                  <h2 className="headline text-transparent bg-clip-text bg-gradient-to-r from-white to-[#7C7C7C] text-xl sm:text-2xl lg:text-3xl">
                    Ship. Learn. Repeat.
                  </h2>
                  <p className="description text-gray-300 mt-2 sm:mt-4 text-sm sm:text-base">
                    <strong>We don’t just code — </strong> We run rapid feedback loops. That means you get results in weeks, not months, with continuous improvements and smarter scaling.
                  </p>
                </div>
                <div className="description text-[#C4BBD3] flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 text-sm sm:text-base">
                  <div className="flex gap-3 sm:gap-4 flex-wrap lg:flex-nowrap w-full">
                    <div className="flex items-start gap-2 w-full lg:w-[45%]">
                      <MdCheck className='w-5 h-5 sm:w-8 sm:h-8 shrink-0 mt-0.5 text-white' />
                      <p><strong className="text-white description"> Launch quickly</strong> on scalable foundations</p>
                    </div>
                    <div className="flex items-start justify-start gap-2 w-full lg:w-[45%]">
                      <MdCheck className='w-5 h-5 sm:w-8 sm:h-8 shrink-0 mt-0.5 text-white' />
                      <p><strong className="text-white description">Test live </strong> with real users & pivot fast</p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4 flex-wrap lg:flex-nowrap w-full">
                    <div className="flex items-start gap-2 w-full lg:w-[45%]">
                      <MdCheck className='w-5 h-5 sm:w-8 sm:h-8 shrink-0 mt-0.5 text-white' />
                      <p><strong className="text-white description">Improve continuously, </strong> not in one-off cycles</p>
                    </div>
                    <div className="flex items-start gap-2 w-full lg:w-[45%]">
                      <MdCheck className='w-5 h-5 sm:w-8 sm:h-8 shrink-0 mt-0.5 text-white' />
                      <p><strong className="text-white description">Scale confidently </strong> with data-driven decisions</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="w-full lg:w-1/2 p-2 sm:p-4 lg:p-8 flex justify-center">
                <img src="/code.webp" alt="Code Preview" className="
                  w-full
                  max-w-[480px]
                  lg:max-w-none
                  max-h-[260px]
                  sm:max-h-[340px]
                  lg:max-h-none
                  object-contain
                  p-[2px] rounded-[16px] 
                  origin-center 
                  lg:[transform:perspective(1000px)_rotateY(10deg)]
                  transition-transform duration-300 ease-in-out
                  will-change-transform 
                  [backface-visibility:hidden] 
                  scale-100
                " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
