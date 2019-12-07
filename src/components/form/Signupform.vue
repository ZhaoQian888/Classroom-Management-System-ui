<template>
<div class="signupform">
  <h1 text-align:center>立即注册</h1>
  <el-form ref="form" :model="sizeform" label-width="80px" width="600px" height="600px">
  
  
  <el-form-item label="用户名">
    <el-input v-model="form.user_name"></el-input>
  </el-form-item>


  <el-form-item label="密码">
    <el-input v-model="form.password"  type="password" ></el-input>  
  </el-form-item>


  <el-form-item label="确认密码">
    <el-input v-model="form.repassword"  type="password" ></el-input>  
  </el-form-item>


  <el-form-item label="昵称">
    <el-input v-model="form.nickname"></el-input> 
  </el-form-item>


  <el-form-item label="年级">
    <el-input v-model="form.class"></el-input>
  </el-form-item>


  <el-form-item label="邮箱">
    <el-input v-model="form.email"></el-input> 
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即注册</el-button>
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
import signUp  from "@/api/user/signup/"
// const axios=require('axios')
  export default {
      name: 'signupform',
    data() {
      return {
        form:{
          user_name:'',
          password:'',
          nickname:'',
          repassword:'',
          class:'',
          email:'',
        },
      };
    },
    methods: {
      cancel(){
         this.$router.push({path: '/'})
      },
      onSubmit() {
        signUp(this.form).then((res)=>{
          if (res.status>0){
            this.$notify.error({
              title:'注册失败',
              message:res.msg,
            })
          }else{
            this.$notify({
              title:'注册成功',
              message:'您已成为我们的用户,正在为您跳转',
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
    },
  }
</script>

