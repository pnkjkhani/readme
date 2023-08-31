/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com","lh3.googleusercontent.com"],
        formats: ["image/webp"],
    },
}

module.exports = nextConfig
