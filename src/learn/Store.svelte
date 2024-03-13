<script>
	// import { onDestroy } from "svelte";
	import { count } from "../routes/stores";

    /**
     * ⭐️ store
     *  
    */
//    let num 

//    const unsubscribe =count.subscribe((n)=>{
//     num = n
//    })

//    onDestroy(unsubscribe)
   
</script>

<div>
    <h2>Store</h2>

    <button on:click={()=> count.update(n=>n-1)}>-</button>
    {$count}
    <button on:click={count.increment}>+</button>
    <input bind:value={$count} /><button>Add</button>

</div>


<style>
    
</style>