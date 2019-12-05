<template>
    <div id='register'>
  
 <el-container>
    <el-main>
      <signupform></signupform>
    </el-main>
  </el-container>
    
    </div>
</template>


<script>
import signupform from '@/components/form/Signupform.vue'
export default {
    name:'register',
    components:{
      signupform,
    },
}
</script>