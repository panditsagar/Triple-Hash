// components/IntegrationsSection.jsx
"use client";

import React, { useRef, useEffect } from "react";
import { MdCheck } from "react-icons/md";
import SpotlightCard from "./ReactBit/SpotlightCard";
import ScrollReveal from "./Gsap/ScrollReveal";
import { FaCode } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import {
  SiWhatsapp,
  SiGooglecalendar,
  SiGmail,
  SiSlack,
  SiZoom,
  SiStripe,
  SiNotion,
  SiDropbox,
  SiHubspot,
  SiShopify,
  SiGoogledrive,
  SiTrello,
  SiAsana,
  SiGithub,
  SiJira,
  SiSalesforce,
  SiZapier,
  SiMailchimp,
  SiAirtable,
  SiCalendly,
} from "react-icons/si";

// --- DATA (No changes here) ---
const integrationsRow1 = [
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Google Calendar", icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Gmail", icon: SiGmail, color: "#EA4335" },
  { name: "Slack", icon: SiSlack, color: "#4A154B" },
  { name: "Zoom", icon: SiZoom, color: "#0B5CFF" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
  { name: "Notion", icon: SiNotion, color: "#111111" },
  { name: "Dropbox", icon: SiDropbox, color: "#0061FF" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "Google Drive", icon: SiGoogledrive, color: "#0F9D58" },
  { name: "Trello", icon: SiTrello, color: "#0052CC" },
  { name: "Asana", icon: SiAsana, color: "#F06A6A" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
  { name: "Zapier", icon: SiZapier, color: "#FF4F00" },
  { name: "Mailchimp", icon: SiMailchimp, color: "#FFE01B" },
  { name: "Airtable", icon: SiAirtable, color: "#18BFFF" },
  { name: "Calendly", icon: SiCalendly, color: "#006BFF" },
];

const integrationsRow2 = [
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Google Calendar", icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Gmail", icon: SiGmail, color: "#EA4335" },
  { name: "Slack", icon: SiSlack, color: "#4A154B" },
  { name: "Zoom", icon: SiZoom, color: "#0B5CFF" },
  { name: "Stripe", icon: SiStripe, color: "#635BFF" },
  { name: "Notion", icon: SiNotion, color: "#111111" },
  { name: "Dropbox", icon: SiDropbox, color: "#0061FF" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "Google Drive", icon: SiGoogledrive, color: "#0F9D58" },
  { name: "Trello", icon: SiTrello, color: "#0052CC" },
  { name: "Asana", icon: SiAsana, color: "#F06A6A" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
  { name: "Zapier", icon: SiZapier, color: "#FF4F00" },
  { name: "Mailchimp", icon: SiMailchimp, color: "#FFE01B" },
  { name: "Airtable", icon: SiAirtable, color: "#18BFFF" },
  { name: "Calendly", icon: SiCalendly, color: "#006BFF" },
];

const stats = [
  {
    id: "github",
    icon: <FaCode className="w-7 h-7" />,
    title: "Top-Rated Builds",
    description: "Recognized for delivering MVPs and SaaS products that scale.",
    gradient: `bg-[radial-gradient(circle_farthest-side_at_100%_-80%,rgba(175,106,140,0.46),rgba(98,65,83,0.38)_39%,transparent_55%),radial-gradient(circle_at_50%_100%,#7a396d4a,#2a192963)]`,
  },
  {
    id: "g2",
    icon: <FaHandshakeSimple className="w-7 h-7" />,
    title: " Client Love ",
    description: "4.9/5 Satisfaction — “Triple Hash just gets it done.",
    gradient: `bg-[radial-gradient(circle_at_0_100%,#ff4f311f,#fff0),radial-gradient(circle_at_50%_100%,hsla(0,0%,100%,.06),transparent),radial-gradient(circle_at_50%_100%,#4b397a6e,#2a192963)]`,
  },
  {
    id: "community",
    icon: <FaGlobe className="w-7 h-7" />,
    title: "Global Reach",
    description: " 200+ projects shipped across multiple industries.",
    gradient: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#b200ff26,#fff0_56%),radial-gradient(circle_farthest-side_at_20%_100%,hsla(0,0%,100%,.1),transparent_43%),radial-gradient(circle_at_50%_100%,#a3643a87,#2a192963)]`,
  },
];

const IntegrationsSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const MAX_ROTATION_X = 25;
    const MAX_ROTATION_Y = 10;

    const handleScroll = () => {
      const rect = marquee.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const elementCenterY = rect.top + rect.height / 2;

      const progress =
        (elementCenterY - viewportHeight / 2) / (viewportHeight / 2);

      const clampedProgress = Math.max(-1, Math.min(1, progress));

      const rotateX = clampedProgress * MAX_ROTATION_X * -1;
      const rotateY = clampedProgress * MAX_ROTATION_Y;

      marquee.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   <section className="relative w-full bg-[#0D0816] py-10 sm:py-0 overflow-visible">
      <div className=" hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-11/12 rotate-[24deg] aspect-[1/2.2] w-[80%] max-w-[400px] bg-[linear-gradient(#a13355,#5159d9)] rounded-[800%] opacity-45 blur-[128px] z-[0]" />
      <div
        className="hidden sm:block absolute bottom-[-10%] left-[20%] w-[80%] max-w-[00px] aspect-square rounded-full opacity-50 blur-[120px] z-0"
        style={{
          background: "radial-gradient(circle, #7877C6 -38%, #7877C6 0%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 lg:px-8 text-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-2 mb-25 sm:mb-32">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`p-px border border-[#ffffff1a] rounded-xl ${stat.gradient}`}
            >
              <div className="rounded-[15px] p-3 h-full flex items-center">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="bg-black/30 text-gray-400 w-13 h-13 rounded-xl flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-neutral-300 font-[300]  text-[1.08rem] leading-snug text-left">
                      <strong className="text-white font-semibold">
                        {stat.title}
                      </strong>{" "}
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>
          {" "}
          <ScrollReveal>
            <span
              style={{
                backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                WebkitBackgroundClip: "text",
              }}
              className="headline bg-clip-text text-transparent  reveal-item block"
            >
              Integrations So Smooth,
            </span>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff9b26, #ee4f27)",
                  WebkitBackgroundClip: "text",
                }}
                className="headline reveal-item  bg-clip-text text-transparent"
              >
                {" "}
                Even Your Coffee’s Jealous{" "}
              </span>
              <span className="inline-block text-[2rem]">☕️</span>
            </p>
          </ScrollReveal>
        </h2>

        <div
          ref={marqueeRef}
          // A transition is added for smoothness when the scroll stops or starts
          className="relative mt-20 flex flex-col gap-5 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] transition-transform duration-300 ease-out"
        >
          {/* Row 1 (No changes here) */}
          <div className="flex w-max animate-[scroll-left_60s_linear_infinite]">
            {[...integrationsRow1, ...integrationsRow1].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`r1-${index}`}
                  className="flex-shrink-0 w-22 h-18 flex items-center justify-center"
                >
                  <div className="w-18 h-18 bg-white hover:bg-white/40 rounded-2xl flex items-center justify-center p-3">
                    <Icon
                      size={32}
                      color={item.color}
                      className="object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2 (No changes here) */}
          <div className="flex w-max animate-[scroll-right_70s_linear_infinite]">
            {[...integrationsRow2, ...integrationsRow2].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`r2-${index}`}
                  className="flex-shrink-0 w-22 h-18 flex items-center justify-center"
                >
                  <div className="w-18 h-18 bg-white hover:bg-white/40 rounded-2xl flex items-center justify-center p-3">
                    <Icon
                      size={32}
                      color={item.color}
                      className="object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <button className="bg-gradient-to-r cursor-pointer from-[#077AC7] to-[#6B21EF] text-white buttonfont px-6 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
            Supercharge My Business
          </button>
        </div>
        <div className="pt-20 sm:py-34  flex flex-col items-center gap-20 ">
          <ScrollReveal>
            <h2 className="headline bg-clip-text text-transparent  ">
              <span
                style={{
                  backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
                  WebkitBackgroundClip: "text",
                }}
                className="headline bg-clip-text text-transparent   reveal-item block"
              >
                We Don’t Sell Hype.
              </span>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ff9b26, #ee4f27)",
                  WebkitBackgroundClip: "text",
                }}
                className="reveal-item block bg-clip-text text-transparent"
              >
                We Build AI That Works.
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:grid-rows-2 gap-6 md:gap-2 w-full ">
            {/* Card 1  */}
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)"
            >
              <div
                className="p-px rounded-3xl w-full" /* No explicit col/row spans needed as it's the first item */
                style={{
                  border: "1px solid hsla(0, 0%, 100%, .16)",
                  boxShadow: "inset 0 1px #ff8e5d66",
                  backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                }} /* Spanning both rows */
              >
                <div
                  className="rounded-3xl px-6 py-8 sm:px-10 sm:py-4
                       flex flex-col-reverse sm:flex-row items-center sm:justify-between
                       h-auto sm:h-full gap-8"
                >
                  {/* Text Content */}
                  <div className="flex flex-col gap-4 w-full sm:max-w-[50%] text-center sm:text-left">
                    <h3 className="text-white subheadline text-left">
                      Launch AI-Powered Web
                      <br />& Mobile Apps
                    </h3>
                    <p className="text-[#938E95] description text-left ">
                      From MVPs to full-scale apps, we build scalable products
                      with AI features like chatbots, recommendations, and
                      analytics built right in.
                    </p>
                    <button className="bg-gradient-to-r w-full max-w-[50%] cursor-pointer from-[#077AC7] to-[#6B21EF] text-white buttonfont px-6 py-2.5 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                      Explore AI
                    </button>
                  </div>
                  {/* Image and Button */}
                  <div className="sm:ml-0 ml-5">
                    <img
                      src="/container.png"
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2  */}
            <div
              className="p-px rounded-3xl w-full lg:col-start-2 lg:row-span-2" /* Explicitly start in col 2, span 2 rows */
              style={{
                border: "1px solid hsla(0, 0%, 100%, .16)",
                boxShadow: "inset 0 1px #ff8e5d66",
                backgroundImage: `radial-gradient(circle at 30% 140%, rgba(75, 153, 217, .33), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0a16195e), radial-gradient(circle at 50% -30%, #a85c5c33, #ff131300), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
              }}
            >
              <SpotlightCard
                className="custom-spotlight-card h-full "
                spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)"
              >
                <div className=" rounded-3xl px-6 py-8  sm:px-10 sm:py-12 flex flex-col h-full min-h-[712px]">
                  <h3 className="text-white  text-left subheadline">
                    Automate Workflows & SaaS Features
                  </h3>
                  <p className="mt-4 text-[#938E95] text-left description flex-grow">
                    We replace manual tasks with AI-driven automations,
                    integrating with 500+ tools and tailoring solutions to match
                    your business operations
                  </p>
                  {/* Chat Bubbles */}
                  <div className="mt-8 flex flex-col gap-4  font-raleway">
                    <div
                      style={{
                        boxShadow: `inset 0px 4px 12px 0px hsla(0, 0%, 100%, 0.05), 0px 4px 16px -8px rgba(0, 0, 0, 0.23)`,
                      }}
                      className=" max-w-[60%]  p-3 rounded-lg border border-[#ffffff]/10 text-[#938E95] text-sm  text-left"
                    >
                      Who held meetings with SpaceX last week?
                    </div>
                    <div
                      style={{
                        boxShadow: `inset 0px 4px 12px 0px hsla(0, 0%, 100%, 0.05), 0px 4px 16px -8px rgba(0, 0, 0, 0.23)`,
                      }}
                      className="max-w-[60%] border border-[#ffffff]/10  p-3 rounded-lg text-[#938E95] text-sm self-end text-left"
                    >
                      On Wednesday, Joe updated the status to "won" in
                      Salesforce after a Zoom call.
                    </div>

                    <div
                      style={{
                        boxShadow: `inset 0px 4px 12px 0px hsla(0, 0%, 100%, 0.05), 0px 4px 16px -8px rgba(0, 0, 0, 0.23)`,
                      }}
                      className=" max-w-[60%] p-3 border border-[#ffffff]/10 rounded-lg text-[#938E95] text-sm self-end  text-left"
                    >
                      On Thursday, Sue provided on-site setup and closed the
                      ServiceNow ticket.
                    </div>

                    <div
                      style={{
                        boxShadow: `inset 0px 4px 12px 0px hsla(0, 0%, 100%, 0.05), 0px 4px 16px -8px rgba(0, 0, 0, 0.23)`,
                      }}
                      className="max-w-[60%] p-3 border border-[#ffffff]/10 rounded-lg text-[#938E95]  self-start text-left"
                    >
                      Create a task in Asana...
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Card 3 */}
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 104, 180, 0.3), rgba(91, 24, 255, 0.15) 60%, rgba(12, 8, 34, 0.1) 80%)"
            >
              <div
                className="p-px rounded-3xl w-full h-full lg:row-start-2" /* Explicitly start in row 2 */
                style={{
                  border: "1px solid hsla(0, 0%, 100%, .16)",
                  boxShadow: "inset 0 1px #ff8e5d66",
                  backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
                }}
              >
                <div
                  className="rounded-3xl px-6 py-8 sm:px-10 sm:py-4
                       flex flex-col sm:flex-row items-center sm:justify-between
                       h-auto sm:h-full gap-8"
                >
                  <div>
                    <img
                      src="/container1.png"
                      alt=""
                      className="object-contain"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="text-white subheadline mb-2">
                      Build Sales Funnel &
                      <br />
                      Landing Pages
                    </h3>
                    <p className="text-[#938E95] mb-4 max-w-md description">
                      We create high-converting landing pages and funnels
                      powered by AI-driven personalization and automation.
                    </p>
                    <ul className="text-[#938E95] description space-y-2 ">
                      <li className="flex items-center gap-2">
                        <MdCheck className="text-[#938E95] text-xl" /> Custom
                        design
                      </li>
                      <li className="flex items-center gap-2">
                        <MdCheck className="text-[#938E95] text-xl" />{" "}
                        Automation and Integration
                      </li>
                      <li className="flex items-center gap-2">
                        <MdCheck className="text-[#938E95] text-xl" />
                        Conversion-focused Approach
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
