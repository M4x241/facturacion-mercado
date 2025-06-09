import { defineStore } from "pinia";
import { ref } from "vue";

export const useFacturaStore = defineStore("factura", () => {
  const facturas = ref([]);

  const agregarFactura = (nueva) => {
    facturas.value.push(nueva);
  };

  return {
    facturas,
    agregarFactura,
  };
});
