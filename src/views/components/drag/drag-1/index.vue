<!-- threr used vuedraggable not  Sortable.js -->
<!--BIG WORD WORDS*** vuedraggable based on Sortable.js ***BIG WORD WORDS-->
<template>
  <div class="components-container">
    <div class="editor-container">
      <div class="dndList">
        <div :style="{width:width1}" class="dndList-list">
          <h3>{{ list1Title }}</h3>
          <draggable :list="list1" group="ndsame" class="dragArea">
            <div v-for="element in list1" :key="element.id" class="list-complete-item">
              <div class="list-complete-item-handle">{{ element.id }} [divice] {{ element.title }}</div>
              <div style="position:absolute;right:0px;">
                <span
                  style="float: right ;margin-top: -20px;margin-right:5px;"
                  @click="deleteEle(element)"
                >
                  <i style="color:#ff4949" class="el-icon-delete" />
                </span>
              </div>
            </div>
          </draggable>
        </div>
        <div :style="{width:width2}" class="dndList-list">
          <h3>{{ list2Title }}-點即可回復</h3>
          <draggable :list="list2" group="ndsame" class="dragArea">
            <div v-for="element in list2" :key="element.id" class="list-complete-item">
              <div
                class="list-complete-item-handle2"
                @click="pushEle(element)"
              >{{ element.id }} [divice] {{ element.title }}</div>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
// import { getList } from '@/api/table';

export default {
  name: 'Drag-1',
  components: { draggable },
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
        {
          id: 10,
          title:
            'ali101010101010101010101010101010101010101010100000000000000000000000'
        },
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
    this.getData()
  },
  methods: {
    getData() {
      this.list1 = this.items.splice(0, 5)
      this.list2 = this.items
    },
    isNotInList1(v) {
      // 檢查是否不在list1
      return this.list1.every(k => v.id !== k.id)
    },
    isNotInList2(v) {
      // 檢查是否不在list2
      console.log('v:', v)
      console.log(
        'this.list2.every(k => v.id !== k.id):',
        this.list2.every(k => v.id !== k.id)
      )
      return this.list2.every(k => v.id !== k.id)
    },
    deleteEle(ele) {
      console.log('ele:', ele)
      for (const item of this.list1) {
        console.log('item:', item)
        if (item.id === ele.id) {
          const index = this.list1.indexOf(item)
          console.log('index:', index) //一定要比對id
          this.list1.splice(index, 1) //移除我點擊的那個
          break;
        }
      }
      if (this.isNotInList2(ele)) {
        console.log('this.isNotInList2(ele)', this.isNotInList2(ele))
        this.list2.unshift(ele) //如果是 就把(ele)新增到list2 '的前面'
      }
    },
    pushEle(ele) {
      for (const item of this.list2) {
        if (item.id === ele.id) {
          const index = this.list2.indexOf(item)
          this.list2.splice(index, 1) //移除我點擊的那個
          break;
        }
      }
      if (this.isNotInList1(ele)) {
        this.list1.push(ele) //如果是 就把(ele)新增到list1 '的後面'
      }
    }
  }

  // setData(dataTransfer) {
  //   // to avoid Firefox bug
  //   // Detail see : https://github.com/RubaXa/Sortable/issues/1012
  //   dataTransfer.setData('Text', '')
  // }
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
