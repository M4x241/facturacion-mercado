<template>
  <div class="glass-panel chart-container">
    <h2 class="section-title">🥧 Productos Más Vendidos</h2>
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ['Arroz', 'Azúcar', 'Fideos', 'Aceite', 'Leche'],
        datasets: [
          {
            label: 'Unidades vendidas',
            data: [120, 90, 150, 80, 100],
            backgroundColor: [
              '#00f5ff',
              '#ff00f5',
              '#f5ff00',
              '#00ff95',
              '#ff8855'
            ],
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 2
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#ffffff'
            }
          },
          title: {
            display: true,
            text: 'Distribución por producto',
            color: '#ffffff',
            font: {
              size: 18
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  height: 400px;
  padding: 20px;
}
</style>
