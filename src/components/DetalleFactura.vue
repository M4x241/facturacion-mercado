<template>
  <div class="detalle-factura">
    <div class="totales">
      <div class="total-row">
        <span>Subtotal:</span>
        <span>${{ subtotal.toFixed(2) }}</span>
      </div>
      <div class="total-row">
        <span>IVA (19%):</span>
        <span>${{ impuesto.toFixed(2) }}</span>
      </div>
      <div class="total-row final">
        <span>Total:</span>
        <span>${{ total.toFixed(2) }}</span>
      </div>
    </div>

    <div v-if="productos.length > 0" class="productos-resumen">
      <h3 class="resumen-title">🛒 Productos Agregados</h3>
      <div class="productos-mini-list">
        <div
          v-for="(producto, index) in productos"
          :key="index"
          class="producto-mini"
        >
          <span class="mini-nombre">{{ producto.nombre }}</span>
          <span class="mini-cantidad">x{{ producto.cantidad }}</span>
          <span class="mini-precio">
            ${{ (producto.cantidad * producto.precio).toFixed(2) }}
          </span>
          <button class="btn-remove" @click="$emit('producto-removido', index)">🗑️</button>
        </div>
      </div>
    </div>

    <div v-else class="no-productos">
      <div class="no-productos-icon">📦</div>
      <p>No hay productos agregados</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetalleFactura',
  props: {
    productos: {
      type: Array,
      default: () => []
    },
    subtotal: {
      type: Number,
      default: 0
    },
    impuesto: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.totales {
  margin-bottom: 30px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: white;
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.total-row.final {
  font-weight: bold;
  color: #f5ff00;
  font-size: 1.2rem;
  border: none;
  margin-top: 10px;
}

.resumen-title {
  color: #00f5ff;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.productos-mini-list {
  max-height: 250px;
  overflow-y: auto;
}

.producto-mini {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  animation: slideIn 0.4s ease;
}

.producto-mini:hover {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #00f5ff;
}

.mini-nombre {
  font-weight: bold;
  color: #00f5ff;
}

.mini-cantidad,
.mini-precio {
  font-size: 0.95rem;
  color: #a0a0a0;
  margin-left: 10px;
}

.btn-remove {
  background: none;
  border: none;
  color: #ff4757;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.3s ease;
}

.btn-remove:hover {
  transform: scale(1.2);
  color: #ff6b7a;
}

.no-productos {
  text-align: center;
  padding: 40px 20px;
  color: #a0a0a0;
  font-style: italic;
}

.no-productos-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}
</style>
