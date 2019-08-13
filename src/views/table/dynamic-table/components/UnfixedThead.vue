<template>
  <div class="app-container">
    unfixed
    <el-checkbox-group v-model="headform">
      <el-checkbox label="A" />
      <el-checkbox label="B" />
      <el-checkbox label="C" />
      <el-checkbox label="D" />
      <el-checkbox label="E" />
      <el-checkbox label="F" />
      <el-checkbox label="G" />
    </el-checkbox-group>
    <el-table :data="tableData" border fit>
      <el-table-column prop="Alpha" label="Alpha" width="180" />
      <el-table-column v-for="col in headform" :key="col.id" width="180" :label="col">
        <template slot-scope="{row}">
          <span>{{ row[col] }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headform: ['A', 'B', 'C'],
      tableData: [
        {
          id: 1,
          Alpha: 'Alpha1',
          A: 'A1',
          B: 'B1',
          C: 'C1',
          D: 'D1',
          E: 'E1',
          F: 'F1',
          G: 'G1'
        },
        {
          id: 2,
          Alpha: 'Alpha2',
          A: 'A2',
          B: 'B2',
          C: 'C2',
          D: 'D2',
          E: 'E2',
          F: 'F2',
          G: 'G2'
        },
        {
          id: 3,
          Alpha: 'Alpha3',
          A: 'A3',
          B: 'B3',
          C: 'C3',
          D: 'D3',
          E: 'E3',
          F: 'F3',
          G: 'G3'
        },
        {
          id: 4,
          Alpha: 'Alpha4',
          A: 'A4',
          B: 'B4',
          C: 'C4',
          D: 'D4',
          E: 'E4',
          F: 'F4',
          G: 'G4'
        }
      ]
    }
  }
}
</script>
<style>
</style>
