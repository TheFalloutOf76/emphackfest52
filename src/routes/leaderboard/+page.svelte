<script>
    const { data } = $props();
    console.log(data);

    import StickyHeader from "$lib/components/StickyHeader.svelte";
</script>

<StickyHeader />

<main class="mostlyCentered content">
    <div class="box">
        <h1>leaderboard:</h1>
        <ol>
            {#each data.results as entry}
                <li>{entry.name} — {entry.rating}</li>
            {/each}
        </ol>
    </div>
</main>

<style>
    .box {
        background: var(--colorTheme);
        padding: 1rem;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .box h1 {
        text-align: center;
        font-size: 3rem;
    }

    ol {
        text-align: center;
        font-size: 2rem;
    }
</style>
