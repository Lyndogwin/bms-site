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
    
    var rand = () => {
        return Math.random().toString(36).substr(2); // remove `0.`
    };

    var id_gen = () => {
        return rand() + rand(); // to make it longer
    };

    let tokens = [{
        name:"TOKEN TABS: ",
        color:"",
        power:null,
        tough:null,
        ability:"None",
        id: 0
    }];
    let token = tokens[0];

    const addToken = e => {
        console.log(e.detail[0]);
        for(var i = 0; i < e.detail[1]; i++){
            var newToken = e.detail[0];
            tokens = [...tokens, {name:newToken.name,
                                  color:newToken.color,
                                  power:newToken.power,
                                  tough:newToken.tough,
                                  ability:newToken.ability,
                                  id:id_gen()}] //itteration issue
            console.log(tokens);
        };
    };
    const removeToken = e => { 
        tokens = tokens.filter (token => token.id !== e.detail);
    };
    const openToken = e => {
        token = tokens.filter(t => t.id === e.detail)[0];
        console.log(token);
    };
    // Staging for game saves
    export let savePlayer = { 
        e_name: name,
        e_life: life,
        e_tokens: tokens,
        e_matchID: id_gen()
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
                    id={temp_token.id}
                    on:opentoken={openToken}
                />
            {/each}
        </div>
        {#if (tokens.filter(t => t.id === token.id)[0] !== undefined) && (token.power != null)}
            <div class="tabcontent">
                <Token
                    name={token.name}
                    color={token.color}
                    power={token.power}
                    tough={token.tough}
                    ability={token.ability}
                    id={token.id}
                    on:removetoken={removeToken}
                />
            </div>
        {/if}
    {/if}
</div>
