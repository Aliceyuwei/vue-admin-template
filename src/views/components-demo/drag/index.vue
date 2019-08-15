<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="drag">
      <!-- 我在component/drad/index.vue -->
      <router-view />
      <!-- <router-view />就是下面的路徑 -->
    </el-alert>
  </div>
</template>
