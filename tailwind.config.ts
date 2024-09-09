import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				'c-violet-50': '#f2e8f7',
				'c-violet-100': '#d8b8e5',
				'c-violet-200': '#c596d8',
				'c-violet-300': '#ab66c6',
				'c-violet-400': '#9a48bb',
				'c-violet-500': '#811aaa',
				'c-violet-600': '#75189b',
				'c-violet-700': '#5c1279',
				'c-violet-800': '#470e5e',
				'c-violet-900': '#360b47',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
