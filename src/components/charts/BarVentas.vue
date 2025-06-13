<template>
    <div class="glass-panel">
      <h2 class="section-title">Gráfico de Ventas Mensuales</h2>
      <canvas ref="barChart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import Chart from 'chart.js/auto'
  
  const barChart = ref(null)
  
  const props = defineProps({
    datos: {
      type: Array,
      required: true
    }
  })
  
  onMounted(() => {
    new Chart(barChart.value, {
      type: 'bar',
      data: {
        labels: props.datos.map(e => e.mes),
        datasets: [{
          label: 'Ventas por Mes',
          data: props.datos.map(e => e.total),
          backgroundColor: 'rgba(0, 245, 255, 0.5)',
          borderColor: 'rgba(0, 245, 255, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Ventas Mensuales',
            color: '#00f5ff',
            font: {
              size: 18
            }
          }
        },
        scales: {
          x: {
            ticks: { color: '#00f5ff' },
            grid: { color: '#1a1a2e' }
          },
          y: {
            ticks: { color: '#00f5ff' },
            grid: { color: '#1a1a2e' }
          }
        }
      }
    })
  })
  </script>
  