<template>
  <div>
    <h2 class="mb-4">Escritorio</h2>

    <!-- Tarjetas -->
    <div class="row g-3 mb-4">
      <div class="col-md-6 col-xl-3" v-for="card in dashboardCards" :key="card.title">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text fs-4">{{ card.value }}</p>
            <small class="text-muted">{{ card.subtitle }}</small>
          </div>
        </div>
      </div>
    </div>

    <!-- Gráfica de barras -->
    <div class="card shadow-sm mb-4">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0">Ventas por Semana</h5>
      </div>
      <div class="card-body">
        <BarChart :chartData="barChartData" :chartOptions="barChartOptions" />
      </div>
    </div>

    <!-- Gráfica de pastel -->
    <div class="card shadow-sm">
      <div class="card-header bg-secondary text-white">
        <h5 class="mb-0">Productos Más Vendidos</h5>
      </div>
      <div class="card-body">
        <PieChart :chartData="pieChartData" :chartOptions="pieChartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'

const dashboardCards = [
  { title: 'Ventas del Día', value: 'Bs 1,200.00', subtitle: '3 facturas' },
  { title: 'Ventas Semana', value: 'Bs 7,580.50', subtitle: '21 facturas' },
  { title: 'Comprobantes Emitidos', value: '105', subtitle: 'Este mes' },
  { title: 'Clientes Registrados', value: '250', subtitle: 'Hasta hoy' }
]

// Gráfico de barras
const barChartData = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Bs en Ventas',
      backgroundColor: '#0d6efd',
      data: [300, 450, 320, 520, 610, 400, 200]
    }
  ]
}

const barChartOptions = {
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

// Gráfico de pastel
const pieChartData = {
  labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D'],
  datasets: [
    {
      backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545'],
      data: [25, 40, 20, 15]
    }
  ]
}

const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}
</script>
