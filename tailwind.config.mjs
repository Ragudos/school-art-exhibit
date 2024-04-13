/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: ["selector", "[data-theme]"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
				screens: {
					"2xl": "1400px",
				},
			},
			colors: {
				background: "hsl(var(--clr-background))",
				foreground: "hsl(var(--clr-foreground))",
				primary: {
					DEFAULT: "hsl(var(--clr-primary))",
					foreground: "hsl(var(--clr-primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--clr-secondary))",
					foreground: "hsl(var(--clr-secondary-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--clr-accent))",
					foreground: "hsl(var(--clr-accent-foreground))",
				},
			},
		},
	},
	plugins: [],
};
