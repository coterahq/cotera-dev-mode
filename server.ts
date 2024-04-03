import { FluentManifest, buildDevServer } from "@cotera/sdk";

// Connect with Vite
export const viteNodeApp = buildDevServer(
  async () => {
    const { manifest } = await import('./era.js');
    return FluentManifest.fromShorthand(manifest);
  }
);
