<script>
    import StickyHeader from "$lib/components/StickyHeader.svelte";

    import { goto } from "$app/navigation";

    async function hash(string) {
        const utf8 = new TextEncoder().encode(string);
        const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
            .map((bytes) => bytes.toString(16).padStart(2, "0"))
            .join("");
        return hashHex;
    }

    let username = $state(""),
        name = $state(""),
        password = $state("");

    let warning = $state("");
    async function login(event) {
        event.preventDefault();
        const hashedPassword = await hash(password);
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, name, hashedPassword }),
        });
        if (res.ok) {
            goto("/profile");
        } else {
            warning = await res.text();
        }
    }
</script>

<StickyHeader />

<main class="mostlyCentered">
    <div class="box">
        <h1>Log in</h1>
        <form onsubmit={login}>
            <label for="username">Username</label>
            <input
                type="username"
                id="username"
                name="username"
                required
                bind:value={username}
            />

            <label for="name">Name</label>
            <input
                type="name"
                id="name"
                name="name"
                required
                bind:value={name}
            />

            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                required
                bind:value={password}
            />

            <button type="submit" class="clickable">Log in</button>
        </form>
        <p>
            if you don't have an account, one will be automatically created for
            you
        </p>
        <p class="warning">{warning}</p>
    </div>
</main>

<style>
    main {
        padding: 1rem;
        flex-direction: column;
        height: 90vh;
        font-family: "main-font";
    }

    .box {
        background: var(--colorTheme);
        padding: 1rem;
        border-radius: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label {
        font-size: 1.2rem;
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
    }

    button {
        padding: 0.5rem;
        font-size: 1rem;
        background-color: #f0f0f0;
        border: none;
        cursor: pointer;
    }

    .warning {
        color: red;
    }
</style>
