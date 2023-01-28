import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/lib/components'),
			$img: path.resolve('./src/lib/images'),
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	],

	vitePlugin: {
    experimental: {
      inspector: {
        // change shortcut
        toggleKeyCombo: 'meta-shift',
        // hold and release key to toggle inspector mode 
        holdMode: true,
        // inspector position
        toggleButtonPos: 'top-right',
      },
    },
	},
};

export default config;
