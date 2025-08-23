// import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
	paths: {
      base: dev ? '' : '/slides'
    },
adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
      		fallback: 'index.html', // 👈 required for SPA mode on GitHub Pages
			precompress: false,
			strict: true
		})
		},
	compilerOptions: {
		runes: true
	}
}

export default config;
