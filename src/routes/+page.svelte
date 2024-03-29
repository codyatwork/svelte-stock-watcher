<script>
    import Stock from '$lib/Stock.svelte';
    import { base } from '$app/paths';

    const availableStocks = {
        GOOG: {
            high: 709.28,
            low: 689.47,
            name: 'Alphabet Inc. CL C',
            open: 691,
            price: 706.32,
            symbol: 'GOOG',
        },
        YHOO: {
            high: 29.66,
            low: 29.06,
            name: 'Yahoo! Inc',
            open: 29.28,
            price: 29.27,
            symbol: 'YHOO',
        },
        AIG: {
            high: 53.47,
            low: 52.28,
            name: 'American International Group Inc',
            open: 52.06,
            price: 53.08,
            symbol: 'AIG',
        },
        UWTIF: {
            high: 1.74,
            low: 1.5,
            name: 'VelocityShares 3x Long Crude ETN',
            open: 1.37,
            price: 1.61,
            symbol: 'UWTIF',
        },
        DWTIF: {
            high: 297.5,
            low: 245.59,
            name: '3x Inverse Crude',
            open: 307.1,
            price: 253.41,
            symbol: 'DWTIF',
        },
        GRPN: {
            high: 4.13,
            low: 3.6,
            name: 'Groupon Inc',
            open: 4.08,
            price: 3.74,
            symbol: 'GRPN',
        },
    };
    const errors = { duplicate: 'duplicate', notFound: 'notFound' };

    let error = null;
    let input = '';
    let stocks = [];

    function addStock() {
        if (availableStocks[input]) {
            if (stocks.some((stock) => stock.symbol === input)) {
                error = errors.duplicate;
            } else {
                stocks = [...stocks, availableStocks[input]];
                error = null;
                input = '';
            }
        } else {
            error = errors.notFound;
        }
    }
</script>

<svelte:head>
    <title>Svelte Stock Watcher</title>
    <meta
        name="description"
        content="Simple web application for a user to add basic stock tickers to a dashboard."
    />
    <link rel="icon" href="{base}/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="container">
    <h1 class="heading">Stock Watcher</h1>
    <form class="add-input-group" on:submit|preventDefault={addStock}>
        <input
            class="add-input"
            type="text"
            placeholder="Enter stock symbol"
            value={input}
            on:input={(event) => (input = event.target.value.toUpperCase())}
        />
        <button class="add-button">
            Add<span class="verbose-button-text">&nbsp;Stock</span>
        </button>
    </form>
    {#if error === errors.duplicate}
        <p class="error-message">This stock is already on your dashboard.</p>
    {:else if error === errors.notFound}
        <p class="error-message">
            Stock not found (they're hardcoded - <a
                href="https://github.com/codyatwork/svelte-stock-watcher#the-stocks-are-hard-coded-here-are-the-ones-included"
                target="_blank"
                rel="noopener">see the available stocks here</a
            >).
        </p>
    {/if}
    <div class="stocks">
        {#each stocks as stock}
            <div class="stock-wrapper">
                <Stock {...stock} />
            </div>
        {/each}
    </div>
</div>

<style>
    :global(:root) {
        --background: #fafafa;
        --button: #284cc9;
        --caption: #919aa0;
        --green: #299e00;
        --green-dark: #00a333;
        --green-light: #6af531;
        --red: #bb0606;
        --red-dark: #901700;
        --red-light: #eb5631;
        --titles: #98a1a8;
        --type: #3e5769;
    }

    :global(body) {
        background: var(--background);
        margin: 0;
    }

    .container {
        font-family: 'Open Sans', sans-serif;
        color: var(--type);
        margin: auto;
        max-width: 1250px;
        padding: 0 0.75rem;
    }

    .heading {
        font-weight: 600;
    }

    .add-input-group {
        display: flex;
        height: 50px;
        margin-bottom: 1rem;
    }

    .add-input {
        background: inherit;
        border: 1px solid #e1e2e4;
        flex: 1;
        font-family: inherit;
        font-size: 1rem;
        padding: 1rem;
    }

    .add-button {
        background: var(--button);
        color: white;
        border: 0;
        box-shadow: 0px 14px 33px -18px var(--button);
        cursor: pointer;
        font-family: inherit;
        font-weight: 800;
        margin-left: 0.5rem;
        padding: 0 1.4rem;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .verbose-button-text {
        display: none;
    }

    .error-message {
        color: var(--red);
    }

    .stocks {
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        grid-gap: 1rem;
    }

    .stock-wrapper {
        margin-bottom: 0.5rem;
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            --titles: #d1dde7;
            background: var(--type);
        }

        .container {
            color: var(--background);
        }

        .add-input {
            color: var(--background);
        }

        .add-input::placeholder {
            color: #b7c3ca;
        }

        .error-message {
            color: var(--red-light);
        }
    }

    @media screen and (min-width: 768px) {
        .container {
            padding: 2rem;
        }

        .heading {
            font-size: 3.75rem;
        }

        .add-input-group {
            margin-bottom: 2rem;
            width: 27rem;
        }

        .add-button {
            padding: 0 2rem;
        }

        .verbose-button-text {
            display: unset;
        }

        .stocks {
            display: grid;
        }

        .stock-wrapper {
            margin: 0;
        }
    }
</style>
