/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Image optimization
    images: {
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60,
        deviceSizes: [320, 480, 768, 1024, 1200],
        imageSizes: [16, 32, 48, 64, 96],
    },

    // Cache headers cho static assets
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },

    // Optional: optimize CSS
    // experimental: {
    //     optimizeCss: true,
    // },

    // Optional: output static export nếu cần
    // output: 'export',
};

module.exports = nextConfig;
