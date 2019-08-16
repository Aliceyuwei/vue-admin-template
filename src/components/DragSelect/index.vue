<template>
  <el-select
    ref="dragSelect"
    v-model="selectVal"
    v-bind="$attrs"
    class="drag-select"
    multiple
    v-on="$listeners"
  >
    {{ $attrs }}
    <slot />
  </el-select>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  name: 'DragSelect',
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectVal: {
      get() {
        return [...this.value]
      },
      set(val) {
        this.$emit('input', [...val])
      }
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
.drag-select >>> .sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}

.drag-select >>> .el-tag {
  cursor: pointer;
}
</style>

<!-- <el-select
    ref="dragSelect"
    v-model="selectVal"
    v-bind="$attrs"
    class="drag-select"
    multiple
    v-on="$listeners"
  >
    {{ $attrs }}
    <slot /> -->
    <!-- 看到slot先去找他爸，他爸會告訴你他送兒子什麼東西 -->
    <!-- ***NOTE*** -->
    <!-- 单个插槽 === 默认插槽 === 匿名插槽 ===> 所以只有一個 -->
    <!-- 多个插槽 === xxxxxxx === 具名插槽 ===> 所以可以有很多個 -->
    <!-- 作用域插槽 | 带数据的插槽 -->
  <!-- </el-select> -->
  <!-- <el-select
    ref="dragSelect"
    v-model="selectVal"
    v-bind="$attrs"
    class="drag-select"
    multiple
    v-on="$listeners"
  >
    <slot name="up"/> *******具名slot*****
  </el-select>-->
