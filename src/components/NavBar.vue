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
  <el-menu-item index="/about">首页</el-menu-item>
  <el-menu-item index="/classroom">我的课堂</el-menu-item>
  <el-menu-item index="/roomregister">
    我的预定
  </el-menu-item>
  <el-menu-item index="/information">我的信息</el-menu-item>
  <el-menu-item index="login" > 登录</el-menu-item>
    <el-menu-item index="/register" > 注册</el-menu-item>
</el-menu>
  </div>

</template>


<script>
  export default {
    name:'NavBar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    }
  }
</script>