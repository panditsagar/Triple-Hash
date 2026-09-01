// data/projects.js
export const projects = [
  {
    id: 1,
    title: "Codingwise",
    description:
      "Codingwise is an e-learning platform that enables students to log in, enroll in courses, and begin learning with ease. It offers a streamlined course management system that lets students monitor their progress and revisit lessons at any time. Built with scalability and accessibility in mind, the platform supports mentors in delivering structured education efficiently.",
    image: "/work/work1.webp",
    category: "EdTech Platform, Course Management System, LMS Platform",
    clientName: "Sagar Chouksey",
    profession: "EdTech Mentor",
    technologies: [
      "Next.js",
      "Node.js",
      "MySQL",
      "Firebase",
      "Bootstrap",
      "PHP",
    ],
    challenge:
      "Managing course workflows and scaling the platform to support a growing number of students while ensuring smooth navigation, responsive design, and minimal server load. Ensuring data consistency and progress tracking for hundreds of concurrent users posed a significant technical challenge.",
    solution:
      "Implemented a modular course structure, optimized backend logic with efficient queries, caching mechanisms, and server-side rendering. Scalable database schemas and robust authentication ensured smooth student experiences and reliable course progress tracking.",
    impact:
      "Improved learning experience, simplified course delivery for mentors, enhanced student engagement, minimized server load issues, and increased student retention due to a smooth and reliable platform.",
    link: "https://codingwise.in/",
  },

  {
    id: 2,
    title: "Digital Gyani Saarthi",
    description:
      "A CRM designed for financial advisors who are not highly technical, helping them grow their business by leveraging digital technologies. The CRM seamlessly integrates meta leads, providing a unified dashboard with follow-ups automation, email/WhatsApp nurturing, marketing banner sharing, and financial health calculators. Everything an advisor needs is in one place—from capturing leads to converting them into customers.",
    image: "/work/work2.webp",
    category: "Web Development, SaaS Platform, Mobile App, CRM Solution",
    clientName: "Digital Gyani",
    profession: "Financial Services Coach",
    technologies: [
      "Next.js",
      "Node.js",
      "MySQL",
      "Capacitor",
      "Firebase Login",
    ],
    challenge:
      "Designing a CRM that is simple and intuitive for non-technical financial advisors while integrating multiple tools like Meta leads, WhatsApp automation, email campaigns, marketing materials, and reminders. Ensuring real-time updates and avoiding complexity was a major challenge.",
    solution:
      "Implemented integrated workflows for lead management, follow-ups, marketing, and automation. Developed an intuitive dashboard UI, set up notification systems, and provided client training to ensure ease of adoption and seamless usage.",
    impact:
      "Reduced manual work, improved customer engagement, increased sales conversions, and empowered financial advisors to manage their business effectively without relying on multiple separate tools.",
    link: "https://app.digitalgyanisaarthi.com",
  },
  {
    id: 3,
    title: "Finask",
    description:
      "Finasq is a comprehensive internal management system designed for Finasq Value Company to streamline all policy-related operations. The system allows employees to log and track sold policies, manage renewals, and automate notifications and reminders. It also provides tools for internet team management and internal workflow optimization. By centralizing all these operations in one platform, Finasq ensures smoother processes, reduced errors, and better coordination across teams.",
    image: "/work/work3.webp",
    category: "Internal Management System",
    clientName: "Palash Malik",
    profession: "Founder, Finask Value",
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Firebase"],
    challenge:
      "Managing large amounts of policy data, automating renewal reminders, and coordinating multiple internal teams was challenging due to the volume of data, potential for errors, and need for real-time updates.",
    solution:
      "Implemented a structured database design, automated workflows for renewals and reminders, intuitive dashboards for team management, and notification systems. Optimized backend processes to handle large datasets efficiently and reduce human errors.",
    impact:
      "Significantly improved operational efficiency, reduced manual errors, automated reminders, enhanced team coordination, and saved time and resources across departments.",
    link: "",
  },
  {
    id: 4,
    title: "Firsthash",
    description:
      "Firsthash is a SaaS platform designed to streamline the operations of wedding photography businesses. It offers features for client onboarding, project tracking, internal team management, and salary disbursement, providing a centralized system for operations. The platform automates workflows, reduces administrative overhead, and ensures timely project delivery, improving efficiency and coordination across teams.",
    image: "/work/work4.webp",
    category: "SaaS Platform",
    clientName: "Abdullah Ansari",
    profession: "Founder, Marketizers & Owner, FirstHash",
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Firebase"],
    challenge:
      "Managing client onboarding, internal team workflows, salary calculations, and project tracking posed significant operational challenges. Ensuring all data remained synchronized and reducing human errors across multiple departments was complex.",
    solution:
      "Implemented optimized backend architecture, structured database design, automated workflows, notifications, and an intuitive UI. Added salary management modules and project tracking dashboards to reduce administrative burden and improve efficiency.",
    impact:
      "Streamlined operations, reduced errors, automated payroll, improved team coordination, accelerated project delivery, and increased client satisfaction with accurate and timely services.",
    link: "https://connect.firsthash.in/",
  },
  {
    id: 5,
    title: "Kalam IAS",
    description:
      "Kalam IAS Academy combines traditional teaching methods with modern technology to deliver an effective learning experience. The platform offers comprehensive GS Foundation courses, mentorship programs, online & offline classes, test series, and well-researched study materials. It is designed to manage large numbers of students while providing personalized attention and progress tracking.",
    image: "/work/work5.webp",
    category: "EdTech Platform",
    clientName: "Kalam IAS Academy",
    profession: "UPSC Coaching Provider",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    challenge:
      "Managing a large number of students, scheduling classes, and providing personalized attention while maintaining performance and scalability. Handling online/offline integration and student progress tracking was complex.",
    solution:
      "Implemented a robust backend system to handle student data, track progress, and facilitate communication between students and mentors. Integrated scalable class scheduling and test series modules for smooth operations.",
    impact:
      "Enhanced student engagement, improved learning outcomes, increased enrollment, ensured a high success rate in UPSC exams, and consistently received positive feedback from students.",
    link: "https://kalamias.academy/",
  },
  {
    id: 6,
    title: "Prepex",
    description:
      "Prepex is an AI-powered career platform designed to assist job seekers in optimizing their applications. The platform provides tools for resume and LinkedIn profile analysis, intelligent job filtering, and personalized cover-letter generation. By integrating the Gemini API via Google GenKit and developing a Chrome extension with a Python backend, Prepex offers a seamless user experience. Premium features are supported with integrated payments, enabling early adoption and delivering real value to users seeking career growth.",
    image: "/work/work6.webp",
    category: "AI‑Powered Career SaaS",
    clientName: "Deepak Goyal",
    profession: "Founder, Azurelib",
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "Firebase"],
    challenge:
      "Integrating AI APIs, handling personalized recommendations, parsing resumes accurately, and developing a Chrome extension that communicates effectively with the backend posed significant technical challenges.",
    solution:
      "Implemented structured API integration, optimized backend architecture for AI processing, automated workflows for cover letter generation, and performance optimizations. Ensured smooth data flow between Chrome extension and backend services.",
    impact:
      "Enabled users to improve resumes, streamline job applications, access personalized cover letters, and facilitated early adoption with dozens of users leveraging premium features for career growth.",
    link: "https://prepx.co/",
  },
  {
    id: 7,
    title: "Mlinda",

    description:
      "Mlinda is a cutting-edge platform that leverages AI to provide personalized learning experiences for students. By analyzing individual learning styles and preferences, Mlinda curates tailored content and resources, ensuring optimal engagement and knowledge retention. The platform integrates interactive quizzes, real-time feedback, and progress tracking to help students stay motivated and on track with their learning goals. With a user-friendly interface and seamless navigation, Mlinda makes learning enjoyable and effective for students of all ages.",
    image: "/work/work7.webp",
    category: "AI-Powered Learning Platform",
    clientName: "John Doe",
    profession: "Educational Technologist",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "AI Integration",
    ],
    challenge:
      "Creating a platform that effectively personalizes learning experiences based on diverse student needs while ensuring scalability and performance. Integrating AI algorithms for content curation and real-time feedback was particularly challenging.",
    solution:
      "Implemented advanced AI algorithms for personalized content delivery, optimized backend architecture for scalability, and developed interactive features such as quizzes and progress tracking. Ensured a seamless user experience with an intuitive UI design.",
    impact:
      "Enhanced student engagement and learning outcomes, increased platform adoption, and received positive feedback from users appreciating the personalized approach to education.",
    link: "https://malinda.ai/",
  },
  {
    id: 8,
    title: "Estira",
    description:
      "Estira is an AI-powered personal styling app that turns your own wardrobe into an on-demand stylist. Users chat with an AI to get outfit ideas, virtually try on looks before buying, and get weather- and itinerary-aware outfit plans for trips. The app blends a personal wardrobe catalog, AI-driven outfit generation, and a curated shop so users can complete looks with pieces they don't already own.",
    image: "/work/work8.png",
    category: "AI-Powered Personal Styling App",
    clientName: "Confidential",
    profession: "Fashion Tech Founder",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Razorpay",
      "RevenueCat",
      "AI Integration",
    ],
    challenge:
      "Building a stylist experience that feels genuinely personal — combining a user's own wardrobe, AI-generated outfit recommendations, and realistic virtual try-on — while keeping the mobile app fast and reliable across trip planning, chat, shopping, and payments in one cohesive flow.",
    solution:
      "Built a React Native/Expo app with an AI chat stylist that recommends outfits from the user's wardrobe, a virtual try-on experience, and trip-aware outfit planning based on weather and itinerary. Integrated Firebase for auth and data, Razorpay for payments, and RevenueCat for subscriptions to support a complete shop-to-checkout journey.",
    impact:
      "Delivered a cohesive AI styling experience spanning wardrobe management, chat-based recommendations, virtual try-on, and trip planning — giving users a personal stylist in their pocket and a direct path to shop for what they're missing.",
    link: "https://beta.estira.in/",
  },
  {
    id: 9,
    title: "HashBoard",
    description:
      "HashBoard is a multi-tenant business operations platform that brings project management, team collaboration, attendance, payroll, CRM, billing, client portals, scheduling, and AI assistance into one connected workspace. Companies can manage their internal teams and client work while automating meetings, subscriptions, documents, and everyday operational workflows.",
    image: "/work/work9.png",
    category: "AI-Powered Business Operations Platform",
    clientName: "TripleHash",
    profession: "SaaS & Business Operations",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Cloudflare R2",
      "Cashfree",
      "Google Calendar",
      "Zoom",
      "Model Context Protocol",
      "AI Integration",
    ],
    challenge:
      "Building a secure, multi-tenant platform that combines project delivery, employee operations, client collaboration, finance, scheduling, file storage, and AI tools without exposing data between companies or forcing teams to manage disconnected applications.",
    solution:
      "Built a full-stack SaaS platform with tenant-isolated workspaces, role-based access, project and task management, real-time chat, attendance and payroll, CRM, invoices, expenses, client portals, booking pages, Google Calendar and Zoom integration, recurring Cashfree subscriptions, storage quotas, and an MCP-powered AI assistant. Added company-level branding, onboarding, OAuth integrations, secure file storage, and operational subscription lifecycle management.",
    impact:
      "Delivered a unified operating system for growing teams, allowing companies to manage employees, projects, clients, meetings, documents, billing, and daily workflows from one secure workspace—while reducing tool fragmentation and making business data directly accessible through AI.",
    link: "https://hashboard.in/",
  },
  {
  id: 10,
  title: "HashCal",
  description:
    "HashCal is a scheduling and booking platform that lets professionals share personalized booking pages, define availability rules, and let clients self-book meetings that sync automatically with Google Calendar and Zoom — eliminating manual back-and-forth scheduling.",
  image: "/work/work10.png",
  category: "Scheduling & Booking Automation Platform",
  clientName: "TripleHash",
  profession: "SaaS & Productivity Tools",
  technologies: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Firebase",
    "Google Calendar API",
    "Zoom API",
    "OAuth 2.0",
  ],
  challenge:
    "Building a reliable public booking experience that respects each host's real-time availability, timezone, and calendar conflicts, while keeping bookings, questions, and webhooks correctly isolated per user and in sync with external calendar and video-conferencing providers.",
  solution:
    "Built a backend with configurable booking pages, custom availability rules and screening questions, an availability engine that resolves open slots against connected calendars, and public booking endpoints for client-side scheduling. Integrated Google Calendar and Zoom via OAuth for automatic event creation and meeting links, standardized all scheduling logic on UTC, and added webhook support for booking lifecycle events.",
  impact:
    "Delivered a self-serve scheduling system that removes manual coordination from booking meetings, keeps calendars automatically in sync across providers, and gives hosts a branded, question-driven booking flow for their clients.",
  link: "https://cal.hashboard.in/",
},
{
  id: 11,
  title: "HashPlay",
  description:
    "HashPlay is a YouTube embed builder that lets users turn any YouTube link into a clean, autoplay-muted video player with a tap-to-unmute prompt, custom aspect ratios, and ready-to-paste embed code for JSX, HTML, or WordPress — all saved to a personal, searchable library.",
  image: "/work/work11.png",
  category: "Video Embed & Player Builder",
  clientName: "TripleHash",
  profession: "SaaS & Developer Tools",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Vidstack Player",
    "Firebase",
    "Firebase Auth",
    "Firestore",
  ],
  challenge:
    "Standard YouTube embeds offer little control over playback behavior, aspect ratio, or branding, and autoplay policies make silent-to-sound video experiences hard to get right across browsers and devices — especially on mobile, where the player's own controls can't be reached inside the iframe.",
  solution:
    "Built a custom video player on Vidstack that autoplays muted with a tap-to-unmute overlay, supports five aspect ratios (16:9, 9:16, 1:1, 4:5, 4:3), and exposes a mobile-friendly play control routed around YouTube's iframe restrictions. Wrapped it in an embed builder that parses any YouTube URL or ID, previews the player live, and generates copy-ready embed code in JSX, HTML, or WordPress-safe markup, with Firebase authentication and Firestore-backed saved libraries per user.",
  impact:
    "Gave users a fast, no-code way to produce polished, autoplay-safe YouTube embeds with consistent behavior across formats and platforms, plus a personal library to revisit, rename, and re-export past embeds on demand.",
  link: "https://hashplay.hashboard.in/",
},
];
