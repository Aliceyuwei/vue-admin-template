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
      <dnd-list :list1="list1" :list2="list2" list1-title="List" list2-title="Article pool" />
    </div>
  </div>
</template>

<script>
import DndList from '@/components/DndList';

export default {
  name: 'DndListDemo',
  components: { DndList },
  data() {
    return {
      list1: [],
      list2: [],
      items: [
        {
          id: 0,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 1,
          author: 'paris',
          title: 'ali11111111111111111111111111111111111111111111'
        },
        {
          id: 2,
          author: 'paris',
          title: 'ali222222222222222222222222222222222222222222222'
        },
        {
          id: 3,
          author: 'paris',
          title: 'ali3333333333333333333333333333333333'
        },
        {
          id: 4,
          author: 'paris',
          title: 'ali444444444444444444444444444444444444444444444'
        },
        {
          id: 5,
          author: 'paris',
          title: 'ali555555555555555555555555555555555555555555555'
        },
        { id: 6, author: 'paris', title: 'ali666666666666666666' },
        {
          id: 7,
          author: 'paris',
          title: 'ali777777777777777777777777777777777777777777777'
        },
        {
          id: 8,
          author: 'paris',
          title: 'ali8888888888888888888888888888888888888888888'
        },
        {
          id: 9,
          author: 'paris',
          title: 'ali9999999999999999999999999999999999999999999999'
        },
        { id: 10, author: 'paris', title: 'ali10101010101010101010' },
        {
          id: 11,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 12,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 13,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 14,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 15,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 16,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 17,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 18,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 19,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        },
        {
          id: 20,
          author: 'paris',
          title: 'ali00000000000000000000000000000000000000000000'
        }
      ]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.list1 = this.items.splice(0, 5)
      this.list2 = this.items
    }
  }
}
</script>

