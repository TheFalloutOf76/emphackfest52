<script>
    const { data } = $props();
    if (!["letters", "words", "sentences"].includes(data.trainingType)) {
        throw new Error("Invalid training type");
    }
    const trainingTypeSingular = data.trainingType.slice(0, -1);

    import { blur } from "svelte/transition";

    import StickyHeader from "$lib/components/StickyHeader.svelte";

    import LetterDiff from "$lib/components/LetterDiff.svelte";

    import { WORDBANKS } from "$lib/datasets.js";

    let phase = $state("attempt");

    let rating = $state(data.rating);
    let targetText = $state("");
    let targetTextScaling = $derived(
        150 / Math.log1p(Math.sqrt(targetText.length) + 1),
    );
    let answerText = $state("");

    let answerTextArr = $derived(
        answerText
            .replace(/[^A-Za-z]/g, "")
            .toLowerCase()
            .split(""),
    );
    let solutionArr = $derived(
        targetText
            .replace(/[^A-Za-z]/g, "")
            .toLowerCase()
            .split(""),
    );

    let totalLetters = $derived(solutionArr.length);
    let correctLetters = $state(0);

    let comparisonTable = $state([]);

    $effect(() => {
        if (answerTextArr.length == solutionArr.length) {
            tryAnswer();
        }
    });

    let inputEle = null;

    async function tryAnswer() {
        if (phase == "solution") {
            return;
        }
        phase = "solution";
        if (inputEle) {
            inputEle.disabled = true;
        }
        inputEle.disabled = true;
        correctLetters = 0;
        for (let i = 0; i < totalLetters; i++) {
            console.log(solutionArr[i], answerTextArr[i]);
            if (solutionArr[i] == answerTextArr[i]) {
                correctLetters++;
            }
        }

        fetch("/train", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                totalLetters: totalLetters,
                correctLetters: correctLetters,
            }),
        }).then(async (res) => {
            if (res.ok) {
                rating = (await res.json()).rating;
            }
        });

        for (let i = 0; i < totalLetters; i++) {
            comparisonTable.push([solutionArr[i], answerTextArr[i]]);
            await new Promise((r) =>
                setTimeout(r, totalLetters > 20 ? 75 : 250),
            );
        }
    }

    function chooseQuestion() {
        phase = "attempt";
        if (inputEle) {
            inputEle.disabled = false;
            inputEle.focus();
        }
        answerText = "";
        comparisonTable = [];
        const wordbank = WORDBANKS[data.trainingType];
        let newTargetText =
            wordbank[Math.floor(Math.random() * wordbank.length)];
        while (newTargetText == targetText) {
            newTargetText =
                wordbank[Math.floor(Math.random() * wordbank.length)];
        }
        targetText = newTargetText;
    }
    chooseQuestion();
</script>

<StickyHeader />

<main class="mostlyCentered content">
    <div class="box">
        <h1>start learning ASL using {data.trainingType}</h1>
        {#if data.loggedIn}
            <h2>
                Your current rating is {rating}. Practice some more to increase
                it!
            </h2>
        {:else}
            <h2>
                Log in or create an account to save your progress, get a rating,
                and compete with others!
            </h2>
        {/if}
        {#if phase == "attempt"}
            <h3>your {trainingTypeSingular} is:</h3>
            <div
                class="targetText"
                style:--size={targetTextScaling + "px"}
                in:blur={{ duration: 750 }}
            >
                {targetText}
            </div>
            <h3>what does the ASL above say?</h3>
        {/if}
        <div class="inputArea">
            <input
                type="text"
                bind:value={answerText}
                placeholder="type your answer here. . ."
                bind:this={inputEle}
            />
        </div>
        {#if phase == "solution"}
            <div class="answerComparison">
                {#each comparisonTable as comparison}
                    <LetterDiff
                        char={comparison[0]}
                        guess={comparison[1]}
                        textScale={targetTextScaling}
                    />
                {/each}
            </div>
            <h3>
                you got {correctLetters} out of {totalLetters} letters correct!
            </h3>
            <h3>
                your rating has changed by {10 * correctLetters -
                    8 * (totalLetters - correctLetters)} points
            </h3>
            <button class="clickable" onclick={chooseQuestion}>
                try another {trainingTypeSingular}
            </button>
        {/if}
        <div class="debug">
            <h3>debug:</h3>
            solution:
            <pre>{targetText}</pre>
        </div>
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

    .targetText {
        font-family: "asl";
        font-size: var(--size);
        height: 150px;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    input {
        border: none;
        border-radius: 6px;
        height: 35px;
        width: 500px;
        margin: auto;
        font-size: 1.5rem;
        padding: 1.5rem 0.75rem;
        display: block;
    }

    .answerComparison {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 10px;
    }
</style>
