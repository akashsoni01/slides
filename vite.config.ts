import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
  base: '/slides/', // 👈 use your repo name here
  build: {
    outDir: 'dist', // 👈 ensure it's dist
  },
})
