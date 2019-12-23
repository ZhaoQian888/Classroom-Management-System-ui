<template>
    <b-card class="mt-3" header="进行预约">
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="教学楼号:" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.building"
              :options="buildings"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group id="input-group-2" label="教室号:" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.room"
              :options="rooms"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-3" label="日期:" label-for="input-2">
            <b-form-input
              id="input-2"
              type='date'
              v-model="form.date"
              required
            ></b-form-input>
          </b-form-group>

        <b-form-group id="input-group-4" label="时间段：">
          <b-form-radio v-model="form.period" name="some-radios" value="上午">上午</b-form-radio>
          <b-form-radio v-model="form.period" name="some-radios" value="下午">下午</b-form-radio>
          <b-form-radio v-model="form.period" name="some-radios" value="晚上">晚上</b-form-radio>
        </b-form-group>
        <div class="mt-3">您选择的是: <strong>{{ form.period }}</strong></div>

          <b-form-group
            id="input-group-5"
            label="电话号码:"
            label-for="input-5"
            description="我们不会泄漏您的隐私"
          >
            <b-form-input
              id="input-5"
              v-model="form.phone"
              type="phone"
              required
              placeholder="请输入电话号码"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="您的学号:" label-for="input-5">
            <b-form-input
              id="input-6"
              v-model="form.id"
              required
              placeholder="请输入你的学号"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="教室使用者:" label-for="input-6">
            <b-form-input
              id="input-7"
              v-model="form.user"
              required
              placeholder="教室使用者的名字"
            ></b-form-input>
          </b-form-group>


          <b-button type="submit" variant="primary">提交</b-button>
          <b-button type="reset" variant="danger">清空</b-button>
        </b-form>
      </div>      
    </b-card>

</template>

<script>
  export default {
    name:'Forms',
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
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
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.room = null
        this.form.date = null
        this.form.period = ''
        this.form.phone = ''
        this.form.id = ''
        this.form.user = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>