<template>
  <div class="factura">
    <p><strong>Cliente:</strong> {{ factura.cliente }}</p>
    <p><strong>Fecha:</strong> {{ factura.fecha }}</p>
    <p><strong>Monto:</strong> Bs {{ factura.monto }}</p>
  </div>
</template>

<script setup>
defineProps({
  factura: Object
})
</script>

<style scoped>
.factura {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
