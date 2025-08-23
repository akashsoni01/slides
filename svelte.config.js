import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Add vitePreprocess for Svelte pre-processing
    preprocess: vitePreprocess(),

    kit: {
        // Use the static adapter
        adapter: adapter({
            // Output the files to the 'docs' folder
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
            precompress: false,
            strict: true
        }),
        
        // Set the base path to the repository name for GitHub Pages
        paths: {
            base: dev ? '' : '/slides',
        },
        
        // Prerender all pages
        prerender: {
            handleHttpError: ({ path, referrer, message, status }) => {
                if (status === 404) return;
                throw new Error(message);
            }
        },
    }
};

export default config;
