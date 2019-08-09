<template>
  <div class="app-container">
    <div class="show-d">
      <el-tag>The default order :</el-tag>
      {{ oldList }}
    </div>
    <div class="show-d">
      <el-tag>The after dragging order :</el-tag>
      {{ newList }}
    </div>
    <el-table ref="dragable" :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from 'sortablejs';
export default {
  data() {
    return {
      list: null,
      sortable: null,
      oldList: [],
      newList: [],
      tableData: [
        {
          id: '0',
          title:
            'Isshz bwyih qovig olpnysigx sdbms usrmyz qkhvvchn otyhyzxjx romvn kah fqid.'
        },
        {
          id: '1',

          title:
            'Oxhg ujnm wtptvfik cpxvl thjjnhrx mxkp rulg kev wnamrjp esdwq iugfegz qinwklg.'
        },
        {
          id: '2',
          title:
            'Oxhg ujnm wtptvfik cpxvl thjjnhrx mxkp rulg kev wnamrjp esdwq iugfegz qinwklg.'
        },
        {
          id: '3',
          title:
            'Cnogwb uipt josjec ciyb zsjrymoxh jtklspoh ojpbytr iojpbsgkhl citvumrd lmxob fpjbm mbpehxqbdo.'
        },
        {
          id: '4',

          title:
            'Idxph pjkhwo itlrmpick klpin nrqpf oxeug nxp dspg cvhcdbyrp nojty voaqljco xiw awnlpjimdq muyyyxgix.'
        }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.list = this.tableData
      this.oldList = this.list.map(v => v.id)
      this.newList = this.oldList.slice()
      this.$nextTick(() => {
        this.setSort()
      })
    },
    setSort() {
      console.log(this.$refs.dragable.$el, '123')
      const el = this.$refs.dragable.$el.querySelectorAll(
        '.el-table__body-wrapper > table > tbody'
      )[0]
      console.log(el, 'el')
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        onEnd: function(env) {
          console.log(env)
        }
      })
    }
  }
}
</script>

<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
.sortable-chosen {
  opacity: 0.8;
  color: red !important;
  background: red !important;
}
</style>

<style scoped>
.icon-star {
  margin-right: 2px;
}
.drag-handler {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d {
  margin-top: 15px;
  display: inline;
}
</style>
