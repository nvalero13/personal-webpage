/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				light: '#F2F2F2',
				main: '#DB8932',
				purple: '#A855F7',
				dark: '#202020',
			},
			fontFamily: {
				sans: ['Roboto', 'Sans-serif'],
			},
		},
	},
	plugins: [],
};
