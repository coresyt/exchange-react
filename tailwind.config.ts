import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.tsx', './index.html'],

	theme: {
		extend: {
			colors: {
				reactColor: 'rgb(88 196 220)'
			}
		}
	},

	plugins: []
} as Config;
