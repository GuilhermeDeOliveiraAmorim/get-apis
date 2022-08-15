/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["picsum.photos", "image.tmdb.org", "www.themoviedb.org"],
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/https://api.github.com/',
    //             destination: '/',
    //         },
    //     ]
    // },
};

module.exports = nextConfig;
