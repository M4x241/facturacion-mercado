<template>
  <div class="configuracion-empresa-view">
    <div class="container">
      <h1 class="section-title">⚙️ Configuración de Empresa</h1>

      <div class="glass-panel">
        <form @submit.prevent="guardarConfiguracion" class="form-grid">
          <div class="form-group">
            <label class="form-label">Nombre de la Empresa</label>
            <input v-model="config.nombre" class="form-input" required />
          </div>

          <div class="form-group">
            <label class="form-label">NIT</label>
            <input v-model="config.nit" class="form-input" required />
          </div>

          <div class="form-group">
            <label class="form-label">Dirección</label>
            <input v-model="config.direccion" class="form-input" required />
          </div>

          <div class="form-group">
            <label class="form-label">Correo</label>
            <input v-model="config.correo" type="email" class="form-input" />
          </div>

          <div class="form-group">
            <label class="form-label">Logo (simulado)</label>
            <input type="file" class="form-input" @change="cargarLogo" />
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">💾 Guardar</button>
            <button type="button" class="btn btn-secondary" @click="restaurarValores">
              ♻️ Restaurar
            </button>
          </div>
        </form>

        <div v-if="logoPreview" class="logo-preview">
          <h3 class="section-title">Vista Previa del Logo</h3>
          <img :src="logoPreview" alt="Logo" class="logo-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfiguracionEmpresaView',
  data() {
    return {
      config: {
        nombre: 'SuperMarket Neo S.R.L.',
        nit: '1234567890',
        direccion: 'Av. Tecnológica #42',
        correo: 'contacto@superneo.com'
      },
      logoPreview: null
    }
  },
  methods: {
    guardarConfiguracion() {
      alert('✅ Configuración guardada con éxito.');
    },
    restaurarValores() {
      this.config = {
        nombre: 'SuperMarket Neo S.R.L.',
        nit: '1234567890',
        direccion: 'Av. Tecnológica #42',
        correo: 'contacto@superneo.com'
      };
      this.logoPreview = null;
    },
    cargarLogo(event) {
      const file = event.target.files[0];
      if (file) {
        this.logoPreview = URL.createObjectURL(file);
      }
    }
  }
}
</script>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.form-actions {
  grid-column: span 2;
  display: flex;
  gap: 15px;
}

.logo-preview {
  margin-top: 30px;
  text-align: center;
}

.logo-img {
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.1);
}
</style>
