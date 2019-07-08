<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let copies = 1;

    let token = {
        name: "",
        color: "Colorless",
        power: null,
        tough: null,
        ability: "",
        tapped: false,
        id: 0 
    };
    const onSubmit = e => {
        e.preventDefault();

        dispatch("addtoken",[token,copies]);
        token = {
            name: "",
            color: "Colorless",
            power: null,
            tough: null,
            ability: "",
            tapped: false,
            id: 0
        };
        copies = 1;
    };
    let colors = [{ id: 1, text: "Black"},
                  { id: 2, text: "White"},
                  { id: 3, text: "Red"},
                  { id: 4, text: "Green"},
                  { id: 5, text: "Blue"},
                  { id: 6, text: "Colorless"}];
</script>

<style>
    select{
         
    }
</style>
<form on:submit={onSubmit} class="grid-3 form-container form-group">
    <input type="text" placeholder="Token Name" bind:value={token.name} />
    <select type="text" class="form-group bg-white" bind:value={token.color} >
		{#each colors as c_choice}
            <option selected="selected">
				{c_choice.text}
			</option>
		{/each}
	</select>
    <input type="number" placeholder="Power" bind:value={token.power} />
    <input type="number" placeholder="Toughnes" bind:value={token.tough} />
    <input type="text" placeholder="Abilities" bind:value={token.ability} />
    <input type="number" placeholder="Copies" bind:value={copies} />
    <input type="submit" class="btn btn-primary" value="Add Token" />
</form>
