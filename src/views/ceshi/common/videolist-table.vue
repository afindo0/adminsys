<template>
    <!-- <el-row>
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
                        <div class="shenhe shenhe2">
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
                                <el-button
                                    size="mini"
                                    slot="reference"
                                    type="text"
                                    >删除
                                </el-button>
                            </el-popconfirm>
                            <el-button
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
            v-model:visible="dialogVisible"
            width="30%"
            :before-close="handleClose"
        >
            <span class="dialog_title">驳回理由： </span>
            <el-input type="textarea"  clearable v-model="reason" placeholder="请输入驳回理由"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="Invalid()"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
        <el-dialog
            title="修改数据"
            v-model:visible="dialogVisible2"
            width="30%"
            :before-close="handleClose"
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
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="editdataFn()"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </el-row> -->
    <div>
      2222222222222222222222222222222222222
    </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  // props: {
  //   dataSource: {
  //     type: Array,
  //     require: true
  //   }
  // },
  // data () {
  //   return {
  //     dialogVisible: false,
  //     thisRow: {},
  //     form: {},
  //     dialogVisible2: false,
  //     reason: '',
  //     editdata: {
  //       browseCount: 0,
  //       praisesCount: 0,
  //       transferCount: 0
  //     }
  //   }
  // },
  // methods: {
  //   ...mapActions('video', [
  //     'lockvideoFn',
  //     'unlockvideoFn',
  //     'videoListFn',
  //     'auditvideoFn',
  //     'unauditvideoFn',
  //     'deletevideoFn',
  //     'cutVideoSegmentFn',
  //     'randomAddBrowsePraisesShareCountFn'
  //   ]),
  //   editdataFn () {
  //     const that = this
  //     this.randomAddBrowsePraisesShareCountFn({
  //       videoId: that.thisRow.id,
  //       browseCount: that.editdata.browseCount,
  //       praisesCount: that.editdata.praisesCount,
  //       toUserId: that.thisRow.userId,
  //       transferCount: that.editdata.transferCount
  //     }).then(() => {
  //       this.$message({
  //         message: '修改成功',
  //         type: 'success'
  //       })
  //     }, res => {
  //       this.$message({
  //         message: res,
  //         type: 'warning'
  //       })
  //     })
  //     this.thisRow = {}
  //     this.editdata = {
  //       browseCount: 0,
  //       praisesCount: 0,
  //       transferCount: 0
  //     }
  //     this.dialogVisible2 = false
  //   },
  //   editdatadialogshowFn (row) {
  //     this.thisRow = row
  //     this.dialogVisible2 = true
  //   },
  //   async segmentation (row) {
  //     const res = await this.cutVideoSegmentFn({
  //       sourceUrl: row.videoUrl,
  //       videoId: row.id
  //     })
  //     if (res) {
  //       this.$message.success('切片成功')
  //     } else {
  //       this.$message.error('切片失败')
  //     }
  //   },
  //   filterStatus (row, column, cellValue) {
  //     switch (cellValue) {
  //       case 'NORMAL': {
  //         return '待审核'
  //       }
  //       case 'REJECT': {
  //         return '已驳回'
  //       }
  //       case 'PASS': {
  //         return '已通过'
  //       }
  //     }
  //   },
  //   // filterprice(row, column, cellValue) {
  //   //   return (cellValue / 100).toFixed(2)
  //   // },
  //   async handleClick (row) {
  //     if (row.status === 'NORMAL') {
  //       await this.lockvideoFn({ id: row.id })
  //     }
  //     if (row.status === 'LOCKED') {
  //       await this.unlockvideoFn({ id: row.id })
  //     }

  //     this.$emit('reload')
  //   },

  //   detailinfo (row) {
  //     this.$router.push({ path: 'videodetail', query: { id: row.id } })
  //   },
  //   editinfo (row) {
  //     this.$router.push({ path: 'videoedit', query: { id: row.id } })
  //   },
  //   async delinfo (row) {
  //     await this.deletevideoFn({
  //       videoId: row.id
  //     })
  //     this.$emit('reload')
  //   },
  //   async Normal (row) {
  //     await this.auditvideoFn({
  //       videoId: row.id
  //     })
  //     this.$emit('reload')
  //   },
  //   showInvalid (row) {
  //     this.thisRow = row
  //     this.dialogVisible = true
  //   },
  //   async Invalid () {
  //     await this.unauditvideoFn({
  //       videoId: this.thisRow.id,
  //       videoUrl: `${this.thisRow.ossPlayUrl}`,
  //       rejectComment: this.reason === '' ? '视频不符合规范' : this.reason,
  //       videoTitle: this.thisRow.title,
  //       videoUserId: this.thisRow.userId
  //     })
  //     this.thisRow = {}
  //     this.reason = ''
  //     this.dialogVisible = false
  //     this.$emit('reload')
  //   }
  // }
}
</script>
