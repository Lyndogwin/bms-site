<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    
    import Token from "./token.svelte"
    import NewToken from "./addToken.svelte"
    
    export let name;
    export let life;
    const addLife = () => (life += 1)
    const subLife = () => (life -= 1)
    const onDelete = () => dispatch("removeplayer", name);
    let tokens = [
        {
            name: "token1",
            color: "Black",
            power: 4,
            tough: 4,
            ability: "flying"
        },
        {
            name: "token2",
            color: "Blue",
            power: 4,
            tough: 4,
            ability: "haste"
        }
    ]
    const addToken = e => {
        const newToken = e.detail;
        tokens = [...tokens, newToken];
    };
    const removeToken = e => { 
        tokens = tokens.filter (token => token.name !== e.detail);
    };
    // Staging for game saves
    export let savePlayer = { 
        e_name: name,
        e_life: life,
        e_tokens: tokens
    }
</script>

<div class="card">
    <h1>{name}</h1>
    <h3>{life}</h3>
    <button class="btn" on:click={addLife}>+1</button>
    {#if life > 0}
        <button class="btn btn-dark" on:click={subLife}>-1</button>
    {/if}
    <button class="btn btn-danger btn-sm" on:click={onDelete}>X</button> 
    <div class="container">
        <NewToken on:addtoken={addToken} />
    </div>
    <div class="container grid-2">
        {#if tokens.length < 1}
            <h2> No Tokens Loaded</h2>
        {:else}
            {#each tokens as token}
                <Token 
                    name={token.name}
                    color={token.color}
                    power={token.power}
                    tough={token.tough}
                    ability={token.ability}
                    on:removetoken={removeToken}
                />
            {/each}
        {/if}
    </div>
</div>
