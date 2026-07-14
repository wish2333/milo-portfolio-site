import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep standalone platform builds scoped to this repository when another
  // package-lock.json exists higher in the local workspace.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
