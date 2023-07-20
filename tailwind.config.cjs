/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				"dm-mono": "'DM Mono', monospace",
				"jetbrains-mono": "'JetBrains Mono', monospace",
				inter: "'Inter', sans-serif",
			},

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

				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
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
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
