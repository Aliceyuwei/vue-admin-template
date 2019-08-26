<template>
  <div>
    <el-table :data="item" style="width: 100%">
      <!-- <el-table-column prop="date" label="日期" width="180">
        <template slot-scope="scope">
          <span>{{ scope }}</span>
        </template>
      </el-table-column>-->
      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="display_time" width="180">
        <template slot-scope="{row}">
          <span>{{ row.timestamp }}</span>
        </template>
      </el-table-column>
      <el-table-column label="title">
        <template slot-scope="{row}">
          <span>
            {{ row.title }}
            <el-tag>{{ row.type }}</el-tag>
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" width="180" label="author">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" width="100" label="importance">
        <template slot-scope="{row}">
          <span>{{ row.importance }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" width="100" label="pageviews">
        <template slot-scope="{row}">
          <span>{{ row.pageviews }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" width="100" label="status">
        <template slot-scope="{row}">
          <span>{{ row.status }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article';
export default {
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
      item: null,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  created() {
    this.getLiist()
  },
  methods: {
    getLiist() {
      fetchList().then(resp => {
        this.item = resp.data.items
        console.log(resp, 'resp')
      })
    }
  }
}
</script>

