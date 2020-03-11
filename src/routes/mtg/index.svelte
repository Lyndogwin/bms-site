<script>
    import Player from "./player.svelte"
    import NewPlayer from "./addPlayer.svelte"
    import * as index from "./index.js"
    let state = "";
    let players = [
        {
            name:"Player1",
            life:20,
            tokens: [{
                name:"TOKEN TABS: ",
                color:"",
                power:null,
                tough:null,
                ability:"None",
                tapped: false,
                id: 0
            }]
        },
        {
            name:"Player2",
            life:20,
            tokens:  [{
                name:"TOKEN TABS: ",
                color:"",
                power:null,
                tough:null,
                ability:"None",
                tapped: false,
                id: 0

            }]
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
        console.log("Saving game");
        state = JSON.stringify(players);
        localStorage.setItem("state",state);
        // for(const value of players){console.log(value.tokens);};
        // players.forEach = player => {
        //     // ~psedocode~
        //     // player.saveGame = e => {
            
        //     // }

        // };
    };

    const loadGame = () => {
        if(localStorage.getItem("state")) {
            console.log("Attempting to load game");
            state = localStorage.getItem("state");
            players = JSON.parse(state);
        }
    };

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
                tokens={player.tokens}
                on:removeplayer={removePlayer} 
            />
        {/each}
    {/if}
</div>

<div>
    
    <button class="btn btn-primary" on:click={saveGame}>Save game</button>
    <button class="btn btn-primary" on:click={loadGame}>Load game</button>
</div>
