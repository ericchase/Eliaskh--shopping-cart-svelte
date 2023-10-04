import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    sourceMap: true,
    postcss: {
      plugins: [autoprefixer()]
    }
  }),
  kit: {
    adapter: adapter()
  }
};

export default config;
