<template>
  <div class="app-container">
    <h3>
      draggable :
      {{ dragInfo }}
    </h3>
    <div class="feature">
      <el-checkbox v-model="checked">停止拖曳功能</el-checkbox>
      <button @click="add()">+Add</button>
      <button @click="clear()">clear</button>
    </div>
    <draggable
      :list="defaltItem"
      ghost-class="ghost"
      chosen-class="choose"
      animation="1500"
      :move="checkMove"
      @start="drag = true"
      @end="drag = false"
    >
      <div v-for="element in defaltItem" :key="element.id" class="item">
        <div>{{ element.name }}</div>
        <div style="position:absolute;right:0px;">
          <span style="float: right ;margin-top: -13px;margin-right:5px;" @click="delet(element)">
            <i style="color:#ff4949" class="el-icon-delete" />
          </span>
        </div>
      </div>
    </draggable>

    <h3>defaltItem</h3>
    <pre>{{ defaltItem }}</pre>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
let id = 4
export default {
  components: { draggable },
  data() {
    return {
      defaltItem: [
        { id: 1, name: 'alice' },
        { id: 2, name: 'bob' },
        { id: 3, name: 'candy' }
      ],
      drag: false,
      checked: false
    }
  },
  computed: {
    dragInfo() {
      return this.drag ? 'dragging' : 'stopdrag';
      // return '456';
    }
  },
  methods: {
    checkMove() {
      console.log('checkMove????????????')
    },
    add() {
      console.log('努力增加')

      this.defaltItem.push({ id: id++, name: `add${id}` })
    },
    clear() {
      console.log('奮力清除')
      this.defaltItem = [{ id: 1, name: 'allclear' }]
    },
    delet(element) {
      console.log(element, 'one')
      for (const x of this.defaltItem) {
        console.log(x.id, 'x.id')
        console.log(element.id, 'element.id')
        if (x.id === element.id) {
          console.log('hahaha')
          const index = this.defaltItem.indexOf(element)
          console.log(index, 'index')
          this.defaltItem.splice(index, 1)
          break;
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  border: 1px solid gray;
  padding: 10px 5px;
  width: 300px;
  text-align: center;
  background: #fff;
  position: relative;
}
.ghost {
  background: palevioletred;
}
.choose {
  color: red;
}
.feature {
  padding: 10px 5px;
  text-align: right;
}
button {
  padding: 5px 10px;
  border-radius: 5px;
  cursor: grab;
}
</style>
