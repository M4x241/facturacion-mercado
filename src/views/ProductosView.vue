<template>
  <div class="productos-view">
    <div class="container">
      <h1 class="section-title">📦 Gestión de Productos</h1>

      <div class="glass-panel">
        <form @submit.prevent="agregarProducto" class="form-grid">
          <input
            v-model="nuevoProducto.nombre"
            class="form-input"
            placeholder="Nombre del producto"
            required
          />
          <input
            v-model.number="nuevoProducto.precio"
            type="number"
            step="0.01"
            class="form-input"
            placeholder="Precio"
            required
          />
          <input
            v-model.number="nuevoProducto.stock"
            type="number"
            class="form-input"
            placeholder="Stock"
            required
          />
          <button type="submit" class="btn btn-primary">➕ Agregar</button>
        </form>
      </div>

      <div class="glass-panel table-container">
        <table class="productos-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(producto, index) in productos" :key="index">
              <td>{{ producto.nombre }}</td>
              <td>${{ producto.precio.toFixed(2) }}</td>
              <td>{{ producto.stock }}</td>
              <td>
                <button
                  class="btn btn-secondary"
                  @click="editarProducto(index)"
                >
                  ✏️
                </button>
                <button class="btn btn-danger" @click="eliminarProducto(index)">
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="productos.length === 0" class="no-productos">
          <p>No hay productos registrados</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../utils/api";

export default {
  name: "ProductosView",
  data() {
    return {
      productos: [],
      nuevoProducto: {
        id: null,
        nombre: "",
        precio: 0,
        stock: 0,
      },
      editIndex: null,
    };
  },
  mounted() {
    this.cargarProductos();
  },
  methods: {
    async cargarProductos() {
      try {
        const res = await api.get("/productos");
        this.productos = res.data.map((p) => ({
          ...p,
          precio: Number(p.precio), // <- aquí está el truco
        }));
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    },
    async agregarProducto() {
      try {
        if (this.editIndex === null) {
          const res = await api.post("/productos", this.nuevoProducto);
          this.productos.push(res.data);
        } else {
          const id = this.nuevoProducto.id;
          await api.put(`/productos/${id}`, this.nuevoProducto);
          this.productos.splice(this.editIndex, 1, { ...this.nuevoProducto });
          this.editIndex = null;
        }
        this.resetFormulario();
      } catch (error) {
        console.error("Error al guardar producto:", error);
        alert("❌ Error al guardar el producto");
      }
    },
    async eliminarProducto(index) {
      const producto = this.productos[index];
      if (!confirm(`¿Eliminar "${producto.nombre}"?`)) return;

      try {
        await api.delete(`/productos/${producto.id}`);
        this.productos.splice(index, 1);
      } catch (error) {
        console.error("Error al eliminar producto:", error);
        alert("❌ No se pudo eliminar");
      }
    },
    editarProducto(index) {
      const producto = this.productos[index];
      this.nuevoProducto = { ...producto };
      this.editIndex = index;
    },
    resetFormulario() {
      this.nuevoProducto = {
        id: null,
        nombre: "",
        precio: 0,
        stock: 0,
      };
    },
  },
};
</script>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 15px;
  align-items: end;
  margin-bottom: 30px;
}

.table-container {
  overflow-x: auto;
  padding: 20px;
}

.productos-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-size: 0.95rem;
}

.productos-table th,
.productos-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.productos-table th {
  background: rgba(255, 255, 255, 0.05);
  color: #00f5ff;
}

.no-productos {
  text-align: center;
  padding: 30px;
  color: #a0a0a0;
  font-style: italic;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>
