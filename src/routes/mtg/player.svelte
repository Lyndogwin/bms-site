<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    
    export let name;
    export let life;
    const addLife = () => (life += 1)
    const subLife = () => (life -= 1)
    const onDelete = () => dispatch("removeplayer", name);
</script>

<div class="card">
    <h1>{name}</h1>
    <h3>{life}</h3>
    <button class="btn" on:click={addLife}>+1</button>
    {#if life != 0}
        <button class="btn btn-dark" on:click={subLife}>-1</button>
    {/if}
    <button class="btn btn-danger btn-sm" on:click={onDelete}>x</button> 
</div>
