export const servicesData = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    heroSubtitle:
      "High-performance, responsive websites engineered for digital dominance & high conversion.",
    description:
      "Engineering fast, modern, and responsive websites tailored to establish strong digital presence and drive conversions.",
  },
  {
    id: "landing-page",
    slug: "landing-page",
    title: "Landing Page",
    heroSubtitle:
      "Conversion-focused landing pages designed to turn ad traffic into paying customers.",
    description:
      "Designing high-converting, personalized landing pages optimized for maximum lead generation and user engagement.",
  },
  {
    id: "custom-web-app",
    slug: "custom-web-app",
    title: "Custom Web App",
    heroSubtitle:
      "Enterprise-grade SaaS products and complex web applications built to scale.",
    description:
      "Building scalable, high-performance web applications and custom SaaS products engineered for enterprise scale.",
  },
  {
    id: "automation",
    slug: "automation",
    title: "Automation",
    heroSubtitle:
      "AI-driven workflow automation to replace repetitive tasks and multiply output.",
    description:
      "Streamlining workflows and business operations with AI-driven integrations and automated system solutions.",
  },
  {
    id: "social-media-seo",
    slug: "social-media-seo",
    title: "Social Media and SEO",
    heroSubtitle:
      "Organic traffic acceleration and strategic social media visibility for market authority.",
    description:
      "Boosting organic search visibility, audience reach, and search engine performance to maximize digital growth.",
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    heroSubtitle:
      "Native iOS & Android mobile applications built for seamless performance and retention.",
    description:
      "Crafting intuitive iOS and Android mobile applications built with seamless UI/UX and native performance.",
  },
  {
    id: "video-editing",
    slug: "video-editing",
    title: "Video Editing",
    heroSubtitle:
      "High-impact motion graphics, social reels, and promotional video production.",
    description:
      "Creating high-impact video content, motion graphics, and visual edits designed to captivate your audience.",
  },
];

export function getServiceBySlug(slug) {
  return servicesData.find(
    (service) => service.slug === slug || service.id === slug,
  );
}
