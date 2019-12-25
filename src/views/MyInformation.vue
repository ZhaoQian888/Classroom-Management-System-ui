<template>

<div>
  <el-container>
  <el-header><NavBar></NavBar></el-header>
</el-container>
<b-container>
    <b-card header="个人信息表" style="margin: 50px auto">
      <b-list-group v-for="(value, key) in info" v-bind:key="(value,key)" >
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
const axios = require('axios');
  export default {
    name:'myinformation',
    components:{
      NavBar,
    },
    data() {
      return {
        info:null,       
      }
    },
    //get请求返回个人信息，去除历史信息
    mounted () {
    axios
      .get('/gin/info/myinfo')
      .then(response => {
        delete response.data.data.History
        this.info = response.data.data
      })
    },
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