<template>
  <div class="glass-panel">
    <h3 class="section-title">Ventas por Mes</h3>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS, Title, Tooltip, Legend,
  BarElement, CategoryScale, LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarVentas',
  components: { Bar },
  props: ['datos'],
  computed: {
    chartData() {
      return {
        labels: this.datos.map(d => d.mes),
        datasets: [{
          label: 'Total Bs',
          data: this.datos.map(d => d.total),
          backgroundColor: 'rgba(0, 245, 255, 0.7)'
        }]
      }
    },
    chartOptions() {
      return {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  }
}
</script>
