import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    // Permite `@use "abstracts" as *;` desde cualquier archivo .scss
    loadPaths: [path.join(process.cwd(), "styles")],
  },
};

export default nextConfig;
