<script>
	import { tweened } from "svelte/motion";
	import {cubicOut } from "svelte/easing";
	import { fade } from "svelte/transition";
     
    
  /**
   * ⭐️ tweened
   * ⭐️ spring - used for value frequently changing
   * ⭐️ transition directive  -  to make gracefully transitioning elements into and out of the Dom
   * ⭐️ fly
   * ⭐️ in: and out: directive 
   * 
   * 
   * 
   * 
   */

   let isChecked = false

 const progress = tweened(0,{
    duration:400,
    easing:cubicOut
 })
</script>

<div>
    <h3>Motion</h3>

    <progress value={$progress}  />

    <button on:click={()=>progress.set(0)}>0%</button>
    <button on:click={()=>progress.set(.25)}>25%</button>
    <button on:click={()=>progress.set(.5)}>50%</button>
    <button on:click={()=>progress.set(.75)}>75%</button>
    <button on:click={()=>progress.set(1)}>100%</button>


   <div>
    <label>
        <input type=checkbox bind:checked={isChecked}/>
        You have to agree all !!
    
        {#if isChecked}
        <button transition:fade   >Submit</button>
        {/if}
        
     </label> 
   </div>

</div>

<style>
  progress {
    width: 50%;
  }
  button {
    padding: 5px 10px;
     

  }

   
</style>