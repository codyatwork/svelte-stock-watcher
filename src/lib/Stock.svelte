<script>
    export let high;
    export let low;
    export let name;
    export let open;
    export let price;
    export let symbol;

    let percentChange;
    let thermometerPercent;

    $: change = price - open;
    $: changeIsPositive = change >= 0;
    $: {
        if (open === 0) {
            if (change > 0) {
                percentChange = 100;
            } else if (change < 0) {
                percentChange = -100;
            } else {
                percentChange = 0;
            }
        } else {
            percentChange = (change / open) * 100;
        }
    }
    $: {
        let range = high - low;
        if (range === 0) {
            thermometerPercent = 50;
        } else {
            thermometerPercent = ((price - low) / range) * 100;
        }
    }

    function displayPrice(price) {
        return price.toFixed(2);
    }
</script>

<div class="container">
    <div
        class="thermometer {changeIsPositive
            ? 'positive-thermometer'
            : 'negative-thermometer'}"
    >
        <div class="line">
            <div
                class="arrow"
                style="bottom:calc({thermometerPercent}% - 6px)"
            ></div>
        </div>
        <div class="numbers">
            <span>{displayPrice(high)}</span>
            <span>{displayPrice(low)}</span>
        </div>
    </div>
    <div class="data">
        <div class="naming-info">
            <h2 class="name" title={name}>{name}</h2>
            <span class="symbol">{symbol}</span>
        </div>
        <div class="performance-info">
            <span class="price">{displayPrice(price)}</span>
            <div class="change">
                <span
                    class={changeIsPositive
                        ? 'positive-absolute-change'
                        : 'negative-absolute-change'}
                >
                    {#if changeIsPositive}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                            />
                        </svg>
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
                            />
                        </svg>
                    {/if}
                    {displayPrice(change)}
                </span>
                <span
                    class={changeIsPositive
                        ? 'positive-percent-change'
                        : 'negative-percent-change'}
                >
                    ({displayPrice(percentChange)}%)
                </span>
            </div>
        </div>
        <div class="price-history">
            <div class="price-history-item">
                <span class="price-description">Open</span>
                {displayPrice(open)}
            </div>
            <div class="price-history-item">
                <span class="price-description">High</span>
                {displayPrice(high)}
            </div>
            <div class="price-history-item">
                <span class="price-description">Low</span>
                {displayPrice(low)}
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: stretch;
        background: white;
        box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.11);
    }

    .thermometer {
        display: none;
        color: white;
        padding: 1rem;
    }

    .positive-thermometer {
        background: linear-gradient(var(--green-light), var(--green-dark));
    }

    .negative-thermometer {
        background: linear-gradient(var(--red-light), var(--red-dark));
    }

    .line {
        position: relative;
        height: 100%;
        width: 2px;
        margin-left: 1rem;
    }

    .positive-thermometer .line {
        background: linear-gradient(white, #ffffff7a);
    }

    .negative-thermometer .line {
        background: linear-gradient(#ffffff7a, white);
    }

    .arrow {
        position: absolute;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 13px solid white;
        height: 0;
        width: 0;
        right: 100%;
    }

    .numbers {
        display: flex;
        flex-direction: column;
        font-size: 0.75rem;
        font-weight: 600;
        justify-content: space-between;
        margin-left: 0.5rem;
        width: 6ch;
    }

    .data {
        display: flex;
        align-items: center;
        min-width: 0;
        padding: 1rem;
        width: 100%;
    }

    .naming-info {
        width: 60%;
    }

    .name {
        font-size: 0.875rem;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;
    }
    .symbol {
        color: var(--titles);
        font-size: 0.875rem;
        font-weight: 600;
    }

    .performance-info {
        align-items: baseline;
        text-align: right;
        width: 40%;
    }

    .price {
        font-size: 1.375rem;
    }

    .change {
        font-size: 0.875rem;
        font-weight: 600;
        white-space: nowrap;
    }

    .positive-absolute-change {
        color: var(--green-dark);
    }

    .negative-absolute-change {
        color: var(--red-dark);
    }

    svg {
        fill: currentColor;
        width: 9px;
    }

    .positive-percent-change {
        color: var(--green);
    }

    .negative-percent-change {
        color: var(--red);
    }

    .price-history {
        display: none;
        font-size: 0.75rem;
        font-weight: 600;
        grid-template-columns: repeat(auto-fit, 5rem);
        row-gap: 0.1rem;
        text-transform: uppercase;
    }

    .price-description {
        color: var(--titles);
    }

    @media (prefers-color-scheme: dark) {
        .container {
            background: #324654;
        }

        .positive-absolute-change {
            color: var(--green-light);
        }

        .negative-absolute-change {
            color: #ffd0d0;
        }

        .positive-percent-change {
            color: #35cd00;
        }

        .negative-percent-change {
            color: #ff9393;
        }
    }

    @media screen and (min-width: 768px) {
        .thermometer {
            display: flex;
        }

        .data {
            display: unset;
            padding: 1.5rem;
        }

        .naming-info {
            width: 100%;
        }

        .name {
            font-size: 1.125rem;
        }

        .performance-info {
            display: flex;
            width: 100%;
        }

        .price {
            font-size: 1.75rem;
        }

        .change {
            margin-left: 0.5rem;
        }

        .price-history {
            display: grid;
        }
    }
</style>
