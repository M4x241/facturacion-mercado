<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <h1>MacroMercado</h1>
        <span class="nav-subtitle">Sistema de Facturación</span>
      </div>
      
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">🏠 Inicio</router-link>
        <router-link to="/crear-factura" class="nav-link" @click="closeMenu">📄 Nueva Factura</router-link>
        <router-link to="/ver-facturas" class="nav-link" @click="closeMenu">📋 Ver Facturas</router-link>
        <router-link to="/productos" class="nav-link" @click="closeMenu">📦 Productos</router-link>
        <router-link to="/clientes" class="nav-link" @click="closeMenu">👥 Clientes</router-link>
        <router-link to="/reportes" class="nav-link" @click="closeMenu">📊 Reportes</router-link>
        <router-link to="/usuarios" class="nav-link" @click="closeMenu">👤 Usuarios</router-link>
        <router-link to="/configuracion" class="nav-link" @click="closeMenu">⚙️ Configuración</router-link>
      </div>
      
      <div class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-brand h1 {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00f5ff, #ff00f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: glow 2s ease-in-out infinite alternate;
}

.nav-subtitle {
  color: #a0a0a0;
  font-size: 0.8rem;
  display: block;
  margin-top: -5px;
}

.nav-menu {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-link {
  color: #a0a0a0;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.nav-link:hover {
  color: #00f5ff;
  background: rgba(0, 245, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  color: #00f5ff;
  background: rgba(0, 245, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 3px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #00f5ff;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 20px;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-link {
    padding: 15px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>