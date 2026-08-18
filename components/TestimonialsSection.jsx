// src/components/TestimonialsSection.jsx
'use client'; // If you're using Next.js App Router

import React from 'react';

import './TestimonialsSection.css'; // Import the CSS file for animation

const testimonials = [
  {
    quote: (
      <>
        TripleHash completely transformed our platform.{" "}
        <strong className="text-white">
          They built Codingwise’s website and LMS from the ground up
        </strong>{" "}
        — smooth, scalable, and loved by our students.
      </>
    ),
    author: "Sagar Chouksey",
    handle: "Founder, Codingwise",
    avatarSrc: "/testimonials/sagar-codingwise.png",
    bgColor: {
      "--bg-color-1": "rgba(126,34,206,.3)",
      "--bg-color-2": "rgba(38, 33, 73, 0)",
      backgroundColor: "#190918f0",
      backgroundImage:
        "radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)",
      backgroundRepeat: "no-repeat",
      boxShadow: "inset -1px -1px #fff3, inset 1px 1px #fff3",
      transitionDuration: ".3s",
      transitionProperty: "--bg-color-1, --bg-color-2",
    },
  },
  {
    quote: (
      <>
        We wanted a powerful PMS for wedding photographers,{" "}
        <strong className="text-white">
          and TripleHash delivered with FirstHash
        </strong>
        . Exactly what we needed — practical, fast, and scalable.
      </>
    ),
    author: "Abdullah Ansari",
    handle: "Founder, Marketizers & Owner FirstHash",
    avatarSrc: "/testimonials/abdullah.jpg",
    bgColor: {
      "--bg-color-1": "rgba(7, 122, 199, 0.3)",
      "--bg-color-2": "rgba(38, 33, 73, 0)",
      backgroundColor: "#190918f0",
      backgroundImage:
        "radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)",
      backgroundRepeat: "no-repeat",
      boxShadow: "inset -1px -1px #fff3, inset 1px 1px #fff3",
      transitionDuration: ".3s",
      transitionProperty: "--bg-color-1, --bg-color-2",
    },
  },
  {
    quote: (
      <>
        With{" "}
        <strong className="text-white">
          DG Saarthi CRM built by TripleHash
        </strong>
        , we now handle WhatsApp & FB leads seamlessly. It’s an absolute game-changer for Digital Gyani.
      </>
    ),
    author: "Amit Sharma",
    handle: "Co-founder, Digital Gyani",
    avatarSrc: "/testimonials/amit.jpeg",
    bgColor: {
      "--bg-color-1": "rgba(126,34,206,.3)",
      "--bg-color-2": "rgba(38, 33, 73, 0)",
      backgroundColor: "#190918f0",
      backgroundImage:
        "radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)",
      backgroundRepeat: "no-repeat",
      boxShadow: "inset -1px -1px #fff3, inset 1px 1px #fff3",
      transitionDuration: ".3s",
      transitionProperty: "--bg-color-1, --bg-color-2",
    },
  },
  {
    quote: (
      <>
        TripleHash built{" "}
        <strong className="text-white">
          our entire internal management system at Finask Value
        </strong>
        . It’s the backbone of our operations today.
      </>
    ),
    author: "Palash Malik",
    handle: "Founder, Finask Value",
    avatarSrc: "/testimonials/palash.jpeg",
    bgColor: {
      "--bg-color-1": "rgba(7, 122, 199, 0.3)",
      "--bg-color-2": "rgba(38, 33, 73, 0)",
      backgroundColor: "#190918f0",
      backgroundImage:
        "radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)",
      backgroundRepeat: "no-repeat",
      boxShadow: "inset -1px -1px #fff3, inset 1px 1px #fff3",
      transitionDuration: ".3s",
      transitionProperty: "--bg-color-1, --bg-color-2",
    },
  },
  {
    quote: (
      <>
        Our LMS and{" "}
        <strong className="text-white">
          AI-powered interview tools for Kalam IAS Academy
        </strong>{" "}
        were all built by TripleHash. It’s helping us train the next generation of civil servants.
      </>
    ),
    author: "Kalam IAS Academy",
    handle: "Management Team",
    avatarSrc: "/testimonials/kalam.png",
    bgColor: {
      "--bg-color-1": "rgba(126,34,206,.3)",
      "--bg-color-2": "rgba(38, 33, 73, 0)",
      backgroundColor: "#190918f0",
      backgroundImage:
        "radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)",
      backgroundRepeat: "no-repeat",
      boxShadow: "inset -1px -1px #fff3, inset 1px 1px #fff3",
      transitionDuration: ".3s",
      transitionProperty: "--bg-color-1, --bg-color-2",
    },
  },
  {
    quote: (
      <>
        TripleHash built{" "}
        <strong className="text-white">
          PrepX — our AI-powered resume analyzer & LinkedIn optimizer
        </strong>
        . The speed, quality, and innovation blew us away.
      </>
    ),
    author: "Deepak Goyal",
    handle: "Founder, Azurelib",
    avatarSrc: "/testimonials/deepak.jpeg",
    bgColor: {
      "--bg-color-1": "rgba(7, 122, 199, 0.3)",
      "--bg-color-2": "rgba(38, 33, 73, 0)",
      backgroundColor: "#190918f0",
      backgroundImage:
        "radial-gradient(ellipse at 50% 100%, var(--bg-color-1), var(--bg-color-2) 70%)",
      backgroundRepeat: "no-repeat",
      boxShadow: "inset -1px -1px #fff3, inset 1px 1px #fff3",
      transitionDuration: ".3s",
      transitionProperty: "--bg-color-1, --bg-color-2",
    },
  },
];


const TestimonialCard = ({ quote, author, handle, avatarSrc, bgColor }) => {
  return (
    <div style={bgColor} className="flex-none w-[350px] md:w-[400px] lg:w-[600px] h-[330px] flex flex-col justify-between p-6 sm:p-10 m-4 rounded-xl border border-white/[0.1] ">
      <p className="text-gray-300 text-[1.05rem] leading-relaxed mb-6 flex-grow overflow-hidden">
        {quote}
      </p>
      <div className="flex items-center mt-auto">
        <img
          src={avatarSrc}
          alt={author}
          className="w-10 h-10 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="text-white  text-base">{author}</p>
          <p className="text-gray-400 text-sm">{handle}</p>
        </div>
      </div>
    </div>
  );
};



const TestimonialsSection = () => {
  // Duplicate testimonials multiple times to create a seamless infinite loop effect.
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-[#0D0816] pb-20 overflow-hidden relative">
      <div className='max-w-[1360px] mx-auto px-4 lg:px-8'>
        {/* Scrolling Testimonials Container */}
        <div className="overflow-hidden relative testimonials-container py-2">
          {/* Left & Right Gradient Blend Overlays into Section Background */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0D0816] via-[#0D0816]/80 to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0D0816] via-[#0D0816]/80 to-transparent pointer-events-none z-20" />

          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-transparent stars-background" />
          </div>

          <div className="testimonials-track">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                handle={testimonial.handle}
                avatarSrc={testimonial.avatarSrc}
                bgColor={testimonial.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;