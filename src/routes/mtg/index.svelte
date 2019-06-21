<script>
    import Player from "./player.svelte"
    import NewPlayer from "./addPlayer.svelte"
    let players = [
        {
            name:"Player1",
            life:20
        },
        {
            name:"Player2",
            life:20
        }
    ]
    const addPlayer = e => {
        const newPlayer = e.detail;
        players = [...players, newPlayer];
    };
</script>
<div class="container">
    <NewPlayer on:addplayer={addPlayer} />
</div>
    
<div class="container">
    {#if players.length === 0}
        <h1>No Players</h1>
    {:else}
        {#each players as Player}
            <Player name={Player.name} life={Player.life} />
        {/each}
    {/if}
</div>
