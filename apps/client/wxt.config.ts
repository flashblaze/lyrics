import { defineConfig } from "wxt";
import Solid from "vite-plugin-solid";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    host_permissions: ["*://*/*", "http://127.0.0.1:*"],
    permissions: ["storage", "cookies", "tabs", "<all_urls>"],
  },
  vite: () => ({
    build: {
      target: "esnext",
    },
    plugins: [Solid()],
  }),
});
