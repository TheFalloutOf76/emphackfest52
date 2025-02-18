<script>
    const { char, guess, textScale } = $props();

    import { blur } from "svelte/transition";

    const isCorrect = char == guess;
    const color = isCorrect ? "green" : "red";
</script>

<main in:blur={{ duration: 500 }}>
    <table>
        <tbody style:--scale={textScale}>
            <tr>
                <td class="answer" style:--scale={textScale}>{char}</td>
            </tr>
            <tr style:color={color}>
                <td class="guess">{char}</td>
            </tr>
        </tbody>
    </table>
</main>

<style>
    td {
        border: 1px solid black;
    }

    table {
        border-collapse: collapse;
    }

    .answer {
        font-family: "asl";
        font-size: calc(var(--scale) / 100 * 75px);
        padding: calc(var(--scale) / 100 * 20px);
        padding-top: calc(var(--scale) / 100 * 5px);
    }

    .guess {
        font-size: calc(var(--scale) / 100 * 50px);
        text-align: center;
    }
</style>