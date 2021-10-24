import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: static_adapter(),
        paths: {
            base: '/svelte-stock-watcher'
        },
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
    },
};

export default config;
