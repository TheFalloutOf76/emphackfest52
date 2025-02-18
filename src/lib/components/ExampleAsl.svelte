<script>
    const { title, description, image } = $props();

    import { blur } from "svelte/transition";
</script>

<div class="exampleAsl" in:blur={{ duration: 1500 }}>
    <img src={image} alt={title} />
    <h2>"{title}"</h2>
    <p>{description}</p>
</div>

<style>
    .exampleAsl {
        width: 300px;
        margin: 0 5rem;
    }

    h2 {
        text-align: center;
        margin: 0.25rem 0;
        font-size: 1.75rem;
    }

    p {
        font-size: large;
        font-style: italic;
    }

    img {
        width: 300px;
        height: 300px;
    }
</style>