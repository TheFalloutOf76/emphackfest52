<script>
    const { title, image, leftRight, children } = $props();
</script>

<main>
    {#if leftRight == "left"}
        <img src={image} alt={title} />
    {/if}
    <div class="yap">
        <h3>{title}</h3>
        <p>{@render children()}</p>
    </div>
    {#if leftRight == "right"}
        <img src={image} alt={title} />
    {/if}
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin: 60px 0;
    }

    img {
        max-width: 250px;
        margin: 0 1rem;
    }

    h3 {
        font-size: 1.5rem;
    }
</style>
