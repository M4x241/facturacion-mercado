<template>
  <div class="home">
    <div class="container">
      <div class="hero-section">
        <h1 class="hero-title">Bienvenido a MacroMercado</h1>
        <p class="hero-subtitle">Sistema de Facturación Electrónica</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card glass-panel">
          <div class="stat-icon">📄</div>
          <div class="stat-number">{{ stats.totalFacturas }}</div>
          <div class="stat-label">Facturas Generadas</div>
        </div>
        
        <div class="stat-card glass-panel">
          <div class="stat-icon">💰</div>
          <div class="stat-number">${{ stats.totalVentas.toLocaleString() }}</div>
          <div class="stat-label">Total en Ventas</div>
        </div>
        
        <div class="stat-card glass-panel">
          <div class="stat-icon">👥</div>
          <div class="stat-number">{{ stats.totalClientes }}</div>
          <div class="stat-label">Clientes Activos</div>
        </div>
        
        <div class="stat-card glass-panel">
          <div class="stat-icon">📦</div>
          <div class="stat-number">{{ stats.totalProductos }}</div>
          <div class="stat-label">Productos en Stock</div>
        </div>
      </div>

      <div class="quick-actions">
        <h2 class="section-title">Acciones Rápidas</h2>
        <div class="actions-grid">
          <router-link to="/crear-factura" class="action-card glass-panel">
            <div class="action-icon">🚀</div>
            <h3>Nueva Factura</h3>
            <p>Crear una nueva factura electrónica</p>
          </router-link>
          
          <router-link to="/productos" class="action-card glass-panel">
            <div class="action-icon">📦</div>
            <h3>Gestionar Productos</h3>
            <p>Agregar y editar productos del inventario</p>
          </router-link>
          
          <router-link to="/reportes" class="action-card glass-panel">
            <div class="action-icon">📊</div>
            <h3>Ver Reportes</h3>
            <p>Análisis y estadísticas de ventas</p>
          </router-link>
          
          <router-link to="/clientes" class="action-card glass-panel">
            <div class="action-icon">👥</div>
            <h3>Gestionar Clientes</h3>
            <p>Administrar base de datos de clientes</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      stats: {
        totalFacturas: 1247,
        totalVentas: 89542.50,
        totalClientes: 324,
        totalProductos: 156
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00f5ff, #ff00f5, #f5ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(0, 245, 255, 0.5);
  animation: glow 2s ease-in-out infinite alternate;
  margin-bottom: 20px;
}

.hero-subtitle {
  color: #a0a0a0;
  font-size: 1.3rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

/* .stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
} */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 60px;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}


.stat-card {
  text-align: center;
  padding: 30px;
  cursor: pointer;
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #00f5ff;
  margin-bottom: 10px;
}

.stat-label {
  color: #a0a0a0;
  font-size: 1rem;
}

.quick-actions {
  margin-bottom: 40px;
}

/* .actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
} */

.action-card {
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-card:hover {
  transform: translateY(-10px) scale(1.05);
}

.action-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.action-card h3 {
  color: #00f5ff;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.action-card p {
  color: #a0a0a0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
