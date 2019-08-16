<template>
  <div class="components-container board">
    <div class="kanban todo">
      <div class="board-column">
        <div class="board-column-header">待辦事項</div>
        <!-- <draggable> -->
        <div class="board-column-content">
          <draggable class="draggable" :list="list1" :group="group">
            <div
              v-for="element in list1"
              :key="element.id"
              class="board-item"
            >{{ element.id }}{{ element.name }}</div>
          </draggable>
        </div>
        <!-- </draggable> -->
      </div>
    </div>
    <div class="kanban working">
      <div class="board-column">
        <div class="board-column-header">進行中</div>
        <div class="board-column-content">
          <draggable class="draggable" :list="list2" :group="group">
            <div
              v-for="element in list2"
              :key="element.id"
              class="board-item"
            >{{ element.id }}{{ element.name }}</div>
          </draggable>
        </div>
      </div>
    </div>
    <div class="kanban done">
      <div class="board-column">
        <div class="board-column-header">已完成</div>
        <div class="board-column-content">
          <draggable class="draggable" :list="list3" :group="group">
            <div
              v-for="element in list3"
              :key="element.id"
              class="board-item"
            >{{ element.id }}{{ element.name }}</div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  name: 'DragKanbanDemo',
  components: { draggable },
  data() {
    return {
      headerText: '9999',
      group: 'same',
      list1: [
        { name: 'Mission', id: 1 },
        { name: 'Mission', id: 2 },
        { name: 'Mission', id: 3 },
        { name: 'Mission', id: 4 }
      ],
      list2: [
        { name: 'Mission', id: 5 },
        { name: 'Mission', id: 6 },
        { name: 'Mission', id: 7 }
      ],
      list3: [
        { name: 'Mission', id: 8 },
        { name: 'Mission', id: 9 },
        { name: 'Mission', id: 10 }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss">
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.kanban {
  .board-column {
    min-width: 300px;
    min-height: 100px;
    height: auto;
    overflow: hidden;
    // background-color: #f9944a;
    background: #f0f0f0;
    border-radius: 3px;

    .board-column-header {
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      padding: 0 20px;
      text-align: center;
      background: #333;
      color: #fff;
      border-radius: 3px 3px 0 0;
    }

    .board-column-content {
      height: auto;
      overflow: hidden;
      border: 10px solid transparent;
      min-height: 60px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      .draggable {
        width: 100%;
        .board-item {
          cursor: pointer;
          height: 64px;
          margin: 5px 0;
          background-color: #fff;
          text-align: left;
          line-height: 54px;
          padding: 5px 10px;
          box-sizing: border-box;
          box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  &.todo {
    .board-column-header {
      background: #4a9ff9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>

