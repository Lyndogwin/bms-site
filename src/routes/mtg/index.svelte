<script>
    let name = "Player1"
    let life = 20
    const addLife = () => (life += 1)
    const subLife = () => (life -= 1)
</script>

<div class="container">
    <div class="card">
        <h1>{name}</h1>
        <h3>{life}</h3>
        <button class="btn" on:click={addLife}>+1</button>
        <button class="btn" on:click={subLife}>-1</button>
    </div>
</div>
