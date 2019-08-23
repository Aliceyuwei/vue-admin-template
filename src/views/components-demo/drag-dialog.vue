<template>
  <div class="components-container">
    vue-directive
    <!-- https://www.cnblogs.com/maruihua/p/10986082.html -->
    <!-- https://www.twblogs.net/a/5d159f66bd9eee1e5c827146 -->
    <!-- https://www.jianshu.com/p/120c102a561b -->
    <el-button type="primary" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      v-el-drag-dialog
      title="testtest"
      :visible.sync="dialogVisible"
      width="30%"
      @dragDialog="handleDrag"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog';
export default {
  name: 'DragDialogDemo',
  directives: { elDragDialog },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleDrag() {}
  }
}
</script>
