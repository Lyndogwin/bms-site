<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let player = {
        name: "Player1",
        life: 0
    };
    const onSubmit = e => {
        e.preventDefault();
        dispatch("addplayer", player);
        player = {
            name: "",
            life: 20
        };
    };
</script>

<form on:submit={onSubmit} class="grid-3">
    <input type="text" placeholder="Player Name" bind:value={player.name} />
    <input type="number" placeholder="Player Life" bind:value={player.life} />
    <input type="submit" class="btn btn-primary" value="Add Player" />
</form>
