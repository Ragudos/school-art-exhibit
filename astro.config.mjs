import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export const supportedLocales = ["en", "tl"];
export const defaultLocale = "tl";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: "https://artexhibit-tip.netlify.app",
	i18n: {
		defaultLocale,
		locales: supportedLocales,
	},
});
