<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let name;
    const onOpen = () => dispatch("opentoken", name);
</script>

<button class="tablinks" on:click={onOpen}>{name}</button>
