import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: () => import("@/views/DashboardView.vue"),
  //   meta: { requiresAuth: true },
  // },
  {
    path: "/crear-factura",
    name: "CrearFactura",
    component: () => import("../views/CrearFacturaView.vue"),
  },
  {
    path: "/ver-facturas",
    name: "VerFacturasView",
    component: () => import("../views/VerFacturasView.vue"),
  },
  {
    path: "/productos",
    name: "Productos",
    component: () => import("../views/ProductosView.vue"),
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: () => import("../views/ClientesView.vue"),
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: () => import("../views/UsuariosView.vue"),
  },
  {
    path: "/reportes",
    name: "Dashboard",
    component: () => import("@/views/DashboardView.vue"),
    // name: "ReportesView",
    // component: () => import("../views/ReportesView.vue"),
  },
  {
    path: "/configuracion",
    name: "Configuracion",
    component: () => import("../views/ConfiguracionEmpresaView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
