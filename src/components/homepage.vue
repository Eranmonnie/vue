<script>
export default{

   async setup(){

    const name = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((response)=>{
    return response.json() })

    return{
        name
    }
},

created(){
    console.log(this.name);
}

}
</script>

<template>

<h1>{{ name }}</h1>

</template>