<template>
    <div class="container">
      <h2 class="section-title">Panel de Control</h2>
  
      <div class="glass-panel" v-if="cargando">
        <p>Cargando datos...</p>
      </div>
  
      <div v-else>
        <BarVentas :datos="datosMensuales" />
      </div>
    </div>
  </template>
  
  <script>
  import api from '@/utils/api'
  import BarVentas from '@/components/charts/BarVentas.vue'
  
  export default {
    name: 'DashboardView',
    components: { BarVentas },
    data() {
      return {
        datosMensuales: [],
        cargando: true
      }
    },
    async mounted() {
      try {
        const res = await api.get('/reportes/ventas-mensuales')
        this.datosMensuales = res.data.map(d => ({
          mes: d.mes,
          total: parseFloat(d.total)
        }))
      } catch (error) {
        console.error('Error al obtener los datos del dashboard:', error)
      } finally {
        this.cargando = false
      }
    }
  }
  </script>
  