import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: static_adapter(),
        paths: {
            base:
                process.env.NODE_ENV === 'development'
                    ? ''
                    : '/svelte-stock-watcher',
        },
    },
};

export default config;
