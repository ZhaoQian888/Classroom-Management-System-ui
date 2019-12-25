<template>
<div class="signinform">
  <H3>立即登录</H3>
  <el-form ref="form" :model="sizeform" label-width="80px" width="600px" height="600px">
  
  
  <el-form-item label="用户名">
    <el-input v-model="form.user_name"></el-input>
  </el-form-item>


  <el-form-item label="密码">
    <el-input v-model="form.password"  type="password" ></el-input>  
  </el-form-item>




  <el-form-item>
    <el-button type="primary" @click="login">注册新帐号</el-button>
    <el-button type="primary" @click="onSubmit">立即登录</el-button>
    <el-button @click="cancel">取消</el-button>
  </el-form-item>

</el-form>
</div>
    
</template>

<style scoped>
.signupform{
  width: 400px;
  height: 400px;
}
</style>


<script>
import signIn  from "@/api/user/signin/"
// import { setTimeout } from 'timers';
// const axios=require('axios')
  export default {
      name: 'signinform',
    data() {
      return {
        form:{
          user_name:'',
          password:'',
        },
      };
    },
    methods: {
      cancel(){
        this.$router.push({path: '/'})
      },
      onSubmit() {
        signIn(this.form).then((res)=>{
          if (res.status>0){
            this.$notify.error({
              title:'登录失败',
              message:res.msg,
              // type:'fail',
            })
          }else{
            this.$notify({
              title:'登录成功',
              message:'即将为您跳转',
              type:'success',
            })
      
            this.$router.push({path: '/'})
            
          }
        }).catch((error)=>{
          this.$notify.error({
            title:'网络错误或服务器宕机',
            message:error,
          });
        });
      },
      login(){
        this.$router.push({path: '/register'})
      },
    },

  }
</script>
