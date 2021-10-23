<script>
    import Stock from '$lib/Stock.svelte';

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

    let errorMessage = '';
    let input = '';
    let stocks = [];

    function addStock() {
        if (availableStocks[input]) {
            if (stocks.some((stock) => stock.symbol === input)) {
                errorMessage = 'This stock is already on your dashboard.';
            } else {
                stocks = [...stocks, availableStocks[input]];
                errorMessage = '';
                input = '';
            }
        } else {
            errorMessage = 'Stock not found.';
        }
    }
</script>

<svelte:head>
    <title>Svelte Stock Watcher</title>
    <meta
        name="description"
        content="Simple web application for a user to add basic stock tickers to a dashboard."
    />
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
    {#if errorMessage.length > 0}
        <p class="error-message">{errorMessage}</p>
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
        --green: #299e00;
        --green-light: #6af531;
        --green-dark: #00a333;
        --red: #bb0606;
        --red-light: #eb5631;
        --red-dark: #901700;
        --button: #284cc9;
        --titles: #98a1a8;
        --caption: #919aa0;
        --type: #3e5769;
    }

    :global(body) {
        background: #fafafa;
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
        font-size: 16px;
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

    @media screen and (min-width: 768px) {
        .container {
            padding: 2rem;
        }

        .heading {
            font-size: 60px;
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
