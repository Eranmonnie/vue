<script>
import Counter from "./components/counter.vue"
export default{
  components:{
    Counter,
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

appendlist(value){
  this.favcharlist.push(value)
},

addtocharacterlist(){
  this.favouritecharacter.push(this.newcharacter)
  this.newcharacter={name:""}
},

removefromcharacterlist(valuee){
  console.log(valuee)
 this.favouritecharacter.pop(valuee)
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


<h1>append list</h1>
<ul>

<li v-for="fav in favouritecharacter">

<p>{{ fav.name }}</P>
<button @click="appendlist(fav.name)">Add</button>
<button @click="removefromcharacterlist(fav)">Remove</button>

</li>
</ul>
<input type="text" v-model="newcharacter.name" @keyup.enter="addtocharacterlist">

<h1>favourite characters</h1>
<h1 v-if="favcharlist.length === 0">No favourite list</h1>
<h1 v-else v-for="characters in favcharlist">{{ characters }}</h1>

</template>



