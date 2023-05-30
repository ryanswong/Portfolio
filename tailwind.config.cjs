/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			current: 'white',
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
	darkMode: 'class'
}
