<template>
  <div>
    <h2 class="mb-4">Facturas Emitidas</h2>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-primary">
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Monto (Bs)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(factura, index) in store.facturas" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ factura.cliente }}</td>
            <td>{{ factura.fecha }}</td>
            <td>{{ factura.monto }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useFacturaStore } from '../store'
const store = useFacturaStore()
</script>
