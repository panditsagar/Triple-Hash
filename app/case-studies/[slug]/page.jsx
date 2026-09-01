
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SpotlightCard2 from "../../../components/ReactBit/SpotlightCard2";
import { caseStudiesData } from "../data";
import CtaSection from "@/components/CtaBlog";

// --- Back Button ---
const BackButton = ({ href = "/case-studies", children = "Back to Articles" }) => (
  <Link href={href} passHref>
    <span className="inline-flex items-center description text-[#C4BBD3] mb-8 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      {children}
    </span>
  </Link>
);



// --- Render Content Blocks ---
const renderBlock = (block, i) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={i} className="subheadline mb-4">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <div
          key={i}
          className="description text-[#C4BBD3] space-y-4 mb-6"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case "quote":
      return (

        <div
          className="bg-[#1A1327] p-8 rounded-2xl border border-[#FFFFFF1A]"
          style={{
            border: "1px solid hsla(0, 0%, 100%, .16)",
            boxShadow: "inset 0 1px #ff8e5d66",
            backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%)`,
          }}
        >
          <p className="description text-[#C4BBD3]">“{block.text}”</p>
          {block.author && (
            <div className="mt-6">
              <p className="text-white text-md font-[500]">
                {block.author}
              </p>
              <p className="text-[#C4BBD3] description">{block.role}</p>
            </div>
          )}
        </div>

      );
    default:
      return null;
  }
};

// --- Generate Static Params ---
export async function generateStaticParams() {
  return caseStudiesData.map((article) => ({
    slug: article.slug,
  }));
}

// --- Next.js Metadata for SEO ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = caseStudiesData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | TripleHash",
      description: "This article does not exist.",
    };
  }

  const firstParagraph = article.content.find(c => c.type === "paragraph")?.html.replace(/<[^>]+>/g, "").slice(0, 160);

  return {
    title: `${article.headline.replace(/<[^>]*>?/gm, '')} | TripleHash`,
    description: firstParagraph,
    openGraph: {
      title: article.headline.replace(/<[^>]*>?/gm, ''),
      description: firstParagraph,
      type: "article",
      url: `https://yourdomain.com/articles/${article.slug}`,
      images: [
        {
          url: article.companyLogo || "/default-og.png",
          width: 1200,
          height: 630,
          alt: article.companyName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.headline.replace(/<[^>]*>?/gm, ''),
      description: firstParagraph,
      images: [article.companyLogo || "/default-og.png"],
    },
  };
}

// --- Article Detail Page ---
const ArticleDetailPage = ({ params }) => {
  const { slug } = params;
  const article = caseStudiesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Article not found.</p>
      </div>
    );
  }

  const firstParagraph = article.content.find(c => c.type === "paragraph")?.html.replace(/<[^>]+>/g, "").slice(0, 160);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.headline.replace(/<[^>]*>?/gm, ''),
    description: firstParagraph,
    image: article.companyLogo || "/default-og.png",
    author: {
      "@type": "Person",
      name: article.meta.author,
    },
    datePublished: article.meta.date,
    publisher: {
      "@type": "Organization",
      name: "TripleHash",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0D0816] text-white py-16">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 mb-16 mt-32 flex flex-col items-center gap-30">
        {/* Headline */}
        <div className="relative w-full flex justify-center mb-12">
          <h1
            style={{
              backgroundImage: `linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)`,
              WebkitBackgroundClip: "text",
            }}
            className="max-w-[100%] sm:max-w-[75%] text-center text-transparent bg-clip-text headline relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: article.headline }}
          />
          <div
            className="absolute -bottom-80 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] rounded-full blur-[120px] opacity-60 pointer-events-none z-0 "
            style={{
              background: "radial-gradient(ellipse at center, #611610, #2E0D32 100%)",
            }}
          />
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row justify-center gap-12 w-full z-10">
          {/* LEFT */}
          <aside className="w-full lg:w-[30%]">
            <BackButton />

            {article.companyLogo && (
              <div className="mb-8 flex lg:block">
                <Image
                  src={article.companyLogo}
                  alt={`${article.companyName} Logo`}
                  width={200}
                  height={50}
                  className="filter grayscale opacity-60"
                />
              </div>
            )}

            <div className="space-y-6 text-gray-300">
              {Object.entries(article.meta).map(([key, value]) => (
                <div key={key}>
                  <p className="uppercase description text-[#C4BBD3] tracking-wider mb-1">
                    {key}
                  </p>
                  <p className="description text-[#C4BBD3]">{value}</p>
                </div>
              ))}
            </div>

            <CtaSection />
          </aside>

          {/* RIGHT */}
          <main className="w-full lg:w-[70%] space-y-12">
            {article.content.map((block, i) => renderBlock(block, i))}
            <SpotlightCard2
              spotlightColor="radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 105, 97, 0.9), transparent 70%)">
              <div className="bg-[#1A1327] p-8 rounded-2xl border border-[#FFFFFF1A]" style={{ border: "1px solid hsla(0, 0%, 100%, .16)", boxShadow: "inset 0 1px #ff8e5d66", backgroundImage: `radial-gradient(circle at 30% 140%, rgba(217, 126, 75, .3), transparent 37%), radial-gradient(circle at 50% 310%, #0400ff26, #a2a68700 78%), linear-gradient(transparent, #0d0a195e), radial-gradient(circle at 50% -30%, #a85c5c33, #67454500), radial-gradient(90% 10% at 50% 0, #a85c5c0d, #67454500 90%),` }}>
                <p className="description text-[#C4BBD3]">“{article.content[0].html.replace(/<[^>]+>/g, '').slice(0, 200)}...”</p>
                <div className="flex items-center mt-8">
                  <Image
                    src={article.authorProfile}
                    alt={article.authorName}
                    width={48}
                    height={48}
                    className="rounded-full mr-2"
                  />
                  <div>
                    <p className="text-lg font-raleway">{article.authorName}</p>
                    <p className="text-gray-400 text-sm font-raleway">
                      {article.authorTitle}
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard2>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
