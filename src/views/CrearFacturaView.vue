<template>
  <div class="crear-factura">
    <div class="container">
      <h1 class="section-title">🚀 Crear Nueva Factura</h1>
      
      <div class="factura-container">
        <div class="left-panel">
          <div class="glass-panel">
            <h2 class="panel-title">📋 Información de la Factura</h2>
            <FacturaForm @factura-creada="handleFacturaCreada" />
          </div>
        </div>
        
        <div class="right-panel">
          <div class="glass-panel">
            <h2 class="panel-title">📊 Resumen</h2>
            <DetalleFactura 
              :productos="productos" 
              :subtotal="subtotal"
              :impuesto="impuesto"
              :total="total"
              @producto-removido="removeProducto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacturaForm from '../components/FacturaForm.vue'
import DetalleFactura from '../components/DetalleFactura.vue'

export default {
  name: 'CrearFacturaView',
  components: {
    FacturaForm,
    DetalleFactura
  },
  data() {
    return {
      productos: [],
      impuestoRate: 0.19
    }
  },
  computed: {
    subtotal() {
      return this.productos.reduce((sum, producto) => sum + (producto.cantidad * producto.precio), 0);
    },
    impuesto() {
      return this.subtotal * this.impuestoRate;
    },
    total() {
      return this.subtotal + this.impuesto;
    }
  },
  methods: {
    handleFacturaCreada(factura) {
      this.productos = factura.productos;
    },
    removeProducto(index) {
      this.productos.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.factura-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: start;
}

.panel-title {
  color: #00f5ff;
  font-size: 1.3rem;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .factura-container {
    grid-template-columns: 1fr;
  }
}
</style>