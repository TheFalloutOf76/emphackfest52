<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    const { data } = $props();
    console.log(data);

    import { goto } from '$app/navigation';

    import StickyHeader from "$lib/components/StickyHeader.svelte";

    const accuracy = Math.round(10000 * data.user.totalCorrect / data.user.totalAttempted) / 100 || 0;
    const totalIncorrect = data.user.totalAttempted - data.user.totalCorrect;

    let chart;

    onMount(() => {
        new Chart(chart.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    data: [data.user.totalCorrect, totalIncorrect],
                    backgroundColor: ['#4CAF50', '#F44336']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        });
    });
</script>

<StickyHeader />

<main class="mostlyCentered content">
    <div class="box">
        <h1>personal statistics</h1>
        <button class="clickable" onclick={async () => {
            await fetch('/login/logout');
            goto('/login');
        }}>Log out</button>
        <h2>Hi {data.user.name}! Thank you for learning ASL with us. Here's a summary of your total training so far:</h2>
        <h2>your rating: {data.user.rating}</h2>
        <h2>total ASL signs interpreted: {data.user.totalAttempted}</h2>
        <h2>total ASL signs interpreted correctly: {data.user.totalCorrect}</h2>
        <h2>your overall accuracy: {accuracy}%</h2>
        <canvas bind:this={chart}></canvas>
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

    canvas {
        max-height: 400px;
        margin: 1rem auto;
    }

    button {

    }
</style>
