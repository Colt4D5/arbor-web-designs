import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    }),
		alias: {
			$components: path.resolve('./src/lib/components'),
			$assets: path.resolve('./src/lib/assets'),
			$css: path.resolve('./src/lib/assets/css'),
			$utils: path.resolve('./src/lib/utils'),
			$blogPosts: path.resolve('./src/lib/blog-posts'),
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	],

  prerender: {
    crawl: false,
    entries: ['/', '/blog', '/blog/high-performance-website', '/blog/slow-equals-low-traffic']
  }

	// vitePlugin: {
  //   experimental: {
  //     inspector: {
  //       // change shortcut
  //       toggleKeyCombo: 'meta-shift',
  //       // hold and release key to toggle inspector mode 
  //       holdMode: true,
  //       // inspector position
  //       toggleButtonPos: 'top-right',
  //     },
  //   },
	// },
};

export default config;
