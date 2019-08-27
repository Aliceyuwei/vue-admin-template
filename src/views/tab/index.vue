<template>
  <div class="tab-container">
    tab
    <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert
      :closable="false"
      style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;"
      title="Tab keep-alive demo"
      type="success"
    />
    <el-tabs v-model="activeTab" type="border-card" style="margin-top:15px;">
      <el-tab-pane v-for="tab in dataPanel" :key="tab.key" :label="tab.label" :name="tab.key">
        <keep-alive>
          <tab-panel v-if="activeTab==tab.key" :type="tab.key" @addCreated="addCreated" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
//* ************note */ https://medium.com/@linwei5316/vue-router-4c2aad1cc352
// $route为当前router跳转对象里面可以获取name、path、query、params等
// $router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
// 返回上一个history也是使用$router.go方法

import TabPanel from './components/TabPanel';
export default {
  name: 'Tab',
  components: { TabPanel },
  data() {
    return {
      dataPanel: [
        { name: 'China', label: 'China', key: 'CN' },
        { name: 'USA', label: 'USA', key: 'US' },
        { name: 'Japan', label: 'Japan', key: 'JP' },
        { name: 'Eurozone', label: 'Eurozone', key: 'EU' }
      ],
      activeTab: 'US',
      createdTimes: 0
    }
  },
  watch: {
    // 在路由跳转的时候除了用router-link标签以外需要在script标签在事件里面跳转，所以有个方法就是在script标签里面写this.$router.push('要跳转的路径名')，
    activeTab(val) {
      // this.$router.push(`${this.$route.path}?tab=${val}`)
      this.$router.push(`${this.$route.path}?tab=${val} `)
    }
  },
  created() {
    // init the default  selected tab
    const tab = this.$route.query.tab
    console.log('this:', this.$route.query.tab)
    if (tab) {
      this.activeTab = tab
    }
  },

  methods: {
    addCreated() {
      // console.log('????')
      this.createdTimes++
    }
  }
}
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
</style>
