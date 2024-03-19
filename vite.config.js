import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
	base: './',
	plugins: [preact()],
	resolve: {
		alias: [
			{ find: '@/imgs', replacement: '/src/assets/imgs' },
			{ find: '@', replacement: '/src' },
		],
	},
});
