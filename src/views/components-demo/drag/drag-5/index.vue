<template>
  <div class="components-container">
    <el-select
      ref="dragSelect"
      v-model="value"
      style="width:500px;"
      multiple
      placeholder="请选择"
      v-on="$listeners"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <div style="margin-top:30px;">
      <draggable :list="value">
        <el-tag v-for="item of value" :key="item" style="margin-right:15px;">{{ item }}</el-tag>
      </draggable>
    </div>
  </div>
</template>

<script>
// import ElDragSelect from '@/components/DragSelect'; // base on element-ui
import draggable from 'vuedraggable';
import Sortable from 'sortablejs';
export default {
  name: 'DragSelectDemo',
  components: { draggable },
  // components: { ElDragSelect },
  data() {
    return {
      value: ['Apple', 'Banana', 'Orange'],
      options: [
        {
          value: 'Apple',
          label: 'Apple'
        },
        {
          value: 'Banana',
          label: 'Banana'
        },
        {
          value: 'Orange',
          label: 'Orange'
        },
        {
          value: 'Pear',
          label: 'Pear'
        },
        {
          value: 'Strawberry',
          label: 'Strawberry'
        }
      ]
    }
  },
  mounted() {
    this.setSort()
  },
  methods: {
    setSort() {
      const el = this.$refs.dragSelect.$el.querySelectorAll(
        '.el-select__tags > span'
      )[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          dataTransfer.setData('Text', '')
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
        },
        onEnd: evt => {
          const targetRow = this.value.splice(evt.oldIndex, 1)[0]
          this.value.splice(evt.newIndex, 0, targetRow)
        }
      })
    }
  }
}
</script>

<style scoped>
.el-select >>> .sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}

.el-select >>> .el-tag {
  cursor: pointer;
}
</style>
