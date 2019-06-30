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
    const removePlayer = e => {
        players = players.filter (player => player.name !== e.detail);
    };
    const saveGame = () => {
        players.forEach = player => {
        //~psedocode~
        //player.saveGame = e => {
            
        //}
        };
    }
</script>
<div class="container">
    <NewPlayer on:addplayer={addPlayer} />
</div>
    
<div class="container">
    {#if players.length === 0}
        <h1>No Players</h1>
    {:else}
        {#each players as player}
            <Player 
                name={player.name} 
                life={player.life} 
                on:removeplayer={removePlayer} 
            />
        {/each}
    {/if}
</div>
