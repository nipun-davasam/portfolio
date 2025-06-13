const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
