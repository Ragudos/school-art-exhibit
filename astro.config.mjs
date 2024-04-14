import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export const supportedLocales = ["en", "tl_ph"];
export const defaultLocale = "tl_ph";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: "https://artexhibit-tip.netlify.app",
	i18n: {
		defaultLocale,
		locales: supportedLocales,
	},
});
