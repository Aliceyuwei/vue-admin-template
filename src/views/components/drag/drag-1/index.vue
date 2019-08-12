<!-- https://sortablejs.github.io/Sortable/ -->
<!-- 我希望是item -->
<template>
  <div class="app-container">
    <ul>
      <li v-for="list in list" ref="drag" :key="list.id">{{ list.title }}</li>
    </ul>
  </div>
</template>

<script>
import { getList } from '@/api/table';
import Sortable from 'sortablejs';
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
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
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
      this.$nextTick(() => {
        this.sort()
      })
    },
    sort() {
      console.log('123456')
      console.log('this:', this.$refs)
    }
  }
}
</script>
<style scoped>
/* *li {
  border: 1px solid red;
} */
.app-container > ul > li {
  border: 1px solid #42b983;
  padding: 10px 10px;
}
</style>

