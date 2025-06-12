<template>
  <div class="factura-form">
    <form @submit.prevent="agregarProducto" class="producto-form">
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Producto</label>
          <input 
            v-model="nuevoProducto.nombre" 
            type="text" 
            class="form-input" 
            placeholder="Nombre del producto"
            required
          >
        </div>
        
        <div class="form-group">
          <label class="form-label">Cantidad</label>
          <input 
            v-model.number="nuevoProducto.cantidad" 
            type="number" 
            class="form-input" 
            placeholder="1"
            min="1"
            required
          >
        </div>
        
        <div class="form-group">
          <label class="form-label">Precio Unitario</label>
          <input 
            v-model.number="nuevoProducto.precio" 
            type="number" 
            step="0.01" 
            class="form-input" 
            placeholder="0.00"
            min="0"
            required
          >
        </div>
        
        <div class="form-group btn-group">
          <button type="submit" class="btn btn-primary">➕ Agregar</button>
        </div>
      </div>
    </form>

    <div class="productos-list">
      <div v-if="productos.length === 0" class="empty-state">
        <div class="empty-icon">🛒</div>
        <p>No hay productos agregados</p>
      </div>
      
      <div v-else class="productos-container">
        <div v-for="(producto, index) in productos" :key="index" class="producto-item">
          <div class="producto-info">
            <div class="producto-nombre">{{ producto.nombre }}</div>
            <div class="producto-detalles">
              {{ producto.cantidad }} x ${{ producto.precio.toFixed(2) }}
            </div>
          </div>
          <div class="producto-total">${{ (producto.cantidad * producto.precio).toFixed(2) }}</div>
          <button @click="eliminarProducto(index)" class="btn-remove">🗑️</button>
        </div>
      </div>
    </div>

    <div class="form-actions">
      <button @click="generarFactura" class="btn btn-primary" :disabled="productos.length === 0">
        📄 Generar Factura
      </button>
      <button @click="limpiarFormulario" class="btn btn-secondary">
        🗑️ Limpiar Todo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FacturaForm',
  data() {
    return {
      productos: [],
      nuevoProducto: {
        nombre: '',
        cantidad: 1,
        precio: 0
      }
    }
  },
  methods: {
    agregarProducto() {
      if (this.nuevoProducto.nombre && this.nuevoProducto.cantidad > 0 && this.nuevoProducto.precio >= 0) {
        this.productos.push({
          nombre: this.nuevoProducto.nombre,
          cantidad: this.nuevoProducto.cantidad,
          precio: this.nuevoProducto.precio
        });
        this.resetFormulario();
        this.emitirCambios();
      }
    },
    eliminarProducto(index) {
      this.productos.splice(index, 1);
      this.emitirCambios();
    },
    resetFormulario() {
      this.nuevoProducto = {
        nombre: '',
        cantidad: 1,
        precio: 0
      };
    },
    limpiarFormulario() {
      this.productos = [];
      this.resetFormulario();
      this.emitirCambios();
    },
    generarFactura() {
      if (this.productos.length > 0) {
        const factura = {
          numero: 'NF-' + Date.now().toString().slice(-6),
          fecha: new Date().toISOString(),
          productos: [...this.productos]
        };
        this.$emit('factura-creada', factura);
        alert('Factura generada exitosamente: ' + factura.numero);
      }
    },
    emitirCambios() {
      this.$emit('factura-creada', { productos: [...this.productos] });
    }
  }
}
</script>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
  align-items: end;
}

.btn-group {
  display: flex;
  align-items: end;
}

.productos-container {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.producto-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  animation: slideIn 0.5s ease-out;
}

.producto-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #00f5ff;
  transform: translateX(5px);
}

.producto-info {
  flex: 1;
}

.producto-nombre {
  font-weight: bold;
  color: #00f5ff;
  margin-bottom: 5px;
}

.producto-detalles {
  font-size: 0.9rem;
  color: #a0a0a0;
}

.producto-total {
  color: #f5ff00;
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 10px;
}

.btn-remove {
  background: none;
  border: none;
  color: #ff4757;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn-remove:hover {
  background: rgba(255, 71, 87, 0.2);
  transform: scale(1.2);
}

.empty-state {
  text-align: center;
  color: #a0a0a0;
  padding: 40px 20px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
}

.form-actions {
  display: flex;
  gap: 15px;
}

.form-actions .btn {
  flex: 1;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
  }
}
</style>