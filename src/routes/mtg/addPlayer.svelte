<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let player = {
        name: "",
        points: 0
    };
    const onSubmit = e => {
        e.preventDefault();
        dispatch("addplayer", player);
        player = {
            name: "",
            points: 20
        };
    };
</script>

<form on:submit={onSubmit} class="grid-3">
    <input type="text" placeholder="Player Name" bind:value={player.name} />
    <input type="number" placeholder="Player Life" bind:value={player.life} />
    <input type="submit" class="btn btn-primary" value="Add Player" />
</form>
