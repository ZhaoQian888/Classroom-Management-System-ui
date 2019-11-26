<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router >
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/classroom">教室详情</el-menu-item>
  <el-menu-item index="/classroom/roomregister">教室预定</el-menu-item>
  <el-menu-item index="/about">关于我们</el-menu-item>
  <el-menu-item  left=20px index="4"><a href="" target="_blank">我的信息</a></el-menu-item>
</el-menu>
</template>


<script>
export default {
   name:'NavBar',
};
</script>

<style scoped lang="scss">

</style>