<template>
  <div>
    <h2 class="mb-3">Emisión de Factura</h2>
    <!-- Botón para abrir el modal -->
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#crearFacturaModal"
    >
      Nueva Factura
    </button>
    <div class="text-center mt-5">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2936/2936884.png"
        width="150"
        alt="Factura"
      />
      <h5 class="mt-3">Aquí puedes emitir una nueva factura</h5>
      <p class="text-muted">
        Presiona el botón azul para registrar una transacción.
      </p>
    </div>

    <!-- debajo del botón de abrir modal -->
    <div class="mt-5">
      <h5>Última Factura Emitida</h5>
      <div class="card shadow-sm mt-3">
        <div class="card-body">
          <p><strong>Cliente:</strong> Juan Pérez</p>
          <p><strong>Fecha:</strong> 2025-06-08</p>
          <p><strong>Monto:</strong> Bs 350.00</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="crearFacturaModal"
      tabindex="-1"
      aria-labelledby="crearFacturaLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content shadow">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="crearFacturaLabel">Nueva Factura</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div class="modal-body">
            <FacturaForm @crear="guardarFactura" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import FacturaForm from '../components/FacturaForm.vue'
import { useFacturaStore } from '../store'
import * as bootstrap from 'bootstrap' // <-- IMPORTAR AQUÍ también

const store = useFacturaStore()

const guardarFactura = (factura) => {
  store.agregarFactura(factura)

  // Cerrar modal de forma segura si existe
  const modalElement = document.getElementById('crearFacturaModal')
  if (modalElement) {
    const modalInstance = bootstrap.Modal.getInstance(modalElement)
      || new bootstrap.Modal(modalElement)
    modalInstance.hide()
  }
}
</script>
