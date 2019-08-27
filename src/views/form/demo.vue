<template>
  <div class="app-container">
    etc demo
    <el-steps :space="200" :active="1" finish-status="success">
      <el-step title="已完成" description="描述性文字" />
      <el-step title="进行中" description="描述性文字" />
      <el-step title="步骤 3" description="描述性文字" />
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {}
  },
  created() {
    console.log('this:', this)
    console.log('this:this.$route', this.$route)
    console.log('this:this.$route.path', this.$route.path)
    console.log('this:this.$route.params', this.$route.params)
    console.log('this:this.$route.query', this.$route.query)
    console.log('this:this.$route.router', this.$route.router)
    console.log('this:this.$route.matched', this.$route.matched)
    console.log('this:this.$route.name', this.$route.name)
  }
}
</script>

<style scoped>
</style>

