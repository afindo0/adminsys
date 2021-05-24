<template>
    <el-row class="m-form">
        <el-col :span="24">
            <el-form inline
                     label-suffix=":"
                     label-width="120px"
                     label-position="right">
                <el-form-item label="视频状态">
                    <el-select  clearable v-model="form.status"
                               placeholder="请选择视频状态"
                               >
                        <el-option :key="item.key" v-for="item in statuslist" :label="item.value" :value="item.key">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="文字内容">
                    <el-input clearable  v-model="form.title" placeholder="请输入文字内容"></el-input>
                </el-form-item>
                <el-form-item label="归属人昵称">
                    <el-input clearable  v-model="form.userNickname" placeholder="请输入归属人昵称"></el-input>
                </el-form-item>
                <el-form-item label="归属人ID">
                    <el-input clearable v-model="form.userId" placeholder="请输入归属人ID"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button class="m-orange"
                               icon="el-icon-search"
                               @click="searchClick">搜索</el-button>
                    <slot></slot>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script lang="ts">
import { defineComponent, reactive, getCurrentInstance } from 'vue'

export default defineComponent({
  setup () {
    const form = {}
    function searchClick () {
      console.log(1111111)
      // const newform = util.removeEmpty(form)
      // $emit('search', newform)
    }
    return { form, searchClick }
  }
  // data () {
  //   return {
  //     form: {},
  //     updateBeginTime: [nowdataStart, nowdataEnd],
  //     pickerOptions: {
  //       disabledDate (time) {
  //         return time.getTime() > Date.now()
  //       }
  //     },
  //     statuslist: [
  //       {
  //         key: 'NORMAL',
  //         value: '待审核'
  //       },
  //       {
  //         key: 'REJECT',
  //         value: '已驳回'
  //       },
  //       {
  //         key: 'PASS',
  //         value: '已通过'
  //       }
  //     ],
  //     taglist: [],
  //     oilStationList: []
  //   }
  // },
  // methods: {
  //   async getoilStationList () {
  //     // this.oilStationList = await this.oilStationListFn()
  //   },
  //   searchClick () {
  //     const form = util.removeEmpty(this.form)
  //     this.$emit('search', form)
  //   }
  // }
})
</script>
