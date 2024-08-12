/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    eslint: {
        ignoreDuringBuilds: true, // Desactiva ESLint durante la build
    },
};

module.exports = nextConfig;