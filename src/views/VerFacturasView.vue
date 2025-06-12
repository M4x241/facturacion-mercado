<template>
  <div class="ver-facturas-view">
    <div class="container">
      <h1 class="section-title">📋 Historial de Facturas</h1>

      <div class="glass-panel table-container">
        <table class="facturas-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(factura, index) in facturas" :key="index">
              <td>{{ factura.numero }}</td>
              <td>{{ formatearFecha(factura.fecha) }}</td>
              <td>{{ factura.cliente }}</td>
              <td>${{ factura.total.toFixed(2) }}</td>
              <td>
                <button class="btn btn-secondary" @click="verDetalle(factura)">
                  🔍 Ver
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="facturas.length === 0" class="no-facturas">
          <p>No hay facturas registradas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from '../utils/formateadorFechas'

export default {
  name: 'VerFacturasView',
  data() {
    return {
      facturas: [
        {
          numero: 'NF-1023',
          fecha: '2025-06-10T15:30:00',
          cliente: 'Juan Pérez',
          total: 125.50
        },
        {
          numero: 'NF-1024',
          fecha: '2025-06-10T17:00:00',
          cliente: 'Ana López',
          total: 89.90
        },
        {
          numero: 'NF-1025',
          fecha: '2025-06-11T11:15:00',
          cliente: 'Carlos Rodríguez',
          total: 142.75
        }
      ]
    }
  },
  methods: {
    verDetalle(factura) {
      alert(`Detalle de factura ${factura.numero}\nCliente: ${factura.cliente}\nTotal: $${factura.total.toFixed(2)}`);
    },
    formatearFecha(fecha) {
      return format(new Date(fecha));
    }
  }
}
</script>

<style scoped>
.table-container {
  overflow-x: auto;
  padding: 20px;
}

.facturas-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-size: 0.95rem;
}

.facturas-table th,
.facturas-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.facturas-table th {
  background: rgba(255, 255, 255, 0.05);
  color: #00f5ff;
}

.no-facturas {
  text-align: center;
  padding: 30px;
  color: #a0a0a0;
  font-style: italic;
}
</style>
