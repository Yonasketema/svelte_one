<script>
    let num = 1
    let multiple = num * 2
    $: multiple_reactive = num * 2

    function handleClick(){
        num++
    }

    /**
     *⭐️  Reactivity Statement
     * it executing a code whenever anything it referenced inside reactively update
    */
    
    $:console.log(`this log when ${multiple_reactive} update`) //

    $:{ // group statements
        console.log(`this log when ${multiple_reactive} update`)
        console.log(`this will also be logged when num update`)
    }

    /**
     *⭐️ Updating arrays and object
     * svelte reactivity triggered by assignment 
     * using push and splice won't cause update
     * 
     * then use an immutable data structure instead
     * 
     *  
    */
    
    let fruits = ["🍇️", "🍊️","🍎️","🍐️","🥑️","🍍️"]

    function pushFruit(){
        fruits.push('🍌️') // it added to the array but not viable on dom
    } 
    function addFruit(){
        fruits=[...fruits,"🍌️"] // add and also update the dom 
    }

</script>


<div>
<p>{num}</p>

<p>{multiple}-  not reactive</p>
<p>{multiple_reactive}- reactive declaration with $: (make a derived state)</p>

</div>

<button on:click={handleClick}>Increment num</button>

<p>{fruits.join(" ")}</p>
<button on:click={pushFruit}>Push Fruit</button>
<button on:click={addFruit}>add Fruit</button>

<style>
    div {
        display: flex;
        gap:2rem;
    }
</style>