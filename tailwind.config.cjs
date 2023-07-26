/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			current: 'white',
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
	darkMode: 'class'
}
