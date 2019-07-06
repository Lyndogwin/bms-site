<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let name;
    export let color;
    const onOpen = () => dispatch("opentoken", name);
</script>

<button class="btn {color}" on:click={onOpen}>{name}</button>
