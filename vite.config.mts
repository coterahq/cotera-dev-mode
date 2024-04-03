import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/customers",

  server: { port: 3000 },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./server.ts",
      exportName: "viteNodeApp",
      initAppOnBoot: false,
      tsCompiler: "esbuild",
      swcOptions: {},
    }),
  ],
});
