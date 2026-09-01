'use client';

import React, { useLayoutEffect, useRef } from 'react';
import ProfileCard from '../ReactBit/ProfileCard';

import ScrollReveal from "../Gsap/ScrollReveal";
const Team = () => {
  const teamMembers = [
    {
      name: "Kunal Kumar",
      title: "CEO & Co-Founder",
      handle: "ceo",
      contactText: "Contact Me",
      avatarUrl: "/team/kunal-sir.png",
      miniAvatarUrl: "/team/kunal-sir-icon.jpeg",
      onContactClick: "https://www.linkedin.com/in/buildwithkunal/",
    },

    {
      name: "Vishal Kumar",
      title: "Co-Founder & Editor",
      handle: "vishal",
      contactText: "Contact Me",
      avatarUrl: "/team/Vishalkumar.png",
      miniAvatarUrl: "/team/Vishalkumar.png",
      onContactClick: "https://www.linkedin.com/in/buildwithkunal/",
    },
    {
      name: "Kunal Kumar",
      title: " CTO & AI Engineer",
      handle: "kunal",
      contactText: "Contact Me",
      avatarUrl: "/team/kunal.png",
      miniAvatarUrl: "/team/kunal-icon.png",
      onContactClick: "https://www.linkedin.com/in/champ18ionx/",
    },

    {
      name: "Dhiraj Giri",
      title: "Senior WordPress Developer",
      handle: "dhiraj",
      contactText: "Connect Me",
      avatarUrl: "/team/dj.png",
      miniAvatarUrl: "/team/dheeraj-sir.png",
      onContactClick: "https://www.linkedin.com/in/dhiraj-giri-717a3532b/",
    },
    {
      name: "Aman Kumar",
      title: "WordPress Developer",
      handle: "aman",
      contactText: "Connect Me",
      avatarUrl: "/team/Aman.png",
      miniAvatarUrl: "/team/Aman.png",
      onContactClick: "https://www.linkedin.com/in/aman-nayak-31399737b/",
    },
    {
      name: "Gautam Kr. Pandit",
      title: "Software Engineer",
      handle: "gautam",
      contactText: "Connect Me",
      avatarUrl: "/team/gautam.png",
      miniAvatarUrl: "/team/gautam.png",
      onContactClick: "https://www.linkedin.com/in/gautam-pandit-4b185224b/",
    },
    {
      name: "Sagar Kumar",
      title: "Full Stack Developer",
      handle: "sagar",
      contactText: "Contact Me",
      avatarUrl: "/team/sagar1.png",
      miniAvatarUrl: "/team/sagar-icon.jpg",
      onContactClick: "https://www.linkedin.com/in/sagar-kumar-ab452b276/",
    },
    {
      name: "Tezashwani",
      title: "Social Media Manager",
      handle: "Tezash",
      contactText: "Contact Me",
      avatarUrl: "/team/diksha.png",
      miniAvatarUrl: "/team/diksha.png",
      onContactClick: "https://www.linkedin.com/in/sagar-kumar-ab452b276/",
    },

  ];


  return (
    <div className="bg-[#0D0816] pb-30" >
      <div className="flex flex-col items-center gap-2 max-w-[1360px] mx-auto px-4 lg:px-8 pt-20 sm:pt-20 md:pt-0">

        {/* Heading */}
        <ScrollReveal>
          <h2

            className="  text-center mb-4"
          >
            <span style={{
              backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
              WebkitBackgroundClip: "text",
            }} className="bg-clip-text text-transparent  headline text-center mb-4 w-full">
              Talent. Passion. Innovation.
            </span>
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                WebkitBackgroundClip: "text",
              }}
              className="reveal-item headline block bg-clip-text text-transparent"
            >
              That’s our team
            </span>
          </h2>
        </ScrollReveal>

        {/* Description */}
        <p className=" text-[#C4BBD3] text-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%] description mb-14">
          We are a diverse team of innovators, creators, and leaders, united by a shared vision of shaping the future.
          Bringing together unique perspectives and expertise, we collaborate to design solutions that inspire progress
          and drive meaningful change. Together, we’re building what comes next.
        </p>

        {/* Team Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <ProfileCard
                name={member.name}
                title={member.title}
                handle={member.handle}
                contactText={member.contactText}
                avatarUrl={member.avatarUrl}
                miniAvatarUrl={member.miniAvatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={member.onContactClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
