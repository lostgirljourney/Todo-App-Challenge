/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif']
			},
			boxShadow: {
				button: '0px 2px 6px 0px rgba(127, 177, 243, 0.40)'
			}
		}
	},
	plugins: []
};
