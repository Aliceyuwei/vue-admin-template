<template>
  <div class="components-container">
    <div class="editor-container">
      <div class="dndList">
        <div :style="{width:width1}" class="dndList-list">
          <h3>{{ list1Title }}</h3>
          <draggable :list="list1" group="same">
            <div v-for="item in list1" :key="item.id" class="list-complete-item">
              <div class="list-complete-item-handle">{{ item.id }}.[+.+].{{ item.title }}</div>
              <div style="position:absolute;right:0px;">
                <span
                  style="float: right ;margin-top: -20px;margin-right:5px;"
                  @click="delet(item)"
                >
                  <i style="color:#ff4949" class="el-icon-delete" />
                </span>
              </div>
            </div>
          </draggable>
        </div>
        <div :style="{width:width2}" class="dndList-list">
          <h3>{{ list2Title }}-點即可回復</h3>
          <draggable :list="list2" group="same">
            <div v-for="item in list2" :key="item.id" class="list-complete-item">
              <div @click="push(item)">{{ item.id }}.[^_^].{{ item.title }}</div>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  name: 'Drag2',
  components: {
    draggable
  },
  data() {
    return {
      items: [
        { id: 0, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 1, title: 'ali11111111111111111111111111111111111111111111' },
        { id: 2, title: 'ali222222222222222222222222222222222222222222222' },
        { id: 3, title: 'ali3333333333333333333333333333333333' },
        { id: 4, title: 'ali444444444444444444444444444444444444444444444' },
        { id: 5, title: 'ali555555555555555555555555555555555555555555555' },
        { id: 6, title: 'ali666666666666666666' },
        { id: 7, title: 'ali777777777777777777777777777777777777777777777' },
        { id: 8, title: 'ali8888888888888888888888888888888888888888888' },
        { id: 9, title: 'ali9999999999999999999999999999999999999999999999' },
        { id: 10, title: 'ali10101010101010101010' },
        { id: 11, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 12, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 13, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 14, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 15, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 16, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 17, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 18, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 19, title: 'ali00000000000000000000000000000000000000000000' },
        { id: 20, title: 'ali00000000000000000000000000000000000000000000' }
      ],
      list1: [],
      list2: [],
      list1Title: '未刪除',
      list2Title: '已刪除',
      width1: '48%',
      width2: '48%'
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      console.log('0.0')
      this.list1 = this.items.splice(0, 6)
      console.log(this.list1, 'this.list1')
      this.list2 = this.items
    },
    delet(item) {
      console.log('im delete', item)
      // need to compare items.id & item.id
      //* **for x 'in' arr(回傳的是index) compare for 'x' of(回傳的是 值) arr***
      // 我終於發現差別了
      // 先確定我點擊的id = list1.id
      for (const list1 of this.list1) {
        console.log(list1, 'value')
        if (item.id === list1.id) {
          console.log('fun', item)
          // 因為splice()移除都是以index計算
          // 定義一個新的index
          // find this element'position give its an index => indexOf()
          // console.log(list1, 'list1')
          // console.log(this.list1.indexOf(list1)) // 因為我是要給這一整個item一個index
          const index = this.list1.indexOf(list1)
          // console.log(index, 'index')
          this.list1.splice(index, 1)
          break; // 我也不知道為何第二次就會不同
        }
      }
      console.log(this.list2, 'this.list2')
      // 然後再將刪除的東西塞進list2
      // this.list2.unshift(item)
      this.isNotInList2(item)
      console.log(this.isNotInList2(item), 'this.isNotInList2(item)')
      // console.log(this.isNotInList2(), 'this.isNotInList2()')
      if (this.isNotInList2(item)) {
        this.list2.unshift(item)
      }
    },
    isNotInList2(list1) {
      // 如何判斷我現在不在list2 => 判斷list1.id !== list2.id
      this.list2.forEach(list2 => {
        // console.log(list2, 'list2')
        return list2
      })
      return this.list2.every(list2 => {
        console.log(list2.id, 'list2every')
        console.log(list1.id, 'list1every')
        const ans = list2.id !== list1.id
        console.log(ans, 'ans')
        return ans
      })
      // console.log(list1, 'isNotInList2')
    },
    push(item) {
      console.log('im push', item)
      for (const list2 of this.list2) {
        // console.log(list2)
        if (item.id === list2.id) {
          // console.log('opopop')
          // console.log(this.list2.indexOf(item))
          // console.log(this.list2.indexOf(list2))
          const index = this.list2.indexOf(list2)
          this.list2.splice(index, 1)

          break; // 我也不知道為何第二次就會不同
        }
      }
      // this.list1.push(item)
      // this.isNotInList1(item)
      if (this.isNotInList1(item)) {
        this.list1.push(item)
      }
    },
    isNotInList1(list2) {
      console.log('isNotInList1', list2.id)
      console.log(
        'every',
        this.list1.every(list1 => {
          return list1.is !== list2.id
        })
      )
      return this.list1.every(list1 => {
        console.log(list1.id, 'isNotInList1list1.id')
        console.log(list2.id, 'isNotInList1list2.id')
        return list1.id !== list2.id
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dndList {
  background: #fff;
  padding-bottom: 40px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .dndList-list {
    float: left;
    padding-bottom: 30px;
    &:first-of-type {
      margin-right: 2%;
    }
    .dragArea {
      margin-top: 15px;
      min-height: 50px;
      padding-bottom: 30px;
    }
  }
}

.list-complete-item {
  cursor: pointer;
  position: relative;
  font-size: 14px;
  padding: 5px 12px;
  margin-top: 4px;
  border: 1px solid #bfcbd9;
  transition: all 1s;
}

.list-complete-item-handle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 50px;
}

.list-complete-item-handle2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 20px;
}

.list-complete-item.sortable-chosen {
  background: #4ab7bd;
}

.list-complete-item.sortable-ghost {
  background: #30b08f;
}

.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}
</style>
