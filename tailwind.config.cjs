/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "#0C0C0E",
				foreground: "#F7F8F8",
				"text-secondary": "#7D7E82",
				border: "#2B2C32",

				"dark-blue": {
					100: "#7D7E82",
					200: "#5A5A5C",
					300: "#2B2C32",
					400: "#181A20",
					500: "#15171D",
					600: "#13151B",
					700: "#12141A",
					800: "#111318",
					900: "#0F1116",
				},

				"off-white": {
					100: "#F7F8F8",
					300: "#7D7E82",
					600: "#3D3F43",
					900: "#2C2D33",
				},

				orange: "#E36D0B",
			},

			fontFamily: {
				"dm-mono": "'DM Mono', monospace",
				"jetbrains-mono": "'JetBrains Mono', monospace",
				inter: "'Inter', sans-serif",
			},

			typography: (theme) => ({
				default: {
					css: {
						pre: {
							color: theme("colors.grey.1000"),
							backgroundColor: theme("colors.grey.100"),
						},
						"pre code::before": {
							"padding-left": "unset",
						},
						"pre code::after": {
							"padding-right": "unset",
						},
						code: {
							backgroundColor: theme("colors.grey.100"),
							color: "#DD1144",
							fontWeight: "400",
							"border-radius": "0.25rem",
						},
						"code::before": {
							content: '""',
							"padding-left": "0.25rem",
						},
						"code::after": {
							content: '""',
							"padding-right": "0.25rem",
						},
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
