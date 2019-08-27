<template>
  <div>
    <el-table :data="item" style="width: 100%">
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
          <el-tag :type="row.status | filterStatus">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article';
export default {
  filters: {
    filterStatus(status) {
      // console.log(status, 'status')
      const mapStatus = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return mapStatus[status]
    }
  },
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
      item: null,
      query: {
        type: this.type,
        page: 1,
        limit: 5
      }
    }
  },
  created() {
    this.getLiist()
  },
  methods: {
    getLiist() {
      fetchList(this.query).then(resp => {
        this.item = resp.data.items
        console.log(resp, 'resp')
        this.$emit('addCreated')
      })
    }
  }
}
</script>

