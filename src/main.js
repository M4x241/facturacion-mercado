import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

createApp(App).use(router).mount("#app");
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

app.use(router);
app.mount("#app");