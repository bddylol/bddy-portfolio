/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				midnight: {
					50: '#f5f5f6',
					100: '#d0d1d3',
					200: '#a2a3a8',
					300: '#73757c',
					400: '#454751',
					450: '#252A3A',
					500: '#161925',
					600: '#12141e',
					700: '#0d0f16',
					800: '#090a0f',
					900: '#040507'
				}
			}
		}
	},
	plugins: []
};
