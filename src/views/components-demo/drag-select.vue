<template>
  <div class="components-container">
    <el-select v-model="value" multiple placeholder="请选择" style="width:500px;">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label" />
    </el-select>
    <div style="margin-top:30px;">
      <el-tag v-for="tag in value" :key="tag" style="margin-right:15px;">{{ tag }}</el-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '1',
          label: 'apple'
        },
        {
          value: '2',
          label: 'banana'
        },
        {
          value: '3',
          label: 'candy'
        },
        {
          value: '4',
          label: 'drink'
        },
        {
          value: '5',
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
