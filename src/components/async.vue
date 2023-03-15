<script>
export default{
 async setup(){

    const pokea = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(response=>{
        return response.json()
    })

    return{
        pokea,
    }
},

created(){

    console.log (this.pokea)
},

}
</script>

<template>

<h1>{{ pokea }}</h1>


</template>