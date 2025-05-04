/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    
    webpack: (config) => {
        config.module.rules.push({
            test: /\.gltf$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/models/',
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;

