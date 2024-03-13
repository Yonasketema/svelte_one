<script>
    /**
     * Dom events ...
     * inline handlers
     * 
     * ⭐️ Event modifiers
     *     -on:click | once
     *   -modifier can chain together on:click|once|capture={...}
     * 
     * ⭐️ Component Event
     *   -components can also dispatch events by creating event dispatcher
     * 
     * ⭐️ Event forwarding
     *   -unlike Dom event component event don't bubble.to listen these event the intermediate components must forward the event
     * 
     * ⭐️ Event forwarding works for DOM events to 
    */

     import { createEventDispatcher } from "svelte";

     const dispatch = createEventDispatcher()

    function sayHello(){
         dispatch('message',{
            message:"hello !!!"
         })
    }
</script>

<button on:click={sayHello}>
  Hello  EventDispatcher
</button>


<style>
    button {
        background-color: orangered;
        padding: 4px 8px;
        border: none;
    }
</style>