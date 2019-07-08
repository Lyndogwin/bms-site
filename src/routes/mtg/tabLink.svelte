<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let name;
    export let color;
    export let id;
    const onOpen = () => dispatch("opentoken", id);
</script>

<button class="btn btn-link {color}" disabled={!id} on:click={onOpen}>{name}</button>
