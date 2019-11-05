<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let player = {
        name: "",
        life: 20,
        tokens: [{
                name:"TOKEN TABS: ",
                color:"",
                power:null,
                tough:null,
                ability:"None",
                tapped: false,
                id: 0
        }]
    };
    const onSubmit = e => {
        e.preventDefault();
        dispatch("addplayer", player);
        player = {
            name: "",
            life: 20,
            tokens: [{
                name:"TOKEN TABS: ",
                color:"",
                power:null,
                tough:null,
                ability:"None",
                tapped: false,
                id: 0
            }]
        };
    };
</script>

<form on:submit={onSubmit} class="grid-3 form-container form-group">
    <input type="text" placeholder="Player Name" bind:value={player.name} />
    <input type="number" placeholder="Player Life" bind:value={player.life} />
    <input type="submit" class="btn btn-primary" value="Add Player" />
</form>
