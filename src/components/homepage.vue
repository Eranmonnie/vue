<script setup>
import async from "./async.vue"
import {computed,ref} from "vue"



  
        const name = ref("feranmi")

        const nameallcaps = computed(()=>{
             return name.value.toUpperCase()
        })

        const  namelowcase= computed (()=>{
            return name.value.toLowerCase()
        })
        
        const changename = ()=>{
        name.value = "john"
    }
    

   
</script>

<template>

<h1>{{ name }}</h1>
<button @click="changename">change name</button>

<h1>{{ nameallcaps }}</h1>
<h1>{{ namelowcase }}</h1>
</template>