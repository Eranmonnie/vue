<script>
export default{
    props:["favcharlist", "newcharacter", "favouritecharacter"],
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
    }
}
</script>

<template>
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