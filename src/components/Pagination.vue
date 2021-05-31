<template>
    <div class="pagination">
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        ></el-pagination>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    total: {
      type: Number,
      required: true
    },
    currentPage: Number
  },
  setup (props, { emit }) {
    function handleSizeChange (val:any) : any {
      emit('size-change', val)
    }
    function handleCurrentChange (val:any) : any {
      emit('current-change', val)
    }
    return {
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="less" scoped>
.pagination {
    display: flex;
    justify-content: flex-end;
    padding: 0 25px 25px 25px;
    margin-top: 40px;
}
</style>
<style lang="less">
.pagination {
    .el-pagination.is-background .el-pager li {
        &:hover {
            color: #ebb563;
        }
        &.active {
            background-color: #ebb563;
        }
    }
}
</style>
