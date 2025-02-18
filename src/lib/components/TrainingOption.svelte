<script>
    const { title, example, link, children } = $props();

    import { blur } from "svelte/transition";

    const scaledSize = 100 / Math.log1p(Math.sqrt(example.length) + 1);
</script>

<main in:blur={{ duration: 1000 }}>
    <div class="yap">
        <h2>{title}</h2>
        <p class="example" style:--size={scaledSize + 'px'} style:text-align={example.length == 1 ? 'center': null}>{example}</p>
        <p>{@render children()}</p>
        <a href={link}><button class="clickable">start training</button></a>
    </div>
</main>

<style>
    main {
        margin: 20px;
        background-color: rgba(255, 255, 255, 0.2);
        height: 500px;
        border-radius: 15px;
        width: 600px;
    }

    .yap h2 {
        font-size: 2rem;
        text-align: center;
    }

    p {        
        margin: 25px 0;
        padding: 0 20px;
    }

    .example {
        font-family: "asl";
        font-size: var(--size);
        margin: 25px 0;
        height: 150px;
    }

    button {
        margin: auto;
        display: block;
    }
</style>