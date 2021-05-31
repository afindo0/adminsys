<template>
    <div>
        <Form class="m-form" ref="form" @search="handleFormChange" />
        <Table class="m-table"
               :dataSource="videoList"
               @reload="listReload"
               />
        <Pagination :total="videoListtotal"
                    :currentPage="pageInfo.currentPage"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive } from 'vue'
import Form from './common/videolist-form.vue'
import Table from './common/videolist-table.vue'
import Pagination from '@/components/Pagination.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Form,
    Table,
    Pagination
  },
  setup () {
    const store = useStore()

    // 列表
    const videoList = computed(() => {
      return store.state.video.videoList
    })
    // 列表总数
    const videoListtotal = computed(() => {
      return store.state.video.videoListtotal
    })
    // 分页参数
    const pageInfo = reactive({
      currentPage: 1,
      currentgroup: 10
    })
    // 列表参数
    const listquery = computed(() => {
      return {
        offset: (pageInfo.currentPage - 1) * pageInfo.currentgroup,
        pageSize: pageInfo.currentgroup
      }
    })
    // 搜索参数
    let serachquery:any = {}

    // 分页分组选择
    const handleSizeChange = (currentgroup:number) => {
      pageInfo.currentgroup = currentgroup
      getList(listquery.value)
    }
    // 分页页码选择
    const handleCurrentChange = (currentPage:number) => {
      pageInfo.currentPage = currentPage
      getList(listquery.value)
    }
    // 获取列表
    const getList = (query:any) => {
      store.dispatch('video/videolistFn', query)
    }
    // 列表搜索
    const handleFormChange = (query:any) => {
      pageInfo.currentPage = 1
      serachquery = query
      getList({ ...query, ...listquery.value })
    }
    // 列表刷新
    const listReload = () => {
      getList({ ...serachquery, ...listquery.value })
    }

    getList(listquery.value)
    return { videoList, videoListtotal, pageInfo, handleSizeChange, handleCurrentChange, getList, handleFormChange, listReload }
  }
})
</script>
<style>

</style>
