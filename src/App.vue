<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <!-- Sidebar -->
      <aside class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark text-white min-vh-100">
  <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white">
    <h4 class="fs-5 d-none d-sm-inline">Facturación</h4>
    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
      <li><router-link to="/" class="nav-link px-0 text-white">🏠 <span class="ms-1 d-none d-sm-inline">Inicio</span></router-link></li>
      <li><router-link to="/facturas/nueva" class="nav-link px-0 text-white">➕ <span class="ms-1 d-none d-sm-inline">Crear Factura</span></router-link></li>
      <li><router-link to="/facturas" class="nav-link px-0 text-white">📄 <span class="ms-1 d-none d-sm-inline">Facturas</span></router-link></li>
      <li><router-link to="/clientes" class="nav-link px-0 text-white">👥 <span class="ms-1 d-none d-sm-inline">Clientes</span></router-link></li>
      <li><router-link to="/productos" class="nav-link px-0 text-white">📦 <span class="ms-1 d-none d-sm-inline">Productos</span></router-link></li>
      <li><router-link to="/reportes" class="nav-link px-0 text-white">📊 <span class="ms-1 d-none d-sm-inline">Reportes</span></router-link></li>
      <li><router-link to="/configuracion" class="nav-link px-0 text-white">⚙️ <span class="ms-1 d-none d-sm-inline">Configuración</span></router-link></li>
      <li><router-link to="/usuarios" class="nav-link px-0 text-white">🔑 <span class="ms-1 d-none d-sm-inline">Usuarios</span></router-link></li>
    </ul>
  </div>
  
</aside>

      <!-- Contenido -->
      <main class="col py-3">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.nav-link.router-link-exact-active {
  background-color: #0d6efd;
  font-weight: bold;
}
</style>
