import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const isUserSite = Boolean(repository && owner && repository === `${owner}.github.io`);

export default defineConfig({
  site: process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : "https://example.com"),
  base: process.env.BASE_PATH ?? (isGitHubPages && repository && !isUserSite ? `/${repository}` : "/"),
  vite: {
    plugins: [tailwindcss()],
  },
});
