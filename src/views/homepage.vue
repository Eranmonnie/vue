<script setup>
import { newcount } from "@/composables/newcount";
import basecount from "@/components/basecount.vue";
import {computed,ref, watch} from "vue"
import {useRouter} from "vue-router"


        
        const name = ref("feranmi")
        const rout= useRouter()

        const nameallcaps = computed(()=>{
             return name.value.toUpperCase()
        })

        const  namelowcase= computed (()=>{
            return name.value.toLowerCase()
        })
        
        const changename = ()=>{
        name.value = "john"
        }

        watch(newcount, (val)=>{
            if (val>20){
                rout.push("/aboutpage")
            }
        })
    

   
</script>

<template>
<h1>{{ name }}</h1>
<button @click="changename">change name</button>

<h1>{{ nameallcaps }}</h1>
<h1>{{ namelowcase }}</h1>

<basecount />

</template>