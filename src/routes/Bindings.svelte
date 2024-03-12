<script>
    /**
     * data flow in svelte is top down
     * 
     *⭐️ Group binding 
     *  - type='radio' or type='checkbox relating the same value bind:group along with the value attribute
     * checkbox input in same group form array of selected value
     * ⭐️ select multiple 
     *      <select multiple bind:value={}>
     *        <option> .. </option>
     *       </select>
    
     */
   let name = ''
    let isChecked = false
    let selectedMovie = ''

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
    let selected = movies[0].title
</script>

<div>
 <h4>  binding  </h4>
 
 <p>{name}</p>
 <!-- it keep the value of the input and the value of name variable in sync. -->
<input placeholder="name.." bind:value={name}> 
<!-- <input placeholder="name.." value={name} on:input={(e)=> name=e.target.value}/> -->

 <!-- ⭐️ checkbox input -->

 <label>
    <input type=checkbox bind:checked={isChecked}/>
    You have to agree all !!

    <button disabled={!isChecked} >Submit</button>
 </label>
 <!-- ⭐️ Group binding-->

 <label>
    <select  bind:value={selected}>
        {#each movies as movie (movie.year) }
            <option value={movie.title}>{movie.title}</option>
        {/each}
    
    </select>
    <b>{selected}</b>
     
 </label>
   
 

 <!-- ⭐️ select binding -->

 <label>
    <label  >
        {#each movies as movie (movie.year) }
            <input type="radio" value={movie.title}
            name="movies"
            bind:group={selectedMovie}/>
            {movie.title}
            
        {/each}
    <b>{selectedMovie}</b>
       
    </label>
     
 </label>
   
</div>


<style>
    div {
        margin: 2rem 0;
    }
    label{
        display: block;
    }
</style>