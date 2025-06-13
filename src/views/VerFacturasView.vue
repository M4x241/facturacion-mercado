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
              <td>{{ factura.cliente?.nombre || "Sin nombre" }}</td>
              <td>Bs {{ Number(factura.total).toFixed(2) }}</td>

              <td>
                <button
                  class="btn btn-secondary"
                  @click="verDetalle(factura.id, factura.numero)"
                >
                  🔍 Ver
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <DetalleFactura
          v-if="facturaSeleccionada"
          :factura="facturaSeleccionada"
          @cerrar="facturaSeleccionada = null"
        />

        <div v-if="facturas.length === 0" class="no-facturas">
          <p>No hay facturas registradas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "../utils/formateadorFechas";
import facturaService from "../services/facturaService";
import DetalleFactura from "../components/DetalleFactura.vue";

export default {
  name: "VerFacturasView",
  components: {
    DetalleFactura,
  },
  data() {
    return {
      facturas: [],
      facturaSeleccionada: null,
    };
  },
  async mounted() {
    try {
      const response = await facturaService.obtenerFacturas();
      this.facturas = response;
    } catch (error) {
      console.error("Error al obtener facturas:", error);
    }
  },
  methods: {
    verDetalle(id, numero) {
      const API_BASE = import.meta.env.VITE_API_URL;

      window.open(`${API_BASE}/api/facturas/${id}/pdf`, "_blank");
    },
    formatearFecha(fecha) {
      return format(new Date(fecha));
    },
  },
};
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
