import { defineConfig } from "vitepress";
import nav from "./nav";
import { srcDir, sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monon98's Blog",
  description: "A VitePress Site",
  head: [
    ["link", { rel: "icon", href: "https://avatars.githubusercontent.com/u/107355305?v=4" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/monon98/BlogVitepress" },
    ],

    search: {
      provider: "local",
    },
  },
  base: '/BlogVitepress/',
  srcDir,
  cacheDir: "./.cache",
  outDir: "./dist",
  lastUpdated: true,
});
