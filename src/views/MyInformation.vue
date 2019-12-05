<template>

<div>
  <el-container>
  <el-header><NavBar></NavBar></el-header>
</el-container>
 <el-container>
    <el-main>
     
    </el-main>
  </el-container>

</div>

</template>



<script>
import NavBar from "@/components/NavBar.vue"
  export default {
    name:'myinformation',
    components:{
      NavBar,
    }
  }
</script>




<style>
  .el-header, .el-footer {
    background-color:#545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>