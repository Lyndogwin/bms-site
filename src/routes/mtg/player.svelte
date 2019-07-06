<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    
    import Token from "./token.svelte"
    import NewToken from "./addToken.svelte"
    import Tablink from "./tabLink.svelte" 
    export let name;
    export let life;
    const addLife = () => (life += 1)
    const subLife = () => (life -= 1)
    const onDelete = () => dispatch("removeplayer", name);
    
    let tokens = [{
        name:"TOKEN TABS: ",
        color:"",
        power:null,
        tough:null,
        ability:"None"
    }];
    let token = tokens[0];

    const addToken = e => {
        const newToken = e.detail;
        tokens = [...tokens, newToken];
    };
    const removeToken = e => { 
        tokens = tokens.filter (token => token.name !== e.detail);
    };
    const openToken = e => {
        token = tokens.filter(t => t.name === e.detail)[0];
        console.log(token);
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
    <button class="btn btn-success" on:click={addLife}>+1</button>
    {#if life > 0}
        <button class="btn btn-dark" on:click={subLife}>-1</button>
    {/if}
    <button class="btn btn-danger btn-sm" on:click={onDelete}>X</button> 
    <div class="container">
        <NewToken on:addtoken={addToken} />
    </div>
    {#if tokens.length < 1}
        <h2>No Tokens Loaded</h2>
    {:else}

        <div class="tabs">
            {#each tokens as temp_token}
                <Tablink
                    name={temp_token.name}
                    color={temp_token.color}
                    on:opentoken={openToken}
                />
            {/each}
        </div>
        {#if (tokens.filter(t => t.name === token.name)[0] !== undefined) && (token.power != null)}
            <div class="tabcontent">
                <Token
                    name={token.name}
                    color={token.color}
                    power={token.power}
                    tough={token.tough}
                    ability={token.ability}
                    on:removetoken={removeToken}
                />
            </div>
        {/if}
    {/if}
</div>
