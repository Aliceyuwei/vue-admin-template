<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
  <!-- :id="id" :class="className" :style="{height:height,width:width}" 通常在父祖件，所以此處是傳給chart-->
</template>

<script>
import echarts from 'echarts';
import resize from './mixins/resize';
// import { type } from 'os';

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
    console.log(!this.chart, 'mouted this')
  },
  beforeDestroy() {
    console.log(!this.chart)
    if (!this.chart) {
      return
    }
    // 以下都是為了視畫面不卡頓
    this.chart.dispose() //API: 销毁实例，实例销毁后无法再被使用。
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        backgroundColor: '#fff',
        title: {
          top: 20,
          text: '~~我是標題~~',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: 'red'
          },
          left: '0%'
        },
        tooltip: {
          show: true,
          trigger: 'axis', // 触发类型
          axisPointer: {
            // 坐标轴指示器配置项
            // tooltip.axisPointer.type [ default: 'line' ]
            lineStyle: {
              color: '#57617B',
              width: 5,
              type: 'dashed',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10,
              opacity: 0.5
            }
          }
        },
        legend: {
          orient: 'vertical',
          top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['CMCC', 'CTCC', 'CUCC'],
          right: '4%',
          backgroundColor: 'aliceblue',
          textStyle: {
            fontSize: 12,
            color: '#000'
          },
          formatter: function(name) {
            return 'Legend ' + name
          },
          tooltip: {
            show: true
          }
        },
        grid: {
          show: true,
          top: 100,
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false, // 坐标轴两边留白
            axisTick: {
              // 坐标轴刻度相关设置
              alignWithLabel: true
            },
            axisLabel: {
              // 坐标轴刻度标签的相关设置
              // inside: true
            },
            axisLine: {
              symbol: 'arrow',
              lineStyle: {
                // color: '#57617B'
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'red' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'blue' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            data: [
              '13:00',
              '13:05',
              '13:10',
              '13:15',
              '13:20',
              '13:25',
              {
                value: '13:30',
                // 突出周一
                textStyle: {
                  fontSize: 20,
                  color: 'red'
                }
              },

              '13:35',
              '13:40',
              '13:45',
              '13:50',
              '13:55'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '(%)',
            axisTick: {
              // y座標刻度
              show: true
            },
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              lineStyle: {
                color: 'gold'
              }
            }
          }
        ],
        series: [
          // [(x1,y1),(x2,y2),(x3,y3),(x4,y4)]
          {
            name: 'CMCC',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              // 区域填充样式。
              normal: {
                color: new echarts.graphic.LinearGradient( // echarts中渐变色的使用 //echarts的官方API中都没有对这个API添加说明文档
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(137, 189, 27, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(137, 189, 27, 0)'
                    }
                  ],
                  true
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              // 折线拐点标志的样式 point
              normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12
              }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
          },
          {
            name: 'CTCC',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0, 136, 212, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(0, 136, 212, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12
              }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
          },
          {
            name: 'CUCC',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(219, 50, 51, 0.3)'
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(219, 50, 51, 0)'
                    }
                  ],
                  true
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
              }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
          }
        ]
      })
    }
  }
}
</script>
