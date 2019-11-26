<template>
<div class="signupform">
  <H3>立即注册</H3>
  <el-form ref="form" :model="sizeform" label-width="80px" width="600px" height="600px">
  <el-form-item label="手机号">
    <el-input v-model="form.name"></el-input>
    
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.name"></el-input>
    
  </el-form-item>
   <el-form-item label="确认密码">
    <el-input v-model="form.name"></el-input>
    
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="onSubmit">立即注册</el-button>
    <el-button>取消</el-button>
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
// import * as API from "@api/user/signup/"
// const axios=require('axios')
  export default {
      name: 'signupform',
    data() {
      return {
        form: {
          name: '',
          password:'',
          repassword:'',
        }
      }
    },
    methods: {
      onSubmit() {
        alert('submit!');
      }
    }
  }
</script>

