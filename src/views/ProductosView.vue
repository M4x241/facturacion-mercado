<template>
  <div>
    <h2 class="mb-4">Listado de Productos</h2>

    <div class="table-responsive shadow-sm rounded">
      <table class="table table-striped table-hover align-middle">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Código</th>
            <th>Categoría</th>
            <th>Precio (Bs)</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos" :key="producto.codigo">
            <td>{{ index + 1 }}</td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.codigo }}</td>
            <td>{{ producto.categoria }}</td>
            <td>{{ producto.precio.toFixed(2) }}</td>
            <td>
              <span class="badge bg-success" v-if="producto.stock > 0">{{ producto.stock }}</span>
              <span class="badge bg-danger" v-else>Agotado</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const productos = [
  {
    nombre: 'Laptop Dell Inspiron 15',
    codigo: 'P001',
    categoria: 'Electrónica',
    precio: 4800,
    stock: 12
  },
  {
    nombre: 'Mouse Inalámbrico Logitech',
    codigo: 'P002',
    categoria: 'Accesorios',
    precio: 150,
    stock: 25
  },
  {
    nombre: 'Impresora HP DeskJet 2720',
    codigo: 'P003',
    categoria: 'Oficina',
    precio: 790,
    stock: 6
  },
  {
    nombre: 'Silla Ergonómica Reclinable',
    codigo: 'P004',
    categoria: 'Muebles',
    precio: 1300,
    stock: 0
  },
  {
    nombre: 'Monitor Samsung 24” LED',
    codigo: 'P005',
    categoria: 'Pantallas',
    precio: 1250,
    stock: 8
  }
]
</script>
