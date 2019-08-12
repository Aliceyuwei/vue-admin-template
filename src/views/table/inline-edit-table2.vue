<!-- 雙擊事件 -->
<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="tableData"
      border
      fit
      highlight-current-row
      element-loading-text="waiting"
      @cell-dblclick="tableDbEdit"
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index+1 }}</template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="150">
        <template slot-scope="{row}">{{ row.date }}</template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="{row}">{{ row.author }}</template>
      </el-table-column>
      <el-table-column label="Important" width="110" align="center">
        <template slot-scope="{row}">{{ row.author }}</template>
      </el-table-column>
      <el-table-column label="Status" width="110" align="center">
        <template slot-scope="{row}">{{ row.pageviews }}</template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="{row}">
          <span v-if="isTextShow">{{ row.title }}</span>
          <el-input v-if="isInputShow" v-model="row.title" placeholder="请输入内容">{{ row.title }}</el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Action">
        <template slot-scope="{row}">
          <el-button size="mini" type="warning" @click="cancel(row)">Cancel</el-button>
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
          <el-button size="mini" type="primary" @click="handleSave(row)">Save</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'InlineEditTable2',
  data() {
    return {
      listLoading: false,
      isTextShow: true,
      isInputShow: false,
      tableData: [
        {
          date: '1993-02-22 00:53',
          author: 'name',
          display_time: '2000-11-02 13:12:12',
          id: '640000200609294332',
          pageviews: 1543,
          status: 'draft',
          title: 'this data havent api.'
        },
        {
          date: '1993-02-22 00:53',
          author: 'name',
          display_time: '1982-06-17 20:16:26',
          id: '130000199012157380',
          pageviews: 1542,
          status: 'published',
          title: 'this data havent api.'
        },
        {
          date: '1993-02-22 00:53',
          author: 'name',
          display_time: '1976-12-06 23:06:27',
          id: '520000201602048056',
          pageviews: 3891,
          status: 'draft',
          title: 'this data havent api.'
        },
        {
          date: '1993-02-22 00:53',
          author: 'name',
          display_time: '2008-08-18 11:56:58',
          id: '370000197902188379',
          pageviews: 1431,
          status: 'published',
          title: 'this data havent api.'
        },
        {
          date: '1993-02-22 00:53',
          author: 'name',
          display_time: '2003-10-26 08:46:59',
          id: '61000020080829783X',
          pageviews: 3835,
          status: 'published',
          title: 'this data havent api.'
        }
      ]
    }
  },
  methods: {
    tableDbEdit(row, column, cell, event) {
      console.log(this.tableDataNew, 'this.tableDataNew')
      // console.log('row', row)
      // console.log('column', column.label)
      // console.log('cell', cell)
      // console.log('event', event)
      if (column.label === 'Title') {
        // console.log('1112')
        this.isTextShow = false
        this.isInputShow = true
        // console.log('event.target.innerHTML', event.target.innerHTML)
        // event.target.innerHTML = '';
      }
      // if ( column.label ! == 'Title') {
      //   event.target.innerHTML = ''
      //   const cellInput = document.createElement('input')
      //   cellInput.value = ''
      //   cellInput.setAttribute('type', 'text')
      //   cellInput.style.width = '80%'
      //   cell.appendChild(cellInput)
      //   cellInput.onblur = function() {
      //     cell.removeChild(cellInput)
      //     event.target.innerHTML = cellInput.value
      //   }
      // }
    },
    cancel(row) {
      this.isTextShow = true
      this.isInputShow = false
      // console.log(index, row)
    },
    handleSave(row) {
      // console.log(index, 'index')
      // console.log(row, 'row')

      console.log(row.title, 'row.title')
      this.isTextShow = true
      this.isInputShow = false
    },
    handleDelete(index, row) {
      // console.log(index, row)
    }
  }
}
</script>
<style scoped>
</style>
