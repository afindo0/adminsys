<template>
    <div>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>
      11111111111<br/>

        <!-- <Form class="m-form" ref="form"
              @search="handleFormChange"
              @handle-click-export="handleClickExport"
              @reset="reset">
        </Form>
        <Table class="m-table"
               :dataSource="videoList"
               @reload="getvideoList"
               />
        <Pagination :total="videoListtotal"
                    :currentPage="pageInfo.currentPage"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" /> -->
    </div>
</template>
<script>
// import { mapGetters, mapActions } from 'vuex'

export default {
  // components: {
  //   // Form: () => import('./common/videolist-form'),
  //   // Table: () => import('./common/videolist-table'),
  //   // Pagination: () => import('components/Pagination')
  // },
  // data () {
  //   return {
  //     pageInfo: {
  //       offset: 0,
  //       pageSize: 10
  //     },
  //     formInfo: {}
  //   }
  // },
  // computed: {
  //   ...mapGetters('video', ['videoList', 'videoListtotal'])
  // },
  // methods: {
  //   ...mapActions('video', ['videoListFn']),
  //   reset () {
  //     this.formInfo = {}
  //     this.pageInfo = {}
  //   },
  //   // 组合参数
  //   handleFormChange (form) {
  //     this.formInfo = {}
  //     const formInfo = this.formInfo
  //     this.pageInfo = {
  //       offset: 0,
  //       pageSize: 10
  //     }
  //     this.formInfo = { ...formInfo, ...form }
  //     this.getvideoList()
  //   },
  //   handleSizeChange (pageSize) {
  //     this.pageInfo.pageSize = pageSize
  //     this.getvideoList()
  //   },
  //   handleCurrentChange (currentPage) {
  //     this.pageInfo.currentPage = currentPage
  //     this.pageInfo.offset = (currentPage - 1) * this.pageInfo.pageSize
  //     this.getvideoList()
  //   },
  //   getvideoList () {
  //     const pageInfo = this.pageInfo
  //     const formInfo = this.formInfo
  //     this.videoListFn({ ...pageInfo, ...formInfo })
  //   },
  //   linkto () {
  //     this.$router.push('videoadd')
  //   }
  // },
  // activated () {
  //   this.getvideoList()
  // },
  // mounted () {
  //   this.getvideoList()
  // }
}
</script>
<style>

</style>
