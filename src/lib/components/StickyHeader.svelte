<script>
    import Logo from "$lib/components/Logo.svelte";
</script>

<header>
    <nav>
        <a href="/"><Logo /></a>
        <div class="navLinks">
            <a href="/train">
                <button class="clickable">get started</button>
            </a>
            <a href="/profile"><button class="clickable">profile</button></a>
            <a href="/leaderboard">
                <button class="clickable">leaderboards</button>
            </a>
        </div>
    </nav>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        background-color: white;
        transition: border-bottom 0.3s;
        z-index: 10;
        background: var(--colorTheme);
    }

    nav {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
