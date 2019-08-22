<template>
  <div class="components-container">
    <aside>
      drag-list base on
      <a
        href="https://github.com/SortableJS/Vue.Draggable"
        target="_blank"
      >Vue.Draggable</a>
    </aside>
    <div class="editor-container">
      components there
      <dnd-list>11</dnd-list>
    </div>
  </div>
</template>

<script>
import DndList from '@/components/DndList';
import { fetchList } from '@/api/article';
export default {
  name: 'DndListDemo',
  components: { DndList },
  data() {
    return {
      list1: [],
      list2: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      fetchList().then(response => {
        console.log(response, 'res')
      })
    }
  }
}
</script>

