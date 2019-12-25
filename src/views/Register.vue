<template>
    <div id='register'>
  <el-container>
  <el-header><NavBar></NavBar></el-header>
</el-container>
  
 <el-container>
    <el-main>
      <div class ="ds">
          <signupform></signupform>
      </div>
     
    </el-main>
  </el-container>
    
    </div>
</template>

<style scoped>
.ds{
  height:800px;
  width :500px;
  margin: 0 auto;
  border: 1px ;

}
</style>



<script>
import NavBar from "@/components/NavBar.vue"
import signupform from '@/components/form/Signupform.vue'
export default {
    name:'register',
    components:{
      signupform,
      NavBar
    },
}
</script>