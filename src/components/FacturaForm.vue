<template>
  <form @submit.prevent="emitirFactura">
    <div class="mb-3">
      <label class="form-label">Cliente</label>
      <input v-model="factura.cliente" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Fecha</label>
      <input type="date" v-model="factura.fecha" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Monto (Bs)</label>
      <input type="number" v-model="factura.monto" class="form-control" required min="0" />
    </div>
    <button type="submit" class="btn btn-success">Emitir</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['crear'])

const factura = ref({
  cliente: '',
  fecha: '',
  monto: 0
})

const emitirFactura = () => {
  emit('crear', { ...factura.value })
  factura.value = { cliente: '', fecha: '', monto: 0 }
}
</script>
