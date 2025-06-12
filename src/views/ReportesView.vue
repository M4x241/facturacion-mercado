<template>
  <div class="reportes-view">
    <div class="container">
      <h1 class="section-title">📊 Reportes de Ventas</h1>
      
      <div class="graficos-grid">
        <BarChart />
        <PieChart />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'

export default {
  name: 'ReportesView',
  components: {
    BarChart,
    PieChart
  }
}
</script>

<style scoped>
.graficos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
</style>
