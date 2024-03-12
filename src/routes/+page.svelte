 <script>
   import Reactivity from './Reactivity.svelte';
   import Header from './Header.svelte'
	import Props from './Props.svelte';
	import Logic from './Logic.svelte';
	import Events from './Events.svelte';
	import Bindings from './Bindings.svelte';
	import Store from './Store.svelte';
	import Motion from './Motion.svelte';
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