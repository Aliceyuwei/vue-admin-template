<template>
  <div class="tab-container">tab</div>
</template>

<script>
//* ************note */ https://medium.com/@linwei5316/vue-router-4c2aad1cc352
// $route为当前router跳转对象里面可以获取name、path、query、params等
// $router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
// 返回上一个history也是使用$router.go方法
export default {
  name: 'Tab',

  data() {
    return {}
  },
  watch: {
    // 在路由跳转的时候除了用router-link标签以外需要在script标签在事件里面跳转，所以有个方法就是在script标签里面写this.$router.push('要跳转的路径名')，
  },
  created() {
    // init the default  selected tab
  },
  methods: {}
}
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
</style>
