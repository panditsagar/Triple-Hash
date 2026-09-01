"use client";

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [captchaVerified, setCaptchaVerified] = useState(false); // ✅ NEW

  // ✅ Render Turnstile when popup opens
useEffect(() => {
  if (showForm) {
    setTimeout(() => {
      if (window?.turnstile) {
        window.turnstile.render("#turnstile-container", {
          sitekey: "0x4AAAAAACBTYd9Es4r2uQCA",
          callback: () => setCaptchaVerified(true),
        });
      }
    }, 200);
  } else {
    // ⭐ Reset the container when modal closes
    const el = document.getElementById("turnstile-container");
    if (el) el.innerHTML = ""; // remove old widget
    setCaptchaVerified(false); // reset verification
  }
}, [showForm]);



  // ===========================
  // EMAIL SUBMIT HANDLER
  // ===========================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify you're not a robot");
      return;
    }

    const formData = new FormData(e.target);
    const name = formData.get("from_name");
    const email = formData.get("from_email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    emailjs
      .send(
        "service_hmrmwos",
        "template_trwzkza",
        {
          name: name,
          email: email,
          phone: phone,
          query: message,
          time: new Date().toLocaleString(),
        },
        "F1bI-EDyf_giVJu3b"
      )
      .then(() => {
        setLoading(false);
        setStatusMessage("✅ Thanks for contacting Triple Hash!");
        e.target.reset();
        setCaptchaVerified(false);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        setStatusMessage("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-[#0D0816] relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(64,64,64,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64,64,64,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* Contact Card */}
          <div className="relative p-6 sm:p-12 text-center">
            {/* Header Text */}
            <div className="mb-6 sm:mb-8">
              <h1
                style={{
                  backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                  WebkitBackgroundClip: "text",
                }}
                className="heading text-transparent bg-clip-text mb-2 text-xl sm:text-3xl"
              >
                Talk to the Team That Turns Ideas Into Tech.
              </h1>
              <p
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff9b26, #ee4f27)",
                  WebkitBackgroundClip: "text",
                }}
                className="bg-clip-text text-transparent subheadline text-sm sm:text-base"
              >
                The only thing between your idea and launch is the button below.
              </p>
            </div>

            {/* Avatar Group */}
            <div className="relative flex items-center justify-center flex-wrap">
              {/* Left Avatar */}
              <div
                onClick={() => setShowForm(true)}
                className="cursor-pointer w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-[#5eead4] border-2 sm:border-4 border-black flex items-center justify-center relative z-10"
              >
                <img
                  src="/contact1.jpg"
                  className="rounded-full w-20 h-20 sm:w-30 sm:h-30"
                  alt=""
                />
              </div>

              {/* Middle Avatar */}
              <button
                onClick={() => setShowForm(true)}
                className="w-28 h-28 sm:w-45 sm:h-45 rounded-full bg-white border-2 sm:border-4 border-black flex items-center justify-center relative z-20 -mx-2 sm:-mx-4 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <img
                  src="/triplelogo.png"
                  alt=""
                  className="w-20 h-20 sm:w-35 sm:h-35 rounded-full"
                />
                <a
                  href="https://maps.app.goo.gl/iS42XGFtWcAGHdFP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-5 -right-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#ee4f27] rounded-full flex items-center justify-center border-2 border-black shadow-md hover:scale-110 transition-transform"
                >
                  <FaMapMarkerAlt size={16} className="text-white" />
                </a>
              </button>

              {/* Right Avatar */}
              <div
                onClick={() => setShowForm(true)}
                className="cursor-pointer w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-green-300 border-2 sm:border-4 border-black flex items-center justify-center relative z-10"
              >
                <img
                  src="/contact2.jpg"
                  className="rounded-full w-20 h-20 sm:w-30 sm:h-30"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-700 ${
          showForm ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowForm(false)}
      >
        <div
          className={`border border-gray-600/50 rounded-2xl sm:rounded-xl p-6 sm:p-8 w-full max-w-lg sm:max-w-3xl transform transition-all duration-700 shadow-2xl ${
            showForm
              ? "scale-100 translate-y-0 rotate-0"
              : "scale-90 translate-y-12 rotate-1"
          }`}
          style={{ backgroundColor: "transparent" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Form Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff9b26, #ee4f27)",
                  WebkitBackgroundClip: "text",
                }}
                className="bg-clip-text text-transparent subheadline text-lg sm:text-xl"
              >
                Get in Touch
              </h2>
              <p className="text-[#C4BBD3] text-sm sm:text-base mt-1">
                Let's start a conversation
              </p>
            </div>
            <button
              onClick={() => setShowForm(false)}
              className="cursor-pointer text-gray-400 hover:text-white transition-all duration-300 p-2 hover:bg-gray-700/50 rounded-full"
            >
              <IoMdClose size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-600/50 text-white placeholder-gray-500 outline-none rounded-xl h-12 px-4 transition-all duration-300"
                  required
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-600/50 text-white placeholder-gray-500 outline-none rounded-xl h-12 px-4 transition-all duration-300"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-600/50 text-white placeholder-gray-500 outline-none rounded-xl h-12 px-4 transition-all duration-300"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full border border-gray-600/50 text-white placeholder-gray-500 outline-none rounded-xl p-4 resize-none transition-all duration-300"
                  required
                />

                {/* ✅ Turnstile Captcha */}
                <div id="turnstile-container" className="mt-1"></div>

                <button className="w-full font-bold sm:w-auto border cursor-pointer border-[#FFFFFF63] bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white px-5 py-2 rounded-lg">
                  {loading ? "Sending..." : "Say Hello Today"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-8">
              <div className="flex items-start space-x-3 p-3 rounded-xl border border-gray-600/50">
                <FaMapMarkerAlt
                  className="text-[#ee4f27] mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="text-white text-base sm:text-lg font-medium">
                    Address
                  </p>
                  <p className="text-[#C4BBD3] text-sm sm:text-base">
                    Second floor, Triple Hash, Road. No. 13E Om Prakash Nagar,
                    Hatia, Ranchi Jharkhand 894003
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl border border-gray-600/50">
                <FaPhoneAlt
                  className="text-[#ee4f27] mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="text-white text-base sm:text-lg font-medium">
                    Phone
                  </p>
                  <p className="text-[#C4BBD3] text-sm sm:text-base">
                    +91 7568357351
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl border border-gray-600/50">
                <FaEnvelope
                  className="text-[#ee4f27] mt-1 flex-shrink-0"
                  size={18}
                />
                <div>
                  <p className="text-white text-base sm:text-lg font-medium">
                    Email
                  </p>
                  <p className="text-[#C4BBD3] text-sm sm:text-base">
                    connect@triplehash.in
                  </p>
                </div>
              </div>

              {statusMessage && (
                <p className="text-center text-xl text-[#C4BBD3] mt-3">
                  {statusMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
