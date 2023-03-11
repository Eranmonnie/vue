<script>
import Counter from "./components/counter.vue"
import list from "./components/list.vue"
import name from "./components/name.vue"
import slotproject from "./components/slotproject.vue"
export default{
  components:{
    Counter,
    list,
    name,
    slotproject,
  },

data:()=>{

return{
  favouritecharacter:[
  {name:"Naruto"},
  {name:"Zuko"},
  {name:"kira"},

  ],
  newcharacter:{name:""},
  favcharlist:[],
  name : "ajala feranmi",
  lists :[
    { 
      namee:"tom",
  skintone:"Black",
favouritefood:"Rice"

},

{ 
      namee:"tom",
  skintone:"Black",
favouritefood:"Rice"

},

{ 
      namee:"tom",
  skintone:"Black",
favouritefood:"Rice"

}],

}},

methods:{
changenameto(){
  this.name =  "new name"
},


},

computed:{

 
}

}


</script>

<template>

  <h1 v-if="name.length %2 === 0">{{ name }}</h1>
  <h1 v-else>name if odd</h1>

  <ul  v-for="list in lists">
    <li>{{ list.namee }}</li>
    <li>{{ list.skintone }}</li>
    <li>{{ list.favouritefood }}</li>
  </ul>

<counter/>

<list v-bind:favouritecharacter="favouritecharacter" v-bind:newcharacter="newcharacter" v-bind:favcharlist="favcharlist" />

<name  :name="name" @changename="changenameto"/>

<slotproject>
  <template v-slot:case>
  hiiiii
  </template>

  <template v-slot:case2>
  hiiiii
  </template>
</slotproject>

</template>



