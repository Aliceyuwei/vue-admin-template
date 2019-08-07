<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      element-loading-text="waiting"
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index+1 }}</template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="150">
        <template slot-scope="{row}">
          <span>{{ row.timestamp }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="{row}">{{ row.author }}</template>
      </el-table-column>
      <el-table-column label="Important" width="110" align="center">
        <template slot-scope="{row}">
          <!-- <svg-icon v-for="num in row.importance" :key="num" icon-class="password" class="meta-item__icon" />-->
          <i v-for="num in row.importance" :key="num" class="el-icon-star-on" />
        </template>
      </el-table-column>
      <el-table-column label="Status" width="110" align="center">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Title" min-width="300px">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input v-model="row.title" class="edit-input" size="small" />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            >Cancel</el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Action">
        <template slot-scope="{row}">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >Ok</el-button>
          <el-button
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit = !row.edit"
          >Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(status) {
      // console.log(status)
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
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 3
      },
      items: [
        {
          id: 1,
          author: 'Amy',
          comment_disabled: true,
          display_time: '1988-01-02 12:58:48',
          importance: 3,
          status: 'published',
          timestamp: 730313617055,
          title: 'Vwlnvb Cysvc Bftpmd Ggt Hogql Jgwlvjd'
        },
        {
          id: 2,
          author: 'Sandra',
          comment_disabled: true,
          display_time: '2008-08-11 01:28:24',
          importance: 1,
          status: 'deleted',
          timestamp: 617080479509,
          title: 'Vwlnvb Cysvc Bftpmd Ggt Hogql Jgwlvjd'
        },
        {
          id: 3,
          author: 'Carol',
          comment_disabled: true,
          display_time: '1981-10-01 02:58:57',
          importance: 1,
          status: 'draft',
          timestamp: 690483616363,
          title: 'Vwlnvb Cysvc Bftpmd Ggt Hogql Jgwlvjd'
        },
        {
          id: 4,
          author: 'Steven',
          comment_disabled: true,
          display_time: '1992-01-05 14:23:35',
          importance: 3,
          status: 'draft',
          timestamp: 161154532334,
          title: 'Vwlnvb Cysvc Bftpmd Ggt Hogql Jgwlvjd'
        },
        {
          id: 5,
          author: 'Shirley',
          comment_disabled: true,
          display_time: '2016-07-29 07:53:07',
          importance: 2,
          status: 'deleted',
          timestamp: 986064413723,
          title: 'Vwlnvb Cysvc Bftpmd Ggt Hogql Jgwlvjd'
        }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /** *note***/
    // es7的 async await (await只能放在async裡)
    // ------------------------
    // 對比es6
    // getList() {
    //   fetchList().then(resp => {
    //     console.log(resp.data)
    //   })
    // },
    // ------------------------
    // async fn0() {
    //   let result = await getist()
    // },
    // ------------------------
    // async fn1() {   //catch寫法*1
    //   try {
    //     await getList()
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },
    // ------------------------
    // async fn2() {       //catch寫法*2
    //   await getList().catch(function(err) {
    //     console.log(err)
    //   })
    // },
    // ------------------------
    // async fn3(){        //同步方式
    //   const test = await new Promise((resolve,reject)=>{
    //     return resolve(data)
    //   })
    // }
    // ------------------------
    /** *note***/
    // async getList() { es7 async await
    //   this.listLoading = true
    //   const data = await fetchList() //==resp
    //   const { data } = await fetchList(this.listQuery) //==resp.data
    //   console.log(data, 'data')
    //   console.log({ data }, '{data}')
    //   const items = data.items
    //   this.list = items.map(v => {
    //     this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
    //     // v.edit = false
    //     v.originalTitle = v.title //  will be used when user click the cancel botton
    //     return v
    //   }),
    getList() {
      console.log(this.items, 'this.items')
      this.list = this.items.map(x => {
        console.log(x, 'x')
        this.$set(x, 'edit', false)
        //x.originalTitle = x.title
        this.$set(x, 'originalTtitle', x.title)
        return x
      })
      console.log(this.list, 'this.list')
    },
    cancelEdit(row) {
      console.log('row:', row)
      row.edit = false
      row.title = row.originalTtitle
      this.$message({
        message: '已取消',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      console.log('row:', row.edit)
      row.edit = false
      row.originalTtitle = row.title
      this.$message({
        message: '已變更',
        type: 'success'
      })
    }
  }
}
</script>
<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
