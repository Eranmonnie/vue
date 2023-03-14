<script>
import homepage from "./components/homepage.vue"
import aboutpage from "./components/aboutbage.vue"
export default{

  components:{
    homepage,
    aboutpage,
  },

data:()=>{
  return{
    name:"homepage"
  }
},

methods:{
  changetohome(){
    this.name = "homepage"
  },
  changetoabout(){
    this.name = "aboutpage"
  },

},

}

</script>

<template>
  <nav class="navbar">
    <ul>
      <li><a href="#" @click="changetohome">Home</a></li>
      <li><a href="#" @click="changetoabout">About</a></li>
    </ul>
  </nav>

<homepage v-if="name === 'homepage'"></homepage>
<aboutpage v-if="name === 'aboutpage'"></aboutpage>

  
</template>


<style>
.navbar{
  border: 1px  solid transparent;
  border-radius: 1em;
  width: 75%;
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 2em;
  background-color: rgb(238, 236, 212);
}
ul{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 2em;
}
a{
  text-decoration: none;
  color: black;
}
</style>
