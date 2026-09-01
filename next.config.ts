/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

 async rewrites() {
  return [
    {
      source: '/landing-page/:path*',
      destination: 'https://lp.triplehash.in/:path*',
    },
    {
      source: '/style.css',
      destination: 'https://lp.triplehash.in/style.css',
    },
    {
      source: '/script.js',
      destination: 'https://lp.triplehash.in/script.js',
    },
    {
      source: '/work/:path*',
      destination: 'https://lp.triplehash.in/work/:path*',
    },
    {
      source: '/coach/:path*',
      destination: 'https://lp.triplehash.in/coach/:path*',
    },
    {
      source: '/image/:path*',
      destination: 'https://lp.triplehash.in/image/:path*',
    },
    {
      source: '/font/:path*',
      destination: 'https://lp.triplehash.in/font/:path*',
    },
  ];
},
};

module.exports = nextConfig;
