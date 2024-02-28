 <script>
    import Reactivity from './Reactivity.svelte';
    import Header from './Header.svelte'
	import Props from './Props.svelte';
	import Logic from './Logic.svelte';
    let name = ' <u>svelte</u>'
    
 </script>
 
 <Header/>

 <h1>Hello  {@html name.toUpperCase()}</h1>
 
 <Reactivity/>

 <Props  title="Svelte props"/>
  
 <Logic/>

 <style>
    /* ⭐️ these are scoped to the component */
    h1{
       color: limegreen;
       font-family:'Courier New', Courier, monospace, cursive;
       font-size: 2em;
    }

 </style>