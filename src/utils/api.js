import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-facturacion-dtw3.onrender.com/api/", // cambia si tu backend corre en otro puerto
  headers: {
    "Content-Type": "application/json",
  },
});

// Añadir token JWT si está disponible
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
