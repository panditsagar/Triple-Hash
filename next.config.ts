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
      source: '/public/:path*',
      destination: 'https://lp.triplehash.in/public/:path*',
    },
  ];
},
};

module.exports = nextConfig;
