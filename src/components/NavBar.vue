<template>
  <div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  router>
  <!-- //更改了首页 -->
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/roomregister">
    预约教室
  </el-menu-item>
  <el-menu-item index="/classroom">教室信息</el-menu-item>
  <el-menu-item index="/registerinfo">
    我的预定
  </el-menu-item>
  <el-menu-item style="float:right" index="/information">我的信息</el-menu-item>
  <el-menu-item  style="float:right" index="login" v-if="islogin" id= "login"> 登录</el-menu-item>
  <el-menu-item style="float:right" index="/register" v-if="islogin" id ="register" > 注册</el-menu-item>
  <el-menu-item  style="float:right" index="login" v-if="!islogin" id= "exit"  @click="onExit"> 退出登录</el-menu-item>
</el-menu>
  </div>

</template>


<script>
import axios from 'axios';
  export default {
    name:'NavBar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // }
      onExit() {
        axios
        .get('/gin/user/quit')
        .then(
            function (response) {
                if(response.status == 200){
                    alert("退出成功");
                    //window.location.href = '/login';
                } else {
                    alert("退出失败")
                }
        }
        )

      }
    }
  }
</script>