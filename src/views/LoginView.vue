<template>
    <div class="container glass-panel" style="max-width: 400px; margin-top: 100px;">
      <h2 class="section-title">Iniciar Sesión</h2>
  
      <div class="form-group">
        <label class="form-label">Correo electrónico</label>
        <input v-model="email" type="email" class="form-input" placeholder="ejemplo@correo.com" />
      </div>
  
      <div class="form-group">
        <label class="form-label">Contraseña</label>
        <input v-model="contrasena" type="password" class="form-input" placeholder="********" />
      </div>
  
      <button @click="iniciarSesion" class="btn btn-primary" style="width: 100%; margin-top: 20px;">
        Ingresar
      </button>
  
      <p v-if="error" class="form-label" style="color: #ff5e5e; margin-top: 10px;">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import api from '../utils/api'
  
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '',
        contrasena: '',
        error: ''
      }
    },
    methods: {
      async iniciarSesion() {
        try {
          const res = await api.post('/auth/login', {
            email: this.email,
            contrasena: this.contrasena
          })
          localStorage.setItem('token', res.data.token)
          this.$router.push('/') // redirige a la página principal
        } catch (err) {
          this.error = 'Credenciales incorrectas o error del servidor.'
          console.error(err)
        }
      }
    }
  }
  </script>
  