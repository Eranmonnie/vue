<script>
import homepage from "./components/homepage.vue"
export default{

  components:{
    homepage,
  },


}

</script>

<template>
  <nav class="navbar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
<homepage />
  
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
