<script>
import { newcount } from '@/composables/newcount'
import {wow} from "../composables/countstore"
export default{
  
  setup(){

    const setwow = wow()

    return{
      newcount,
      setwow
    }
  },

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
    this.newcount+= 10
    }
    },


}
</script>

<template>
<h1>{{countvall}}</h1>
<h1>{{ newcount }}</h1>
<h1>{{ val }}</h1>

<button @click="increment" :class="$style.button">Increment</button>

<label for="incremantammount"> Increment by:</label>
<input type="number" v-model="increamm">
</template>

<style module >
.button {
  background-color: aqua;
}


</style>