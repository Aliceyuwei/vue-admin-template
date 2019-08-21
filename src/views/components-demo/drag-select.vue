<!-- Vue2.4中$attrs和$listeners的使用 -->
<template>
  <div class="components-container">
    <el-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-drag-select>
    <div style="margin-top:30px;">
      <el-tag v-for="item in value" :key="item" style="margin-right:15px;">{{ item }}</el-tag>
    </div>
  </div>
</template>

<script>
import ElDragSelect from '@/components/DragSelect';
export default {
  name: 'DragSelectDemo',
  components: { ElDragSelect },
  data() {
    return {
      options: [
        {
          value: 'apple',
          label: 'apple'
        },
        {
          value: 'banana',
          label: 'banana'
        },
        {
          value: 'candy',
          label: 'candy'
        },
        {
          value: 'drink',
          label: 'drink'
        },
        {
          value: 'orange',
          label: 'orange'
        }
      ],
      value: ['apple', 'banana', 'candy']
    }
  }
}
</script>

   <!--<div class="components-container">-->
    <!-- >>>>>兒子在這 -->
    <!--<el-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />-->
      <!-- 這就是送兒子的東西 也就是兒子裡的那個slot<<<<<<< -->
    <!--</el-drag-select>-->
    <!-- <el-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        slot="up"  *******具名slot*****
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-drag-select>-->
    <!-- <div style="margin-top:30px;">
      <el-tag v-for="item of value" :key="item" style="margin-right:15px;">{{ item }}</el-tag>
    </div>
  </div>-->
