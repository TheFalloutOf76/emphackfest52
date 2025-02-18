<script>
    import StickyHeader from "$lib/components/StickyHeader.svelte";

    import TrainingOption from "$lib/components/TrainingOption.svelte";
</script>

<StickyHeader />

<main class="mostlyCentered content">
    <div class="box">
        <h1>start learning ASL</h1>
        <h2>get started by choosing a training method below:</h2>
        <div class="optionSel">
            <TrainingOption title="letters" example="a" link="/train/letters">
                get a simple introduction to ASL by one letter at a time
            </TrainingOption>
            <TrainingOption title="words" example="hackathon" link="/train/words">
                for a more challenging experience, practice words instead of letters
            </TrainingOption>
            <TrainingOption
                title="sentences"
                example="the quick fox jumps over the lazy dog"
                link="/train/sentences"
            >
                for the ultimate challenge, practice full sentences like a pro
            </TrainingOption>
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
        font-size: 4rem;
    }

    .optionSel {
        flex-grow: 1; 
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
