<script>
export default{

data:()=>{

return{

  name : "ajala feranmi",
  increamm:1,
  val:0,
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

  increment(){
    this.val += this.increamm
  } 


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

<h1>Counter</h1>
<h1>{{ val }}</h1>
<button @click="increment">Increment</button>
<label for="incremantammount"> Increment by:</label>
<input type="number" v-model="increamm">


</template>



