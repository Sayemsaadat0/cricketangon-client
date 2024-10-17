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

				'c-grey-50': '#ebebeb',
				'c-grey-100': '#c0c0c0',
				'c-grey-200': '#a1a1a1',
				'c-grey-300': '#767676',
				'c-grey-400': '#5c5c5c',
				'c-grey-500': '#33333',
				'c-grey-600': '#2e2e2e2',
				'c-grey-700': '#242424',
				'c-grey-800': '#1c1c1c',
				'c-grey-900': '#151515',

				'c-white-50': '#fcfcfc',
				'c-white-100': '#f6f6f6',
				'c-white-200': '#f2f2f2',
				'c-white-300': '#ececec',
				'c-white-400': '#e9e9e9',
				'c-white-500': '#e3e3e3',
				'c-white-600': '#cfcfcf',
				'c-white-700': '#a1a1a1',
				'c-white-800': '#7d7d7d',
				'c-white-900': '#5f5f5f',
			}, 
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
