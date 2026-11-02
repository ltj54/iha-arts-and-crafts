import type { NextConfig } from "next";

const repositoryName = "iha-arts-and-crafts";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? `/${repositoryName}` : "",
  assetPrefix: isProduction ? `/${repositoryName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
