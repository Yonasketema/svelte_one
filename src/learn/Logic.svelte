<script>
      /**
       *⭐️ Else-if blocks
       * # character is block opening tag
       * / character  is block closing tag
       *  : character as in {:else}   is block continuation tag
       * 
       * 
       * ⭐️ Each Blocks
       *    - listing data
       *     
       * ⭐️ await blocks // Promise 
       */ 

    
      let num = 0

      let movies = [
        {
        title:"novel evil",
        year:"2016"
      },
        {
        title:"adwa ",
        year:"2025"
      },
        {
        title:"zemene mesafnit series",
        year:"2020-2025"
      },
    ]

      function incrementNum(){
        num +=1
      }

      const promise = (time) =>new Promise((res)=>{
        setTimeout(()=>res(1),time)
      })

</script>

<button on:click={incrementNum}>num+</button>
{#if num > 7}
  <small>num {num}</small>
  {:else}
  <small>num less than 7 </small>
{/if}


{#each movies as movie  (movie.title)}
    <div>
        <p>{movie.title}</p>
        <small>{movie.year}</small>
    </div>
{/each}

{#await promise(12)}
  <p>...Loading</p>
{:then data}
 <p>{"DONE !!"}</p>
{:catch error}
   <p>{error}</p>

{/await}

<!-- {#await Promise then data}
 <p>{data}</p>
 
{/await} -->


<style>
    p,div {
        padding: 0;
         margin: 0;
    }
   
    div {
        display: flex;
         align-items: center;
         justify-content: space-between;
         width: 21rem;
         border-bottom: 1px solid red;
         padding: .2rem;
    }
</style>