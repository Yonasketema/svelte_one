<script>
	import Events from "./Events.svelte";

 
    /**
     * ⭐️ Props - to pass data from one component down to its children with 'props' 
     * in Svelte use export keyword 
     * 
     *⭐️ Spread props {...props}
    */

      export let title  
    //   export let title = "specify default values"  
</script>

<Events on:message/>

{#if title.length > 3}
<h1>{title}</h1>
{/if}

 