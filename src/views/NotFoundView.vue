<template>
  <div class="not-found container">
    <div class="glass-panel error-panel">
      <h1 class="error-code">404</h1>
      <p class="error-message">Oops... Página no encontrada</p>
      <router-link to="/" class="btn btn-primary">🏠 Volver al inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.error-panel {
  text-align: center;
  padding: 60px 30px;
  animation: fadeInUp 0.8s ease-out;
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  color: #ff00f5;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(255, 0, 245, 0.6);
  animation: glow 2s ease-in-out infinite alternate;
}

.error-message {
  font-size: 1.3rem;
  color: #a0a0a0;
  margin-bottom: 30px;
}
</style>
