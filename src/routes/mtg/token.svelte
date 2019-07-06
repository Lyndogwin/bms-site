<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let name;
    export let color;
    export let power;
    export let tough;
    export let ability;
    
    const addPower = () => (power += 1);
    const subPower = () => (power -= 1);
    const addTough = () => (tough += 1);
    const subTough = () => (tough -= 1);

    const onDelete = () => dispatch("removetoken", name);
</script>


<div class="card {color}">
    <h2>{name}</h2>
    <h3>Color: {color}</h3>
    <div class="container grid-2">
        <div class="btn-block">
            <button class="btn btn-success btn-sm" on:click={addPower}>+1p</button>
            <h3>Power: {power}</h3>
            <button class="btn btn-dark btn-sm" on:click={subPower}>-1p</button>
        </div>
        <div class="btn-block">
            <button class="btn btn-success btn-sm" on:click={addTough}>+1t</button>
            <h3>Toughness: {tough}</h3>
            <button class="btn btn-dark btn-sm" on:click={subTough}>-1t</button>
        </div>
    </div>
        <h3>Abilities: {ability}</h3>
        <button class="btn btn-danger btn-sm" on:click={onDelete}>X</button>
</div>
