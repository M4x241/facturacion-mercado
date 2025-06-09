<template>
  <form @submit.prevent="emitirFactura">
    <!-- Cliente -->
    <div class="mb-3">
      <label class="form-label">Cliente</label>
      <input v-model="factura.cliente" class="form-control" required />
    </div>

    <!-- Fecha actual por defecto -->
    <div class="mb-3">
      <label class="form-label">Fecha</label>
      <input type="date" v-model="factura.fecha" class="form-control" required />
    </div>

    <!-- Productos dinámicos -->
    <div class="mb-3">
      <label class="form-label">Productos</label>
      <table class="table table-sm align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio (Bs)</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in factura.productos" :key="index">
            <td><input v-model="item.nombre" class="form-control" required /></td>
            <td><input v-model.number="item.cantidad" type="number" class="form-control" min="1" required /></td>
            <td><input v-model.number="item.precio" type="number" class="form-control" min="0" required /></td>
            <td>Bs {{ (item.cantidad * item.precio).toFixed(2) }}</td>
            <td><button type="button" class="btn btn-sm btn-danger" @click="eliminarProducto(index)">×</button></td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-outline-primary btn-sm" @click="agregarProducto">+ Añadir Producto</button>
    </div>

    <!-- Total -->
    <div class="mb-3 text-end">
      <strong>Total: Bs {{ totalFactura.toFixed(2) }}</strong>
    </div>

    <!-- Emitir -->
    <div class="text-end">
      <button type="submit" class="btn btn-success">Emitir y Generar PDF</button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


const emit = defineEmits(['crear'])

const hoy = new Date().toISOString().split('T')[0]

const factura = ref({
  cliente: '',
  fecha: hoy,
  productos: [
    { nombre: '', cantidad: 1, precio: 0 }
  ]
})

const agregarProducto = () => {
  factura.value.productos.push({ nombre: '', cantidad: 1, precio: 0 })
}

const eliminarProducto = (index) => {
  factura.value.productos.splice(index, 1)
}

const totalFactura = computed(() =>
  factura.value.productos.reduce((suma, p) => suma + (p.cantidad * p.precio), 0)
)

const emitirFactura = () => {
  const datos = {
    ...factura.value,
    total: totalFactura.value
  }

  emit('crear', datos)
  generarPDF(datos)

  // Reiniciar formulario
  factura.value = {
    cliente: '',
    fecha: hoy,
    productos: [{ nombre: '', cantidad: 1, precio: 0 }]
  }
}

// PDF
const generarPDF = (factura) => {
  const doc = new jsPDF()

  doc.setFontSize(16)
  doc.text('Factura', 14, 20)

  doc.setFontSize(10)
  doc.text(`Cliente: ${factura.cliente}`, 14, 30)
  doc.text(`Fecha: ${factura.fecha}`, 14, 36)

  const rows = factura.productos.map(p => [
    p.nombre,
    p.cantidad,
    p.precio.toFixed(2),
    (p.cantidad * p.precio).toFixed(2)
  ])

  autoTable(doc, {
    startY: 45,
    head: [['Producto', 'Cantidad', 'Precio (Bs)', 'Total']],
    body: rows
  })

  doc.text(`Total: Bs ${factura.total.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10)

  window.open(doc.output('bloburl'), '_blank')

}
</script>
