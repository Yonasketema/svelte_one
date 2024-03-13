 <script>
   import Reactivity from '../../learn/Reactivity.svelte';
   import Header from '../../learn/Header.svelte'
	import Props from '../../learn/Props.svelte';
	import Logic from '../../learn/Logic.svelte';
	import Events from '../../learn/Events.svelte';
	import Bindings from '../../learn/Bindings.svelte';
	import Store from '../../learn/Store.svelte';
	import Motion from '../../learn/Motion.svelte';



   let name = ' <u>svelte</u>'
    
 </script>
 
 <Header/>

 <h1>Hello  {@html name.toUpperCase()}</h1>
 
 <Reactivity/>

 <Props  title="Svelte props" on:message={(e)=>alert(e.detail.message)}/>
  
 <Logic/>

 <Events on:message={(e)=>alert(e.detail.message)}/>


 <Bindings/>  


 <Store/>

 <Motion/>

 
 <style>
    /* ⭐️ these are scoped to the component */
    h1{
       color: limegreen;
       font-family:'Courier New', Courier, monospace, cursive;
       font-size: 2em;
    }

 </style>