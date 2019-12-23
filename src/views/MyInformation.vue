<template>

<div>
  <el-container>
  <el-header><NavBar></NavBar></el-header>
</el-container>
<b-container>
    <b-card header="个人信息表" style="margin: 50px auto">
      <b-list-group v-for="(value, key) in info" v-bind:key="(value,key)">
        <b-list-group-item>
            <b-row>
              <b-col sm="3">
                <strong>{{key}}</strong>
              </b-col>
              <b-col sm="9">
                {{value}}
              </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-card>

</b-container>

</div>

</template>



<script>
import NavBar from "@/components/NavBar.vue"
import axios from 'axios';
  export default {
    name:'myinformation',
    components:{
      NavBar,
    },
    data() {
      return {
        info: 
          {
            昵称:'wang',
            用户名: '小王',
            邮箱:'19000@pku.edu.cn'
          },
        
      }
    },
    methods :{
      updated(){
        axios.get("/gin/info/myinfo").then(res=>{
          this.info.昵称=res.data.nickname;
          this.info.用户名=res.data.user_name;
          this.info.邮箱=res.data.email;
        })
      }
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