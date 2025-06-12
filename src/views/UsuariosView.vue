<template>
  <div class="usuarios-view">
    <div class="container">
      <h1 class="section-title">👤 Administración de Usuarios</h1>

      <div class="glass-panel">
        <form @submit.prevent="guardarUsuario" class="form-grid">
          <input
            v-model="nuevoUsuario.nombre"
            class="form-input"
            placeholder="Nombre del usuario"
            required
          />
          <input
            v-model="nuevoUsuario.email"
            type="email"
            class="form-input"
            placeholder="Correo"
            required
          />
          <select v-model="nuevoUsuario.rol" class="form-input" required>
            <option disabled value="">Rol</option>
            <option>Admin</option>
            <option>Vendedor</option>
          </select>
          <button type="submit" class="btn btn-primary">
            {{ editIndex === null ? '➕ Agregar' : '💾 Guardar' }}
          </button>
        </form>
      </div>

      <div class="glass-panel table-container">
        <table class="usuarios-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.rol }}</td>
              <td>
                <button class="btn btn-secondary" @click="editarUsuario(index)">✏️</button>
                <button class="btn btn-danger" @click="eliminarUsuario(index)">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="usuarios.length === 0" class="no-usuarios">
          <p>No hay usuarios registrados</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsuariosView',
  data() {
    return {
      usuarios: [
        { nombre: 'Administrador', email: 'admin@neo.com', rol: 'Admin' },
        { nombre: 'Mario Soto', email: 'mario@neo.com', rol: 'Vendedor' }
      ],
      nuevoUsuario: {
        nombre: '',
        email: '',
        rol: ''
      },
      editIndex: null
    }
  },
  methods: {
    guardarUsuario() {
      if (this.editIndex === null) {
        this.usuarios.push({ ...this.nuevoUsuario })
      } else {
        this.usuarios.splice(this.editIndex, 1, { ...this.nuevoUsuario })
        this.editIndex = null
      }
      this.resetFormulario()
    },
    eliminarUsuario(index) {
      this.usuarios.splice(index, 1)
    },
    editarUsuario(index) {
      this.nuevoUsuario = { ...this.usuarios[index] }
      this.editIndex = index
    },
    resetFormulario() {
      this.nuevoUsuario = { nombre: '', email: '', rol: '' }
    }
  }
}
</script>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr auto;
  gap: 15px;
  align-items: end;
  margin-bottom: 30px;
}

.table-container {
  overflow-x: auto;
  padding: 20px;
}

.usuarios-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-size: 0.95rem;
}

.usuarios-table th,
.usuarios-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.usuarios-table th {
  background: rgba(255, 255, 255, 0.05);
  color: #00f5ff;
}

.no-usuarios {
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
