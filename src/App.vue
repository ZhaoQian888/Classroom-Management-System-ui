<template>
  <div id="app">
     <router-view></router-view>
     <div id="app">

     </div>
  </div>
</template>
<script>


// import NavBar from "@/components/NavBar.vue"
// import side from "./components/fram/sidefram.vue"

export default {
  name:'app',
  components:{
      //  NavBar,
      //  side,
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

</style>