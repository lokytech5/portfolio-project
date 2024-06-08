module.exports = {
    async rewrites() {
      return [
        {
          source: "/blog",
          destination: "https://between-brackets.vercel.app/blog",
        },
        {
          source: "/blog/:path*",
          destination: "https://between-brackets.vercel.app/blog/:path*",
        },
      ];
    },
  };
  