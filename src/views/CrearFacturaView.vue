<template>
  <div class="glass-panel container">
    <h2 class="section-title">Nueva Factura</h2>

    <div class="form-group">
      <label class="form-label">Cliente</label>
      <select v-model="nuevaFactura.clienteId" class="form-input">
        <option disabled value="">Seleccione un cliente</option>
        <option v-for="c in clientes" :key="c.id" :value="c.id">
          {{ c.nombre }}
        </option>
      </select>
    </div>

    <div v-for="(p, i) in nuevaFactura.productos" :key="i" class="form-group">
      <label class="form-label">Producto {{ i + 1 }}</label>
      <select v-model="p.productoId" class="form-input">
        <option disabled value="">Seleccione</option>
        <option v-for="pd in productosDisponibles" :value="pd.id">
          {{ pd.nombre }}
        </option>
      </select>

      <input
        type="number"
        v-model="p.cantidad"
        class="form-input mt-2"
        min="1"
        placeholder="Cantidad"
      />

      <button class="btn btn-danger mt-1" @click="eliminarProducto(i)">
        Eliminar
      </button>
    </div>
    <div class="glass-panel mt-4">
      <h3 class="section-title">Resumen</h3>
      <table class="form-group" style="width: 100%">
        <tbody>
          <tr>
            <td>Subtotal:</td>
            <td style="text-align: right">Bs {{ resumenFactura.subtotal }}</td>
          </tr>
          <tr>
            <td>Impuesto (13%):</td>
            <td style="text-align: right">Bs {{ resumenFactura.impuesto }}</td>
          </tr>
          <tr>
            <td><strong>Total:</strong></td>
            <td style="text-align: right">
              <strong>Bs {{ resumenFactura.total }}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button class="btn btn-secondary mt-2" @click="agregarProducto">
      + Agregar Producto
    </button>
    <button class="btn btn-primary mt-4" @click="guardarFactura">
      Emitir Factura
    </button>
  </div>
</template>

<script>
// import FacturaForm from '../components/FacturaForm.vue'
// import DetalleFactura from '../components/DetalleFactura.vue'
import api from "../utils/api";

export default {
  data() {
    return {
      clientes: [],
      productosDisponibles: [],
      nuevaFactura: {
        clienteId: 2,
        productos: [],
      },
    };
  },
  mounted() {
    this.cargarClientes();
    this.cargarProductos();
  },
  computed: {
    resumenFactura() {
      const detalles = this.nuevaFactura.productos;
      const productosMap = Object.fromEntries(
        this.productosDisponibles.map((p) => [p.id, p])
      );

      let subtotal = 0;

      for (const item of detalles) {
        const producto = productosMap[item.productoId];
        if (producto && item.cantidad > 0) {
          subtotal += producto.precio * item.cantidad;
        }
      }

      const impuesto = subtotal * 0.13;
      const total = subtotal + impuesto;

      return {
        subtotal: subtotal.toFixed(2),
        impuesto: impuesto.toFixed(2),
        total: total.toFixed(2),
      };
    },
  },
  methods: {
    async cargarClientes() {
      const res = await api.get("/clientes");
      this.clientes = res.data;
    },
    async cargarProductos() {
      const res = await api.get("/productos");
      this.productosDisponibles = res.data;
    },
    agregarProducto() {
      this.nuevaFactura.productos.push({ productoId: null, cantidad: 1 });
    },
    eliminarProducto(index) {
      this.nuevaFactura.productos.splice(index, 1);
    },
    async guardarFactura() {
  if (
    !this.nuevaFactura.clienteId ||
    this.nuevaFactura.productos.length === 0
  ) {
    alert("Debe seleccionar un cliente y al menos un producto.");
    return;
  }

  const usuarioId = 2; // o usa tu store si tienes login dinámico
  const fechaActual = new Date().toISOString();

  // Generar un número único de factura (esto puede mejorarse en el backend)
  const numeroFactura = "NF-" + Math.floor(Math.random() * 9000 + 1000);

  const productosMap = Object.fromEntries(
    this.productosDisponibles.map((p) => [p.id, p])
  );

  const detalles = this.nuevaFactura.productos.map((item) => {
    const producto = productosMap[item.productoId];
    return {
      productoId: item.productoId,
      cantidad: item.cantidad,
      precioUnitario: parseFloat(producto.precio), // importante que sea number
    };
  });

  const subtotal = detalles.reduce((acc, d) => acc + d.precioUnitario * d.cantidad, 0);
  const impuesto = subtotal * 0.13;
  const total = subtotal + impuesto;

  const facturaFinal = {
    numero: numeroFactura,
    fecha: fechaActual,
    clienteId: this.nuevaFactura.clienteId,
    usuarioId,
    subtotal: parseFloat(subtotal.toFixed(2)),
    impuesto: parseFloat(impuesto.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
    detalles,
  };

  console.log("Factura final a enviar: ", facturaFinal);

  try {
    const res = await api.post("/facturas", facturaFinal);
    const facturaId = res.data.id;

    alert("✅ Factura emitida correctamente");

    window.open(`/api/facturas/${facturaId}/pdf`, "_blank");
    this.$router.push("/ver-facturas");
  } catch (error) {
    alert("❌ Ocurrió un error al emitir la factura");
    console.error(error);
  }
}
,
  },
};
</script>

<style scoped>
.factura-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: start;
}

.panel-title {
  color: #00f5ff;
  font-size: 1.3rem;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .factura-container {
    grid-template-columns: 1fr;
  }
}
</style>
