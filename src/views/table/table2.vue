<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="努力加載中..."
      border
      fit
      highlight-current-row
    >
      <!-- tableData[$index].date -->
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.author }}</template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.pageviews }}</template>
      </el-table-column>
      <!-- *********** -->
      <el-table-column label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <!-- *********** -->
      <el-table-column align="center" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          {{ scope.row.display_time }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table';

export default {
  filters: {
    statusFilter(status) {
      // console.log(status, 'status')
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      console.log(statusMap[status], 'statusMap[status]')
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(resp => {
        console.log(resp.data.items, 'resp')
        this.list = resp.data.items
        this.listLoading = false
      })
    }
  }
}
</script>

