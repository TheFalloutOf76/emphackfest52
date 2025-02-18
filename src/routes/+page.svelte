<script>
    import { onMount } from "svelte";

    import StickyHeader from "$lib/components/StickyHeader.svelte";
    import ExampleAsl from "$lib/components/ExampleAsl.svelte";

    import PicText from "$lib/components/PicText.svelte";

    const exampleAsls = [
        {
            title: "EMP Hack Fest",
            description: "An amazing hackathon experience to learn new things!",
            image: "/frontpage-examples/emp hack fest.gif",
        },
        {
            title: "I love you",
            description: "We really do! Check out our sign language courses.",
            image: "/frontpage-examples/i love you.gif",
        },
        {
            title: "Learn ASL today!",
            description:
                "Being able to communicate with everyone is a great skill to have.",
            image: "/frontpage-examples/learn asl today.gif",
        },
        {
            title: "Nice to meet you!",
            description: "We're excited to meet you! Check out our courses.",
            image: "/frontpage-examples/nice to meet you.gif",
        },
    ];

    let selectedIndex = Math.floor(Math.random() * exampleAsls.length),
        chosenExampleAsl = $state(exampleAsls[selectedIndex]);

    onMount(() => {
        const interval = setInterval(() => {
            let newCandidateIndex = Math.floor(
                Math.random() * exampleAsls.length,
            );
            while (newCandidateIndex == selectedIndex) {
                newCandidateIndex = Math.floor(
                    Math.random() * exampleAsls.length,
                );
            }
            chosenExampleAsl = exampleAsls[selectedIndex];
        }, 20000);

        return () => clearInterval(interval);
    });
</script>

<StickyHeader />

<main>
    <div class="mainArea mostlyCentered">
        {#key chosenExampleAsl.title}
            <ExampleAsl {...chosenExampleAsl} />
        {/key}
        <div>
            <h1>The free, enjoyable, and efficient path to mastering ASL!</h1>
            <a href="/train">
                <button class="clickable startButton"> start learning </button>
            </a>
            <a href="/profile">
                <button class="clickable startButton">profile</button>
            </a>
        </div>
    </div>
    <hr />
    <div class="secondary mostlyCentered">
        <h1>Why learn ASL?</h1>
        <PicText
            title="Improved Communication and Connection"
            image="/frontpage-examples/happytalking.jpg"
            leftRight="left"
        >
            Learning ASL allows you to communicate effectively with the Deaf and
            hard-of-hearing community, fostering inclusivity and building
            meaningful relationships. It also enhances your sensitivity to
            diverse communication needs.
        </PicText>
        <PicText
            title="Professional Opportunities and Market Demand"
            image="/frontpage-examples/job.webp"
            leftRight="right"
        >
            ASL skills are increasingly valuable in various professions,
            including education, healthcare, law enforcement, customer service,
            and interpreting. The demand for Sign Language Interpreters is
            growing rapidly, making it a sought-after skill in the job market.
        </PicText>
        <PicText
            title="Cognitive and Personal Development"
            image="/frontpage-examples/selfgrowahmoment.jpg"
            leftRight="left"
        >
            Learning ASL improves cognitive abilities such as memory and spatial
            awareness. It also encourages expressive communication through body
            language and facial expressions, enriching personal growth and
            emotional intelligence.
        </PicText>
    </div>
</main>

<style>
    main {
        font-family: "main-font";
    }

    .mainArea {
        height: 100vh;
    }

    .startButton {
        background: linear-gradient(
            180deg,
            rgba(253, 246, 227, 1) 0%,
            rgba(255, 212, 220, 1) 100%
        );
        margin: 0;
        margin-right: 10px;
    }

    .startButton:hover {
        background: linear-gradient(
            180deg,
            rgba(253, 246, 227, 0.8) 0%,
            rgba(255, 212, 220, 0.8) 100%
        );
    }

    .secondary {
        flex-direction: column;
    }

    .secondary h1 {
        font-size: 5rem;
    }
</style>
