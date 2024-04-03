import { FluentManifest, buildDevServer } from "@cotera/sdk";

const app = buildDevServer(async () => {
  // Use a dynamic import to capture errors
  const { manifest } = await import("./manifest");
  return FluentManifest.fromShorthand(manifest);
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Dev Server Listening on Port ${PORT}`));
