<!-- Vue2.4中$attrs和$listeners的使用 -->
<template>
  <div class="components-container">
    <h1>Vue CountTo</h1>
    <countTo
      ref="count"
      :start-val="_startVal"
      :end-val="_endVal"
      :duration="_duration"
      :decimals="_decimals"
      :separator="_separator"
      :prefix="_prefix"
      :suffix="_suffix"
      :autoplay="false"
      class="example"
    >456</countTo>
    <div class="btn">
      <div class="startBtn example-btn" @click="start">Start</div>
      <div class="pause-resume-btn example-btn" @click="pauseResume">pause/resume</div>
    </div>
    <div class="custzone">
      <label for="startVal">
        startVal:
        <input
          v-model.number="setStartVal"
          type="number"
          name="startVal"
          placeholder="开始的数值"
        >
      </label>
      <label for="endVal">
        endVal:
        <input v-model.number="setEndVal" type="number" name="endVal" placeholder="结束的数值" >
      </label>
      <label for="duration">
        duration:
        <input
          v-model.number="setDuration"
          type="number"
          name="duration"
          placeholder="持续时间(毫秒)"
        >
      </label>
      <label for="decimals">
        decimals:
        <input
          v-model.number="setDecimals"
          type="number"
          name="decimals"
          placeholder="小数的位数"
        >
      </label>
      <label for="decimal">
        decimal:
        <input v-model="setDecimal" type="text" name="decimal" placeholder="小数点表示符合" >
      </label>
      <label for="separator">
        separator:
        <input v-model="setSeparator" type="text" name="separator" placeholder="数字分割符" >
      </label>
      <label class="label" for="prefixInput">
        prefix:
        <input v-model="setPrefix" type="text" name="prefixInput" placeholder="前綴" >
      </label>
      <label class="label" for="suffixInput">
        suffix:
        <input v-model="setSuffix" type="text" name="suffixInput" placeholder="後綴" >
      </label>
    </div>
    <aside>
      count-to :start-val={{ setStartVal }} :end-val={{ setEndVal }} :duration={{ setDuration }}
      :decimals={{ setDecimals }} :separator={{ setDecimal }} :prefix={{ setPrefix }} :suffix={{ setSuffix }}
      :autoplay=false
    </aside>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  name: 'CountToDemo',
  components: { countTo },
  data() {
    return {
      setStartVal: 1000,
      setEndVal: 2017,
      setDuration: 7000,
      setDecimals: 2,
      setDecimal: '.',
      setSeparator: ',',
      setSuffix: ' NT',
      setPrefix: '$'
    }
  },
  computed: {
    _startVal() {
      console.log(this.setStartVal)
      if (this.setStartVal) {
        return this.setStartVal
      } else {
        return 0
      }
    },
    _endVal() {
      console.log(this.setEndVal)
      if (this.setEndVal) {
        return this.setEndVal
      } else {
        return 0
      }
    },
    _duration() {
      console.log(this.setDuration)
      if (this.setDuration) {
        return this.setDuration
      } else {
        return 100
      }
    },
    _decimals(a) {
      // 小數點
      console.log(this.setDecimals)
      if (this.setDecimals) {
        if (this.setDecimals < 0 || this.setDecimals > 20) {
          alert('noooooooo 超過上限了')
          return;
        }
        return this.setDecimals
      } else {
        return 0
      }
    },
    // _decimal() {
    //   // 數字分割符
    //   // return this.decimal
    // },
    _separator() {
      console.log(this.setDecimals)
      return this.separator
    },
    _suffix() {
      return this.setSuffix
    },
    _prefix() {
      return this.setPrefix
    }
  },
  methods: {
    start() {
      return this.$refs.count.start()
      // console.log('start', this.$refs.count.start())
    },
    pauseResume() {
      return this.$refs.count.pauseResume()
      // console.log('pauseResume')
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: #4ab7bd;
  font-size: 60px;
  text-align: center;
}
.example {
  font-size: 50px;
  color: #f6416c;
  display: block;
  margin: 10px 0;
  text-align: center;
  font-size: 80px;
  font-weight: 500;
}
.btn {
  width: 100%;
  display: inline-block;
  text-align: center;
  margin: 20px 0px;
  .example-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    padding: 4px 15px;
    font-size: 12px;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    &:hover {
      color: #4ab7bd;
      background-color: #fff;
      border-color: #4ab7bd;
    }
  }
  .startBtn {
    margin-left: 20px;
    font-size: 20px;
    color: #30b08f;
    background-color: #fff;
    &:hover {
      background-color: #30b08f;
      color: #fff;
      border-color: #30b08f;
    }
  }
  .pause-resume-btn {
    font-size: 20px;
    color: #e65d6e;
    background-color: #fff;
    &:hover {
      background-color: #e65d6e;
      color: #fff;
      border-color: #e65d6e;
    }
  }
}
.custzone {
  display: flex;
  justify-content: center;
  // border: 1px solid #4ab7bd;
  margin: 80px auto;
  label {
    color: #2f4f4f;
    font-size: 16px;
    display: inline-block;
    margin: 15px 30px 15px 0;
    background-color: aliceblue;
    input {
      position: relative;
      display: inline-block;
      padding: 4px 7px;
      width: 80px;
      height: 28px;
      cursor: text;
      font-size: 12px;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.65);
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      &::placeholder {
        color: #909399;
      }
    }
  }
}
</style>
