<template>
  <div class="clientes-view">
    <div class="container">
      <h1 class="section-title">👥 Gestión de Clientes</h1>

      <div class="glass-panel">
        <form @submit.prevent="guardarCliente" class="form-grid">
          <input v-model="nuevoCliente.nombre" class="form-input" placeholder="Nombre completo" required />
          <input v-model="nuevoCliente.ci" class="form-input" placeholder="CI / NIT" required />
          <input v-model="nuevoCliente.email" class="form-input" type="email" placeholder="Correo" />
          <button type="submit" class="btn btn-primary">
            {{ editIndex === null ? '➕ Agregar' : '💾 Guardar' }}
          </button>
        </form>
      </div>

      <div class="glass-panel table-container">
        <table class="clientes-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>CI / NIT</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cliente, index) in clientes" :key="index">
              <td>{{ cliente.nombre }}</td>
              <td>{{ cliente.ci }}</td>
              <td>{{ cliente.email }}</td>
              <td>
                <button class="btn btn-secondary" @click="editarCliente(index)">✏️</button>
                <button class="btn btn-danger" @click="eliminarCliente(index)">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="clientes.length === 0" class="no-clientes">
          <p>No hay clientes registrados</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  data() {
    return {
      clientes: [],
      nuevoCliente: {
        nombre: '',
        nit: '',
        direccion: ''
      }
    }
  },
  mounted() {
    this.obtenerClientes()
  },
  methods: {
    async obtenerClientes() {
      const res = await api.get('/clientes')
      this.clientes = res.data
    },
    async crearCliente() {
      await api.post('/clientes', this.nuevoCliente)
      this.nuevoCliente = { nombre: '', nit: '', direccion: '' }
      this.obtenerClientes()
    },
    async eliminarCliente(id) {
      await api.delete(`/clientes/${id}`)
      this.obtenerClientes()
    }
  }
}
</script>


<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr auto;
  gap: 15px;
  align-items: end;
  margin-bottom: 30px;
}

.table-container {
  overflow-x: auto;
  padding: 20px;
}

.clientes-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-size: 0.95rem;
}

.clientes-table th,
.clientes-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.clientes-table th {
  background: rgba(255, 255, 255, 0.05);
  color: #00f5ff;
}

.no-clientes {
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
