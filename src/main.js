import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import * as bootstrap from 'bootstrap' // <-- necesario para que bootstrap esté disponible



const app = createApp(App);

app.use(router);
app.use(createPinia()); // si usas pinia
app.mount("#app");
