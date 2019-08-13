<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="input"
        size="small"
        style="width: 200px;"
        class="filter-item"
        placeholder="Title"
      />
      <el-select
        v-model="value"
        size="small"
        style="width: 90px;"
        class="filter-item"
        placeholder="Imp"
      >
        <el-option v-for="item in impOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <!-- <el-select
        v-model="value"
        size="small"
        style="width: 130px"
        class="filter-item"
        placeholder="Type"
      >
        <el-option v-for="item in typeOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="item" size="small" style="width: 140px" class="filter-item" placeholder>
        <el-option
          v-for="item in sortOption"
          :key="item.key"
          :label="item.label"
          :value="item.label"
        />
      </el-select>-->
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        size="small"
        icon="el-icon-search"
      >Search</el-button>
      <el-button
        class="filter-item"
        type="primary"
        size="small"
        icon="el-icon-plus"
        @click="openDialog"
      >Add</el-button>
      <el-button class="filter-item" type="primary" size="small" icon="el-icon-download">Export</el-button>
      <el-checkbox v-model="checked" style="margin-left: 15px;" class="filter-item">reviewer</el-checkbox>
      <span>上排功能都尚未完成</span>
      <span>彈窗內容都尚未完成</span>

      <el-table ref="grad" :data="list" border fit highlight-current-row>
        <el-table-column align="center" label="ID" width="70">
          <template slot-scope="{row}">{{ row.id }}</template>
        </el-table-column>
        <el-table-column label="Date" width="150">
          <template slot-scope="{row}">{{ row.timestamp }}</template>
        </el-table-column>
        <el-table-column label="Title">
          <template slot-scope="{row}">
            <span class="link-type" @click="openDialog">{{ row.title }}</span>
            <el-tag>{{ row.type | filterText }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Author" width="90" align="center">
          <template slot-scope="{row}">
            <span>{{ row.author }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Imp" width="100" align="center">
          <template slot-scope="{row}">
            <span>{{ row.importance }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Pageviews" width="100" align="center">
          <template slot-scope="{row}">
            <span class="link-type" @click="openDialog">{{ row.pageviews }}</span>
          </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="Status" width="100" align="center">
          <template slot-scope="{row}">
            <el-tag :type="row.status | filterStatus">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="Action"
          width="250"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="{row}">
            <el-button class="filter-item" type="primary" size="mini" @click="openDialog">edit</el-button>
            <el-button
              v-if="row.status !=='published'"
              class="filter-item"
              type="success"
              size="mini"
              @click="modifyStatus(row,'published')"
            >published</el-button>
            <el-button
              v-if="row.status !=='draft'"
              class="filter-item"
              type="info"
              size="mini"
              @click="modifyStatus(row,'draft')"
            >draft</el-button>
            <el-button
              v-if="row.status !=='deleted'"
              class="filter-item"
              type="danger"
              size="mini"
              @click="modifyStatus(row,'deleted')"
            >deleted</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span>還有頁籤</span>
      <!-- 頁籤 -->
      <!-- dialog -->
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>there needs from</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import { parseTime } from '@/utils';
import Sortable from 'sortablejs';
const typeOption = [
  { key: 'EU', display_name: '歐洲' },
  { key: 'JP', display_name: '日本' },
  { key: 'CN', display_name: '中國' },
  { key: 'US', display_name: '美國' }
]
// arr to obj, such as {CN:"China",US:"USA"} //i want to get the obj'value and add that =>  array reduce
const typeValue = typeOption.reduce((x, y) => {
  x[y.key] = y.display_name
  // console.log(x, 'x[y.key]')
  return x
}, {})
// console.log(typeValue, 'typeValue')
export default {
  name: 'ComplexTable',
  filters: {
    filterStatus(value) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[value]
    },
    filterText(type) {
      return typeValue[type]
      // console.log(type, 'type')
    }
  },
  data() {
    return {
      list: null,
      input: '',
      checked: false,
      impOptions: [1, 2, 3],
      typeOptions: [],
      sortable: null,
      sortOption: [
        {
          label: 'ID Ascending',
          key: '+id'
        },
        {
          label: 'ID Descending',
          key: '-id'
        }
      ],
      value: '',
      items: [
        {
          author: 'Anna',
          comment_disabled: true,
          content:
            "<p>I am testing data, I am testing data.</p><p><img src='https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943'></p>",
          content_short: 'mock data',
          display_time: '2005-06-20 13:08:30',
          forecast: 13.37,
          id: 1,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          importance: 2,
          pageviews: 2068,
          platforms: ['a-platform'],
          reviewer: 'Jason',
          status: 'published',
          timestamp: 1135929267266,
          title: 'Wrdx Denmgox Blwfvxp Cbfxg Shwpm',
          type: 'EU'
        },
        {
          author: 'David',
          comment_disabled: true,
          content:
            "<p>I am testing data, I am testing data.</p><p><img src='https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943'></p>",
          content_short: 'mock data',
          display_time: '2013-05-19 21:35:15',
          forecast: 68.17,
          id: 2,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          importance: 3,
          pageviews: 2068,
          platforms: ['a-platform'],
          reviewer: 'Jason',
          status: 'deleted',
          timestamp: 502327679165,
          title: 'Wrdx Denmgox Blwfvxp Cbfxg Shwpm',
          type: 'JP'
        },
        {
          author: 'Anna',
          comment_disabled: true,
          content:
            "<p>I am testing data, I am testing data.</p><p><img src='https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943'></p>",
          content_short: 'mock data',
          display_time: '2005-06-20 13:08:30',
          forecast: 13.37,
          id: 3,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          importance: 2,
          pageviews: 2068,
          platforms: ['a-platform'],
          reviewer: 'Jason',
          status: 'published',
          timestamp: 1135929267266,
          title: 'Wrdx Denmgox Blwfvxp Cbfxg Shwpm',
          type: 'CN'
        },
        {
          author: 'David',
          comment_disabled: true,
          content:
            "<p>I am testing data, I am testing data.</p><p><img src='https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943'></p>",
          content_short: 'mock data',
          display_time: '2013-05-19 21:35:15',
          forecast: 68.17,
          id: 4,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          importance: 3,
          pageviews: 2068,
          platforms: ['a-platform'],
          reviewer: 'Jason',
          status: 'draft',
          timestamp: 502327679165,
          title: 'Wrdx Denmgox Blwfvxp Cbfxg Shwpm',
          type: 'EU'
        },
        {
          author: 'Anna',
          comment_disabled: true,
          content:
            "<p>I am testing data, I am testing data.</p><p><img src='https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943'></p>",
          content_short: 'mock data',
          display_time: '2005-06-20 13:08:30',
          forecast: 13.37,
          id: 5,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          importance: 2,
          pageviews: 2068,
          platforms: ['a-platform'],
          reviewer: 'Jason',
          status: 'draft',
          timestamp: 1135929267266,
          title: 'Wrdx Denmgox Blwfvxp Cbfxg Shwpm',
          type: 'US'
        }
      ],
      total: 0,
      dialogVisible: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.list = this.items
      this.total = 5
      this.$nextTick(() => {
        // why used $nextick??
        //* ***note*****/
        // 下面了解下nextTick的主要应用的场景及原因
        //* 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
        // 在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。
        //* 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
        this.sort()
      })
    },
    sort() {
      // i called the fn sort actually in hook created
      const el = this.$refs.grad.$el.querySelectorAll(
        '.el-table__body-wrapper > table > tbody '
      )[0]
      // console.log(el)
      this.sortable = Sortable.create(el, {
        onEnd: evt => {
          // console.log(evt, 'evt')
          // console.log(evt.oldIndex, 'evt.oldIndex')
          // console.log(evt.newIndex, 'evt.newIndex')
          const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          // console.log(targetRow, 'targetRow')
          this.list.splice(evt.newIndex, 0, targetRow)
        }
      })
    },
    modifyStatus(row, status) {
      // console.log(row.status, status)
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    openDialog() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
</style>
