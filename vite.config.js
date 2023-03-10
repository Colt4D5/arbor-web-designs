import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

const config = {
	plugins: [
		sveltekit(),
		autoprefixer,
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		})
	]
};

export default config;
