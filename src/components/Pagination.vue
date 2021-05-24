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

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true
    },
    currentPage: Number
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('size-change', val)
    },
    handleCurrentChange (val) {
      this.$emit('current-change', val)
    }
  }
}
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
