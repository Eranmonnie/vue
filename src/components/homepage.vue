<script>
import async from "./async.vue"

export default{

components:{
    async,
}

}
</script>

<template>

<suspense>
    
    <async />

    <template #fallback>
        loading
    </template>

</suspense>

</template>