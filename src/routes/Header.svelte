<script>
  let src ='/favicon.png'
  
</script>

<header>
  <img src={src} alt="" /> 
 <!-- <img {src} alt="" />⭐️ shorthand attributes  -->

    <h3>Svelte Intro</h3>
</header>

<style>
    header {
         border-bottom: 2px solid #eee;
         display: flex;
         align-items: center;
         justify-content: space-between;
    }
    img {
      height: 2.5rem;
    }

   h3 {
     color: orangered;
   } 
</style>