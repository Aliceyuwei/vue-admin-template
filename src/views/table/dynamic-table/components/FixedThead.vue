<template>
  <div class="app-container">
    <!-- find its imp but fail -->
    <div class="filter-container">
      <el-checkbox-group v-model="formhead">
        <el-checkbox label="country" />
        <el-checkbox label="price" />
        <el-checkbox label="product" />
        <el-checkbox label="important" />
      </el-checkbox-group>
    </div>
    <el-table :key="key" :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column v-for="items in formhead" :key="items" :label="items">
        <template slot-scope="{row}">
          <span>{{ row[items] }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
const defaultFormThead = ['country', 'product']
export default {
  data() {
    return {
      defaultFormThead: ['country', 'price', 'product', 'important'], // all option
      /* defaultFormThead*/
      formhead: defaultFormThead, // use to render table-column
      checkboxVal: defaultFormThead, // USE TO HOOK WATCH
      // In order to watch defaultFormThead , I divice 'defaultFormThead' to two key
      // formhead&checkboxVal都指向同一個值defaultFormThead 所以我可以 用formhead來渲染col, 用checkboxVal來watch
      /* defaultFormThead*/
      key: 1, // table key
      tableData: [
        {
          date: '2016-05-02',
          country: 'EU',
          price: 10000,
          product: 'healthy food',
          important: 5
        },
        {
          date: '2016-05-04',
          country: 'CN',
          price: 30000,
          product: 'phone',
          important: 3
        },
        {
          date: '2016-05-01',
          country: 'US',
          price: 20000,
          product: '$$$$$$',
          important: 2
        },
        {
          date: '2016-05-03',
          country: 'JP',
          price: 50000,
          product: 'porn',
          important: 1
        },
        {
          date: '2016-05-03',
          country: 'FR',
          price: 40000,
          product: 'culture items',
          important: 4
        }
      ]
    }
  },
  watch: {
    checkboxVal(valArr) {
      this.formThead = this.formTheadOptions.filter(
        i => valArr.indexOf(i) >= 0
        // 好像是利用indexOf()但段此樹是否存在，在依照你原本arrformTheadOptions的順序
      )
      this.key = this.key + 1 // 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
    }
  }
}
</script>
<style>
</style>

