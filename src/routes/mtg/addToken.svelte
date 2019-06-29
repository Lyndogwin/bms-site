<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let token = {
        name: "Standard",
        color: "Colorless",
        power: 0,
        tough: 1,
        ability: "none"
    };
    const onSubmit = e => {
        e.preventDefault();
        dispatch("addtoken",token);
        token = {
            name: "",
            color: "",
            power: 0,
            tough: 0,
            ability: ""
        };
    };
</script>

<form on:submit={onSubmit} class="grid-3">
    <input type="text" placeholder="Token Name" bind:value={token.name} />
    <input type="text" placeholder="Color" bind:value={token.color} />
    <input type="number" placeholder="Power" bind:value={token.power} />
    <input type="number" placeholder="Toughnes" bind:value={token.tough} />
    <input type="text" placeholder="Abilities" bind:value={token.ability} />
    <input type="submit" class="btn btn-primary" value="Add Token" />
</form>
