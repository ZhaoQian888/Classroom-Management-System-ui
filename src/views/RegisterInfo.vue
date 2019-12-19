<template>
   <div>
      <el-container>
  <el-header><NavBar></NavBar></el-header>

</el-container>

<b-container>
        <div style="margin-top: 100px">
        <b-table striped hover :items="items"></b-table>
      </div>
</b-container>

   </div>

</template>




<script>
import NavBar from "@/components/NavBar.vue"
export default{
   name:'registerinfo',
   components:{
      NavBar,
   },
   data() {
      return {
        items: [
          {教室号:'3202', 使用者: '小王', 学号:'61273669',预订时间: '2019-12-01 19：00', 开始使用时间: '2019-12-02 19：00',结束使用时间:'2019-12-02 21：00',预约状态:'审核中'},
          {教室号:'3202', 使用者: '小王', 学号:'61273669',预订时间: '2019-12-01 19：00', 开始使用时间: '2019-12-02 19：00',结束使用时间:'2019-12-02 21：00',预约状态:'审核中'},
          {教室号:'3202', 使用者: '小王', 学号:'61273669',预订时间: '2019-12-01 19：00', 开始使用时间: '2019-12-02 19：00',结束使用时间:'2019-12-02 21：00',预约状态:'预约成功'},
          {教室号:'3202', 使用者: '小王', 学号:'61273669',预订时间: '2019-12-01 19：00', 开始使用时间: '2019-12-02 19：00',结束使用时间:'2019-12-02 21：00',预约状态:'预约成功'},
        ]
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