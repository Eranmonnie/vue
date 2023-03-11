<script>
export default {
    props:{
        name:{
            type:String,
            required:true
        },
    },
    emits:["changename"],
}
</script>

<template>
<h1>{{ name }}</h1>
<button @click="$emit('changename')">Change name</button>
</template>