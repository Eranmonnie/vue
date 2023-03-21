<script>

export default{

  components:{
   
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
  
},

}

</script>

<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/aboutpage">About</router-link></li>
      <li><router-link to="/counter">Counter</router-link></li>
    </ul>
  </nav>


  <Suspense>

    <router-view />
    
  </Suspense>

  


</template>


<style>
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

