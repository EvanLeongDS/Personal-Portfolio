import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a minimal standalone server bundle for Docker (only the files needed at runtime).
  output: "standalone",
};

export default nextConfig;
