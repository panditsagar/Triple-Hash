export const servicesData = [
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    heroSubtitle: 'High-performance, responsive websites engineered for digital dominance & high conversion.',
    description: 'Engineering fast, modern, and responsive websites tailored to establish strong digital presence and drive conversions.',
    overview:
      'Our website development services combine cutting-edge frontend architecture, responsive design, and SEO optimization to build web experiences that captivate users and accelerate business growth.',
    features: [
      {
        title: 'Custom Modern Architecture',
        description: 'Built with Next.js, React, and Tailwind CSS for lightning-fast load times and seamless responsiveness.',
      },
      {
        title: 'Search Engine Optimized',
        description: 'Technical SEO, structured schema markup, and performance optimization pre-built into every page.',
      },
      {
        title: 'Interactive UI & Motion',
        description: 'Engaging micro-interactions and smooth scroll animations powered by Framer Motion and GSAP.',
      },
      {
        title: 'CMS & API Integrations',
        description: 'Easy content management with headless CMS, Stripe payments, and custom backend API integration.',
      },
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'Understanding brand objectives, user journeys, and structural site mapping.' },
      { step: '02', title: 'UI/UX Design', desc: 'Crafting pixel-perfect visual mockups aligned with modern design aesthetics.' },
      { step: '03', title: 'Full-Stack Development', desc: 'Writing clean, scalable code with server-side rendering and static generation.' },
      { step: '04', title: 'QA & Deployment', desc: 'Rigorous cross-browser testing, speed optimization, and production deployment.' },
    ],
    techStack: ['Next.js 15', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Node.js'],
    stats: [
      { label: 'Avg Speed Score', value: '98+' },
      { label: 'Conversion Lift', value: '3.5x' },
      { label: 'Mobile Optimized', value: '100%' },
    ],
  },
  {
    id: 'landing-page',
    slug: 'landing-page',
    title: 'Landing Page',
    heroSubtitle: 'Conversion-focused landing pages designed to turn ad traffic into paying customers.',
    description: 'Designing high-converting, personalized landing pages optimized for maximum lead generation and user engagement.',
    overview:
      'We craft high-converting landing pages backed by consumer psychology, strategic copywriting, and persuasive visual design to maximize return on ad spend (ROAS).',
    features: [
      {
        title: 'Persuasive Copywriting',
        description: 'High-impact value propositions and strategic headlines designed to engage visitors instantly.',
      },
      {
        title: 'A/B Test Ready',
        description: 'Modular layouts engineered for quick multivariate testing and conversion optimization.',
      },
      {
        title: 'Instant Load Speed',
        description: 'Sub-second load times to prevent bounce rate and keep potential leads on page.',
      },
      {
        title: 'Lead Capture & CRM Sync',
        description: 'Seamless integration with HubSpot, Mailchimp, Zapier, and custom Webhooks.',
      },
    ],
    process: [
      { step: '01', title: 'Audience Research', desc: 'Analyzing user pain points, competitor positioning, and key conversion hooks.' },
      { step: '02', title: 'High-Impact Copy & UI', desc: 'Designing conversion funnels with clear CTA placement and visual hierarchy.' },
      { step: '03', title: 'Development & Analytics', desc: 'Building responsive pages integrated with Google Analytics & Meta Pixel.' },
      { step: '04', title: 'Launch & Optimization', desc: 'Pushing live and fine-tuning elements for maximum conversion rate.' },
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Zapier', 'HubSpot'],
    stats: [
      { label: 'Avg Lead Growth', value: '+185%' },
      { label: 'Page Load Time', value: '<0.8s' },
      { label: 'A/B Test Rate', value: '99.9%' },
    ],
  },
  {
    id: 'custom-web-app',
    slug: 'custom-web-app',
    title: 'Custom Web App',
    heroSubtitle: 'Enterprise-grade SaaS products and complex web applications built to scale.',
    description: 'Building scalable, high-performance web applications and custom SaaS products engineered for enterprise scale.',
    overview:
      'From complex SaaS platforms to bespoke internal operations software, we engineer scalable web applications with robust database architecture and enterprise security.',
    features: [
      {
        title: 'Scalable Microservices',
        description: 'Decoupled architecture capable of processing high concurrency and data throughput.',
      },
      {
        title: 'Secure Authentication',
        description: 'Enterprise SSO, OAuth, multi-factor authentication, and role-based access control.',
      },
      {
        title: 'Real-Time Data Sync',
        description: 'WebSockets and GraphQL endpoints for instant data updates and interactive dashboards.',
      },
      {
        title: 'Automated CI/CD',
        description: 'Continuous integration and automated deployment pipelines on AWS, Vercel, or Docker.',
      },
    ],
    process: [
      { step: '01', title: 'System Architecture', desc: 'Mapping database schemas, API specs, and cloud infra requirements.' },
      { step: '02', title: 'Core MVP Build', desc: 'Developing backend APIs, frontend UI components, and authentication.' },
      { step: '03', title: 'Feature Integration', desc: 'Adding AI features, billing systems, and third-party integrations.' },
      { step: '04', title: 'Security & Scale', desc: 'Load testing, vulnerability auditing, and cloud infrastructure setup.' },
    ],
    techStack: ['Node.js', 'PostgreSQL', 'Next.js', 'Docker', 'AWS', 'Redis'],
    stats: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Security Grade', value: 'SOC2' },
      { label: 'Scale Ready', value: '1M+ Users' },
    ],
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Automation',
    heroSubtitle: 'AI-driven workflow automation to replace repetitive tasks and multiply output.',
    description: 'Streamlining workflows and business operations with AI-driven integrations and automated system solutions.',
    overview:
      'We eliminate operational bottlenecks by building intelligent AI agents, custom bot integrations, and automated pipelines connecting your entire tech stack.',
    features: [
      {
        title: 'AI Workflow Bots',
        description: 'Custom AI agents capable of handling email responses, lead qualification, and data extraction.',
      },
      {
        title: '500+ App Integrations',
        description: 'Connecting Salesforce, Slack, Notion, Stripe, and internal databases seamlessly.',
      },
      {
        title: 'Data Parsing & Extraction',
        description: 'Automated invoice processing, PDF extraction, and document categorization.',
      },
      {
        title: 'Error-Free Execution',
        description: 'Self-healing webhooks and automated retry logic for 100% operational reliability.',
      },
    ],
    process: [
      { step: '01', title: 'Workflow Audit', desc: 'Identifying repetitive manual tasks and operational bottlenecks.' },
      { step: '02', title: 'Automation Design', desc: 'Architecting trigger-action flows and AI prompt pipelines.' },
      { step: '03', title: 'Integration Build', desc: 'Connecting APIs, webhooks, and AI language models.' },
      { step: '04', title: 'Testing & Handoff', desc: 'Simulating workload edge cases and providing automated monitoring.' },
    ],
    techStack: ['Python', 'OpenAI API', 'Zapier', 'Make', 'Node.js', 'Webhooks'],
    stats: [
      { label: 'Hours Saved/Wk', value: '40+' },
      { label: 'Error Reduction', value: '99%' },
      { label: 'ROI Speed', value: '<14 Days' },
    ],
  },
  {
    id: 'social-media-seo',
    slug: 'social-media-seo',
    title: 'Social Media and SEO',
    heroSubtitle: 'Organic traffic acceleration and strategic social media visibility for market authority.',
    description: 'Boosting organic search visibility, audience reach, and search engine performance to maximize digital growth.',
    overview:
      'Our data-driven SEO and social media strategies increase search rankings, drive high-intent organic traffic, and build active audience engagement for your brand.',
    features: [
      {
        title: 'Technical SEO Optimization',
        description: 'Fixing site structure, crawl errors, site speed, and structured data schemas for Google Rank #1.',
      },
      {
        title: 'Content Strategy & Keywords',
        description: 'Targeting high-value commercial keywords with search intent content hubs.',
      },
      {
        title: 'Social Media Growth',
        description: 'Multi-platform visual branding, video reels strategy, and community engagement.',
      },
      {
        title: 'Authority Backlink Building',
        description: 'Earning high-DR domain editorial mentions and industry authority links.',
      },
    ],
    process: [
      { step: '01', title: 'SEO & Content Audit', desc: 'Analyzing domain health, competitor rankings, and keyword gaps.' },
      { step: '02', title: 'Strategy Blueprint', desc: 'Developing a 90-day organic growth roadmap and social calendar.' },
      { step: '03', title: 'Execution & Publishing', desc: 'Publishing optimized articles, technical fixes, and social campaigns.' },
      { step: '04', title: 'Reporting & Scaling', desc: 'Tracking keyword rankings, traffic growth, and lead conversions.' },
    ],
    techStack: ['Ahrefs', 'Google Search Console', 'SEMrush', 'Analytics 4', 'Schema.org'],
    stats: [
      { label: 'Organic Growth', value: '+240%' },
      { label: 'First-Page Ranks', value: '90%+' },
      { label: 'Traffic Quality', value: 'High Intent' },
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    heroSubtitle: 'Native iOS & Android mobile applications built for seamless performance and retention.',
    description: 'Crafting intuitive iOS and Android mobile applications built with seamless UI/UX and native performance.',
    overview:
      'We develop cross-platform and native mobile apps designed with fluid touch interactions, offline support, push notifications, and App Store submission readiness.',
    features: [
      {
        title: 'Cross-Platform Efficiency',
        description: 'Single codebase for iOS and Android powered by React Native or Flutter.',
      },
      {
        title: '60fps Native Performance',
        description: 'Hardware-accelerated animations and swift navigation for native app feel.',
      },
      {
        title: 'Offline Data Sync',
        description: 'Local caching and background sync to ensure uninterrupted user experience.',
      },
      {
        title: 'App Store Submission',
        description: 'Full management of Apple App Store and Google Play Store publishing guidelines.',
      },
    ],
    process: [
      { step: '01', title: 'App Concept & Prototype', desc: 'Mapping screen flows, interactive wireframes, and UX guidelines.' },
      { step: '02', title: 'Frontend & API Build', desc: 'Developing mobile UI screens connected to cloud backend endpoints.' },
      { step: '03', title: 'Device Testing', desc: 'Testing across iOS devices, Android screen sizes, and tablets.' },
      { step: '04', title: 'Store Deployment', desc: 'Submitting apps to App Store & Google Play with ASO graphics.' },
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Tailwind', 'App Store Connect'],
    stats: [
      { label: 'App Store Rating', value: '4.9★' },
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Platform Coverage', value: 'iOS & Android' },
    ],
  },
  {
    id: 'video-editing',
    slug: 'video-editing',
    title: 'Video Editing',
    heroSubtitle: 'High-impact motion graphics, social reels, and promotional video production.',
    description: 'Creating high-impact video content, motion graphics, and visual edits designed to captivate your audience.',
    overview:
      'We turn raw footage into compelling promotional videos, social media reels, product walkthroughs, and brand ads that capture attention and drive conversions.',
    features: [
      {
        title: 'Dynamic Motion Graphics',
        description: '2D & 3D kinetic typography, animated lower-thirds, and visual effects.',
      },
      {
        title: 'Hook-Driven Pacing',
        description: 'Optimized first 3-second hooks tailored for TikTok, Instagram Reels, and YouTube Shorts.',
      },
      {
        title: 'Professional Color Grading',
        description: 'Cinematic color correction and sound design for broadcast quality.',
      },
      {
        title: 'Multi-Format Delivery',
        description: 'Exported in 16:9 widescreen, 9:16 vertical, and 1:1 square for all ad platforms.',
      },
    ],
    process: [
      { step: '01', title: 'Footage & Script Review', desc: 'Analyzing brand messaging, raw clips, and storyboards.' },
      { step: '02', title: 'Rough Cut & Pacing', desc: 'Structuring story flow, music tracks, and key cut points.' },
      { step: '03', title: 'Effects & Color Grade', desc: 'Adding motion titles, sound effects, and cinematic grading.' },
      { step: '04', title: 'Final Polish & Export', desc: 'Delivering platform-optimized 4K files ready for campaign launch.' },
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop', 'Audition'],
    stats: [
      { label: 'Ad CTR Boost', value: '3.2x' },
      { label: 'Retention Rate', value: '+65%' },
      { label: 'Export Quality', value: '4K Ultra HD' },
    ],
  },
];

export function getServiceBySlug(slug) {
  return servicesData.find((service) => service.slug === slug || service.id === slug);
}
