<template>
    <b-card class="mt-3" header="进行预约">
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="教学楼号:" label-for="input-1">
            <b-form-select
              id="input-1"
              :options="buildings"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group id="input-group-2" label="教室号:" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.room_number"
              type="number"
              :options="rooms"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="日期:" label-for="input-2">
            <b-form-input
              id="input-2"
              type='date'
              v-model="form.use_time"
              required
            ></b-form-input>
          </b-form-group>

        <b-form-group id="input-group-4" label="时间段：">
          <b-form-radio v-model="form.use_time_zone" name="some-radios" type="number" value="1" >上午</b-form-radio>
          <b-form-radio v-model="form.use_time_zone" name="some-radios" type="number" value="2" >下午</b-form-radio>
          <b-form-radio v-model="form.use_time_zone" name="some-radios" type="number" value="3" >晚上</b-form-radio>
        </b-form-group>
       <!-- <div class="mt-3">您选择的是: <strong>{{ form.use_time_zone }}</strong></div> -->

          <b-form-group id="input-group-5" label="教室使用者:" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.room_user"
              required
              placeholder="教室使用者的名字"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-6" label="用户名:" label-for="input-6">
            <b-form-input
              id="input-6"
              v-model="form.user_name"
              required
              placeholder="请输入用户名"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">提交</b-button>
          <b-button type="reset" variant="danger">清空</b-button>
        </b-form>
      </div>      
    </b-card>

</template>

<script>
const axios = require('axios');
  export default {
    name:'Forms',
    data() {
      return {
        form: {
          room_number:3205,
          use_time_zone: 1,
          room_user: '',
          order_time: new Date().toISOString().slice(0,10), //获取当前时间戳
          use_time: '',
          user_name:'',
        },
        buildings:[{ text : '请选择一个教学楼', value: null},'2号楼','3号楼','4号楼'],
        rooms: [{ text: '请选择一个教室', value: null },3201,3202,3203,3204,3205,3206,3301,3302,3303,3304,3305,3306],
        days: [{ text: '请选择一天', value: null },'星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
        show: true,
        selected: ''
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        //此处应修改为提交post请求
        //alert(JSON.stringify(this.form))
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios({
          method: 'post',
          url: '/gin/order/classroom',
          data: this.form,
          transformRequest: [
              function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                ret = ret.substring(0, ret.lastIndexOf('&'));
                return ret
              }
            ],
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
          if(response.data.msg == "教室可以使用"){
            alert("预订成功");
            //清空预订信息
          } else {
            alert(response.data.msg);
          }


          })
          .catch(function (error) {
            alert(error);
          });
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.room_number = ''
        this.form.use_time_zone = ''
        this.form.room_user = ''
        this.form.order_time = ''
        this.form.use_time = ''
        this.form.user_name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
  }
</script>