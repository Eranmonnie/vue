<script>
export default{
data:()=>{
return{

    callback:[1,2,3],

    }
    },

methods:{
    async getdata(){
    this.callback = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(response=>{
        return response.json()
    })
    },
},

created(){

    this.getdata()

},

}
</script>

<template>

<h1>{{ callback }}</h1>


</template>