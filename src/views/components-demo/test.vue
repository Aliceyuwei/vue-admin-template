<template>
  <div class="components-container">
    <!-- <div>o_O {{ $route.params.id }}</div> -->
    <!-- keep-alive 簡介 <keep-alive></keep-alive> -->
    <!-- https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/231141/ -->
    <!--  1. props: include & exclude 需要知道元件的 name，專案複雜的時候不是很好的選擇-->
    <!--  2. 增加 router.meta 屬性，使用 router.meta 拓展 eforeRouteLeave-->
    <!-- <keep-alive> : activated组件激活时调用 deactivated组件停用时调用  -->
    123
    <keep-alive :include="aliveInclude">
      <!-- 挑選旅遊國家 -->
      <step1-tour v-if="step===1" @done="goNext">1</step1-tour>

      <!-- 填寫遊客資料 -->
      <step2-passenger v-if="step===2" @done="goNext" @back="goBack">2</step2-passenger>

      <!-- 確認資料無誤 -->
      <step3-confirm v-if="step===3" @done="goNext" @back="goBack">3</step3-confirm>
    </keep-alive>
  </div>
</template>

<script>
import Step1Tour from '@/components/Step1Tour';
import Step2Passenger from '@/components/Step2Passenger';
import Step3Confirm from '@/components/Step3Confirm';
export default {
  name: 'TestDemo',
  components: { Step1Tour, Step2Passenger, Step3Confirm },
  // props: ['id'],
  data() {
    return {
      step: 1,
      flowSteps: [
        { step: 1, name: 'Step1Tour' },
        { step: 2, name: 'Step2Passenger' },
        { step: 3, name: 'Step3Confirm' }
      ]
    }
  },
  computed: {
    aliveInclude: function() {
      const cachedStep = this.flowSteps.filter(p => p.step <= this.step)
      return cachedStep.map(p => p.name)
    }
  },
  created() {
    // console.log(this.$route)
  },
  methods: {
    goNext() {
      this.step += 1
    },
    goBack() {
      this.step -= 1
    }
  }
}
</script>

<style scoped>
</style>

