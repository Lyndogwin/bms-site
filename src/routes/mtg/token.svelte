<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let name;
    export let color;
    export let power;
    export let tough;
    export let ability;
    export let tapped;
    export let id;

    while (tapped) {
       // add dispatch
       console.log("changing state")
    };

    const addPower = () => {
        power += 1;
        onChange();
    };
    const subPower = () => {
        power -= 1;
        onChange();
    };
    const addTough = () => {
        tough += 1;
        onChange();
    };
    const subTough = () => { 
        tough -= 1;
        onChange();
    };

    let tap_detect = false;

    const onDelete = () => dispatch("removetoken", id);

    const onChange = () => dispatch("update", {name:name,
                                               color:color,
                                               power:power,
                                               tough:tough,
                                               ability:ability,
                                               tapped:tapped,
                                               id:id});
</script>


<div class="card {color}">
    <h2>{name}</h2>
    <h3>Color: {color}</h3>
    <label class="switch">
        <input type="checkbox" bind:checked={tapped}>
        <span class="slider round"></span>
    </label>
    <div style="display:none;">
        {#if tapped}
            {tap_detect = true}
            {onChange()}
        {:else}
            {#if tap_detect}
                {onChange()}
                {tap_detect = false}
            {/if}
        {/if}
    </div>
    {#if tapped}
        <p>Tapped</p>
    {:else}
        <p>Not Tapped</p>
    {/if}
    <div class="container">
        <div class="btn-link">
            <h3>Power: {power}</h3>
            <button class="btn btn-success btn-sm" on:click={addPower}>+1p</button>
            <button class="btn btn-dark btn-sm" on:click={subPower}>-1p</button>
        </div>
        <div class="form-group"></div>
        <div class="btn-link">
            <h3>Toughness: {tough}</h3>
            <button class="btn btn-success btn-sm" on:click={addTough}>+1t</button>
            <button class="btn btn-dark btn-sm" on:click={subTough}>-1t</button>
        </div>
        <h3>Abilities: {ability}</h3>
        <button class="btn btn-danger btn-sm" on:click={onDelete}>X</button>
    </div>
</div>
