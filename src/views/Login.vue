<template>
    <div id='login'>
  
 <el-container>
    <el-main>
      <div class="ds">
        <signinform></signinform>
      </div>
     
    </el-main>
  </el-container>
    
    </div>
</template>


<script>
import signinform from '@/components/form/Signinform.vue'
export default {
    name:'login',
    components:{
      signinform,
    },
}
</script>

<style>
.ds{
  height:800px;
  width :500px;
  margin: 0 auto;
  border: 1px ;

}

  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
 
</style>