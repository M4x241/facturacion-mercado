import { createRouter, createWebHistory } from "vue-router";

// Vistas principales
import HomeView from "../views/HomeView.vue";
import CrearFacturaView from "../views/CrearFacturaView.vue";
import VerFacturasView from "../views/VerFacturasView.vue";
import ClientesView from "../views/ClientesView.vue";
import ProductosView from "../views/ProductosView.vue";
import ReportesView from "../views/ReportesView.vue";
import ConfiguracionEmpresaView from "../views/ConfiguracionEmpresaView.vue";
import UsuariosView from "../views/UsuariosView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/facturas/nueva", component: CrearFacturaView },
  { path: "/facturas", component: VerFacturasView },
  { path: "/clientes", component: ClientesView },
  { path: "/productos", component: ProductosView },
  { path: "/reportes", component: ReportesView },
  { path: "/configuracion", component: ConfiguracionEmpresaView },
  { path: "/usuarios", component: UsuariosView },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
