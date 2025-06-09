<template>
  <div>
    <h2 class="mb-4">Panel Principal</h2>

    <div class="row g-4">
      <div
        v-for="item in secciones"
        :key="item.titulo"
        class="col-12 col-sm-6 col-md-4 col-xl-3"
      >
        <router-link :to="item.ruta" class="text-decoration-none">
          <div class="card text-white text-center shadow-sm" :class="item.color">
            <div class="card-body d-flex flex-column align-items-center justify-content-center" style="height: 120px">
              <div class="fs-1">{{ item.icono }}</div>
              <h6 class="mt-2">{{ item.titulo }}</h6>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const secciones = [
  { titulo: 'Crear Factura', ruta: '/facturas/nueva', icono: '➕', color: 'bg-primary' },
  { titulo: 'Ver Facturas', ruta: '/facturas', icono: '📄', color: 'bg-success' },
  { titulo: 'Clientes', ruta: '/clientes', icono: '👥', color: 'bg-info' },
  { titulo: 'Productos', ruta: '/productos', icono: '📦', color: 'bg-warning text-dark' },
  { titulo: 'Reportes', ruta: '/reportes', icono: '📊', color: 'bg-danger' },
  { titulo: 'Configuración', ruta: '/configuracion', icono: '⚙️', color: 'bg-secondary' },
  { titulo: 'Usuarios', ruta: '/usuarios', icono: '🔑', color: 'bg-dark' }
]
</script>
