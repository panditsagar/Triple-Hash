// app/case-studies/[slug]/CtaSection.jsx
"use client";
import React from "react";

const CtaSection = () => (
  <div className="p-6 rounded-2xl border border-[#FFFFFF1A] mt-12">
    <h3 className="text-[#C4BBD3] text-xl font-semibold mb-4">
      Considering TripleHash solutions for your team?
    </h3>
    <button
      onClick={() =>
        window.open(
          "https://hashboard.in/book/web",
          "_blank"
        )
      }
      className="bg-[#FF8C00] buttonfont cursor-pointer border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white px-5 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
    >
      Book a Free Consultation
    </button>
  </div>
);

export default CtaSection;
