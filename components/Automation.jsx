
'use client';

import React from 'react';
import SpotlightCard2 from "./ReactBit/SpotlightCard2";

const CustomersSectionSimple = () => {
    return (
        <section className="bg-[#0D0816] w-full py-20 sm:py-30 overflow-hidden"
        >
            <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 pb-10  sm:pb-30" >
                <SpotlightCard2
                    spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 105, 97, 0.9), transparent 70%)">

                    <div className="border-white/30 border-2 rounded-[1rem] flex flex-col items-center text-center pb-14">
                        <div className=" w-full flex justify-center rounded-[1rem]"
                            style={{
                                backgroundImage: `
    radial-gradient(circle closest-corner at 80% 110%, #0f0a19, #26214900),
    linear-gradient(#67454599, #26214900 100%)
  `,
                                backgroundRepeat: "no-repeat",

                            }}

                        >
                            <img
                                src="/automation.webp"
                                alt="Automation Network Visual"
                                width="100%"
                                priority
                                className="max-w-full h-auto object-contain  rounded-xl"
                            />
                        </div>

                        {/* "n8n embed" Badge*/}
                        <div className="inline-flex items-center gap-0.5 pr-3 pt-0.5 mb-6 mt-[20] sm:mt-[10] md:mt-[-70]  rounded-full border border-[#ffffff1a] text-white text-[0.8rem]  
                                backdrop-filter backdrop-blur-md"
                            style={{
                                backgroundImage: `radial-gradient(circle closest-corner at 50% 160%, #ec8961, #8a546f 67%), linear-gradient(hsla(0, 0%, 100%, .18), transparent)`,
                                boxShadow: `inset 0 0 #c4bbd3, inset 0 4px 12px #ffffff0d`
                            }}
                        >

                            <img src="/case.png" alt="" />
                            <span>AI Power</span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-white px-4 sm:px-0 headline mb-6 max-w-xl">
                           We Power the Workflows, You Keep the Credit.
                        </h2>

                        {/* Description Paragraph */}
                        <p className="text-[#C4BBD3] description mb-8 max-w-xl  px-4 sm:px-0 ">
                           Wow your customers with seamless experiences. We build white-label solutions that let your users integrate, automate, and simplify their work — while your brand takes center stage.
                        </p>

                        {/* Call-to-Action Button */}
                        <button onClick={() => window.open('https://hashboard.in/book/web', '_blank')} className="cursor-pointer bg-gradient-to-r from-[#077AC7] to-[#6B21EF]  text-white buttonfont px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                            Book Your Call Now
                        </button>
                    </div>
                </SpotlightCard2>
            </div>

            <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 ">
                <SpotlightCard2
                    spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 105, 97, 0.9), transparent 70%)">

                    <div className='border-white/30 border-2 rounded-[1rem] flex flex-col items-center gap-10 py-20 sm:py-20 px-4 sm:px-0 text-center'
                        style={{ backgroundImage: `radial-gradient(circle closest-corner at 50% 110%, #0f0a19, #26214900), linear-gradient(#67454599, #26214900 60%)` }}>
                        <h2 className='w-fit sm:w-fit md:w-[55%]  text-white headline '>
                           From Workflows to Wow Moments, We’5e Got You.
                        </h2>
                        <p className='text-gray-100 text-[1.25rem]  w-fit sm:w-[70%] md:w-[50%]'>Don’t just take our word for it, try it out. 
                           <span className='bg-[#1F192A] p-1'><strong className="bg-gradient-to-l from-[#e768e6] to-[#ff9b26] bg-clip-text text-transparent "> TripleHash builds </strong></span>  custom workflows and automations that adapt to your business, not the other way around.
                        </p>

                        <button onClick={() => window.open('https://hashboard.in/book/web', '_blank')} className="cursor-pointer bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white buttonfont px-5 py-3 border border-[#FFFFFF63] rounded-lg hover:opacity-90 transition-opacity">
                            Build With TripleHash
                        </button>
                    </div>
                </SpotlightCard2>
            </div>
        </section>
    );
};

export default CustomersSectionSimple;