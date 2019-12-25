<template>
  <div class="about">
    <el-container>
  <el-header><NavBar></NavBar></el-header>
</el-container>

<b-container>
  <div style="margin-top: 100px" id="classroom">
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab v-for="item in cs" v-bind:key="item" v-bind:title="item.RoomNumber"><b-card-text>
          <b-card header="教室信息表" style="margin: 10px auto">
            <b-list-group >
              <b-list-group-item>
                  <b-row>
                    <b-col sm="3">
                      <strong>教室楼号</strong>
                    </b-col>
                    <b-col sm="9">
                      {{item.BuildingRefer}}
                    </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item>
                  <b-row>
                    <b-col sm="3">
                      <strong>楼层</strong>
                    </b-col>
                    <b-col sm="9">
                      {{item.Floor}}
                    </b-col>
                </b-row>
              </b-list-group-item>
              <b-list-group-item>
                  <b-row>
                    <b-col sm="3">
                      <strong>教室名</strong>
                    </b-col>
                    <b-col sm="9">
                      {{item.RoomNumber}}
                    </b-col>
                </b-row>
              </b-list-group-item>                            
              <b-list-group-item>
                  <b-row>
                    <b-col sm="3">
                      <strong>当前教室状态</strong>
                    </b-col>
                    <b-col sm="9">
                      <span v-if="rs[item.ID]">已占用</span>
                      <span v-else>空闲 </span>
                    </b-col>
                </b-row>
              </b-list-group-item>                
            
            </b-list-group>
        </b-card>
          
        </b-card-text></b-tab>
      </b-tabs>
    </b-card>
  </div>
</b-container>
  </div>
</template>
<script>
// import side from "@/components/fram/sidefram.vue"
// import card from "@/components/card/Card.vue"
import NavBar from "@/components/NavBar.vue"
const axios = require('axios');
export default {
  name: 'classroom',
  components: {
       NavBar,
      
  },
  data() {
    return {
      cs:null,
      rs:null,
      classrooms:[3201,3202,3203,3204,3205,3206,3301,3302,3303,3304,3305,3306],
      stickyHeader: true,
      noCollapse: false,
    }
  },
      //get请求返回教室信息
    mounted () {
    axios
      .get('/gin/info/roominfo')
      .then(response => {
        this.cs = response.data.data.cs,
        this.rs = response.data.data.rs
        //alert(JSON.stringify(this.rs))
      })
    },
    method: {
      status: function (rsItem) {
            if(rsItem.Status == 1){
              return "已占用"
            } else {
              return "空闲"
            }
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