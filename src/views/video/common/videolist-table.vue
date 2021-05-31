<template>
    <el-row>
        <el-table :data="dataSource" border>
            <el-table-column label="id" prop="id" align="center" width="100">
            </el-table-column>
            <el-table-column prop="content" label="文字内容" align="center">
            </el-table-column>

            <el-table-column label="视频地址" width="280">
                <template v-slot="scope">
                    <video
                        style="width:260px;height:160px"
                        :src="`${scope.row.ossPlayUrl}`"
                        controls="controls"
                    >
                        您的浏览器不支持 video 标签。
                    </video>
                </template>
            </el-table-column>
            <el-table-column
                prop="status"
                label="视频状态"
                width="100"
                align="center"
                :formatter="filterStatus"
            >
            </el-table-column>
            <el-table-column prop="nickName" label="归属人" align="center">
            </el-table-column>
            <el-table-column
                label="操作"
                align="center"
                width="140"
                fixed="right"
            >
                <template v-slot="props">
                    <div class="operation">
                        <div class="shenhe shenhe2" v-if="props.row.status==='NORMAL'">
                            <el-button
                                size="mini"
                                type="success"
                                @click="Normal(props.row)"
                                >通过
                            </el-button>
                            <el-button
                                size="mini"
                                type="warning"
                                @click="showInvalid(props.row)"
                                >驳回
                            </el-button>
                        </div>
                        <div class="buts">
                            <el-popconfirm
                                @confirm="delinfo(props.row)"
                                title="确定要删除该视频吗？"
                            >
                            <template #reference>
                                <el-button  size="mini"  type="text">删除</el-button>
                            </template>
                            </el-popconfirm>
                            <el-button v-if="props.row.status==='PASS'"
                                    size="mini"
                                    @click="editdatadialogshowFn(props.row)"
                                    type="text"
                                    >修改数据
                                </el-button>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="提示"
            v-model="dialogVisible"
            width="30%"

        >
            <span class="dialog_title">驳回理由： </span>
            <el-input type="textarea"  clearable v-model="reason" placeholder="请输入驳回理由"></el-input>
            <template #footer>
            <span  class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="Invalid()"
                    >确 定</el-button
                >
            </span>
            </template>
        </el-dialog>
        <el-dialog
            title="修改数据"
            v-model="dialogVisible2"
            width="30%"

        >
            <el-form ref="form" :model="editdata" label-width="80px">
                <el-form-item label="浏览量">
                    <el-input-number v-model="editdata.browseCount" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="点赞量">
                    <el-input-number v-model="editdata.praisesCount" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="转发量">
                    <el-input-number v-model="editdata.transferCount" :min="0"></el-input-number>
                </el-form-item>
            </el-form>
            <template #footer>
            <span  class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="editdataFn()"
                    >确 定</el-button
                >
            </span>
            </template>
        </el-dialog>
    </el-row>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'

export default defineComponent({
  props: {
    dataSource: {
      type: Array,
      require: true
    }
  },
  setup (props, { emit }) {
    const store = useStore()
    let thisRow:any = reactive({})
    const dialogVisible = ref(false)
    const reason = ref('')
    const dialogVisible2 = ref(false)
    let editdata:any = reactive({})

    // 表格格式化 视频状态
    function filterStatus (row:any, column:any, cellValue:any) {
      switch (cellValue) {
        case 'NORMAL': {
          return '待审核'
        }
        case 'REJECT': {
          return '已驳回'
        }
        case 'PASS': {
          return '已通过'
        }
      }
    }
    // 表格操作 通过
    function Normal (row: any) {
      store.dispatch('video/auditvideoFn', { videoId: row.id })
    }
    // 展示驳回对话框
    function showInvalid (row:any) {
      thisRow = row
      dialogVisible.value = true
    }
    // 表格操作  驳回
    function Invalid () {
      store.dispatch('video/unauditvideoFn', {
        videoId: thisRow.id,
        videoUrl: thisRow.ossPlayUrl,
        rejectComment: reason.value === '' ? '视频不符合规范' : reason.value,
        videoTitle: thisRow.title,
        videoUserId: thisRow.userId
      }).then(() => {
        ElMessage.success('操作成功')
      })
      thisRow = {}
      reason.value = ''
      dialogVisible.value = false
      emit('reload')
    }
    // 表格操作 删除
    function delinfo (row:any) {
      store.dispatch('video/deletevideoFn', {
        videoId: row.id
      }).then(() => {
        ElMessage.success('操作成功')
        emit('reload')
      })
    }
    // 展示修改数据对话框
    function editdatadialogshowFn (row:any) {
      thisRow = row
      dialogVisible2.value = true
    }
    // 视频数据修改
    function editdataFn () {
      store.dispatch('video/randomAddBrowsePraisesShareCountFn', {
        videoId: thisRow.id,
        browseCount: editdata.browseCount,
        praisesCount: editdata.praisesCount,
        toUserId: thisRow.userId,
        transferCount: editdata.transferCount
      }).then((res:any) => {
        thisRow = {}
        editdata = {
          browseCount: 0,
          praisesCount: 0,
          transferCount: 0
        }
        dialogVisible2.value = false
        if (res.statusCode === 200) {
          ElMessage.success('修改成功')
        }
      }, (e) => {
        ElMessage.warning(e.message)
      })
    }

    return { filterStatus, Normal, dialogVisible, reason, showInvalid, Invalid, delinfo, editdatadialogshowFn, dialogVisible2, editdata, editdataFn }
  }
})
</script>
<style lang="less" scoped>
@import "../../../styles/fn.less";
.el-form-item {
    width: 100%;
    margin-right: 0px !important;
    .el-input {
        width: 100%;
    }
}
.operation {
    .setCenter(center, center, column);
    .shenhe {
        width: 100%;
        button {
            width: 40px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            padding: 0;
        }
    }
    .shenhe2 {
        border-bottom: 1px solid #ebeef5;
        padding-bottom: 3px;
    }
    .buts {
        width: 100%;
    }
}
.dialog_title{
    margin-bottom: 10px;
    display: inline-block;
}
</style>
