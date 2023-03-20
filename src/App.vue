<script>
import homepage from "./components/homepage.vue"
import aboutpage from "./components/aboutbage.vue"
import counterpage from "./components/counter.vue"
export default{

  components:{
    homepage,
    aboutpage,
    counterpage,
  },

data:()=>{
  return{
    name:"homepage"
  }
},

computed:{
  displaypage(){
    return this.name
  }
},

methods:{
  changetohome(){
    this.name = "homepage"
  },
  changetoabout(){
    this.name = "aboutpage"
  },
  changetocounter(){
    this.name = "counterpage"
  },

},

}

</script>

<template>
  <nav class="navbar">
    <ul>
      <li><a href="#" @click="changetohome">Home</a></li>
      <li><a href="#" @click="changetoabout">About</a></li>
      <li><a href="#" @click="changetocounter">Counter</a></li>
    </ul>
  </nav>



  <component :is="displaypage" />


</template>


<style scoped>
html{
  background-color: papayawhip;
}
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

