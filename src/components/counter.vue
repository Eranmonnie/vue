<script>
export default{

data:()=>{

    return{
        increamm:1,
        val:0,
    }},

    computed:{

    countvall(){
    if (this.val > 10){
      return "counter very long"
    } 

    else{
      return "counter"
    }}

    },

    methods:{

    increment(){
    this.val += this.increamm
    }
    },


}
</script>

<template>
<h1>{{countvall}}</h1>

<h1>{{ val }}</h1>
<button @click="increment">Increment</button>
<label for="incremantammount"> Increment by:</label>
<input type="number" v-model="increamm">
</template>
