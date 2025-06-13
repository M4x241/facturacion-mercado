// src/services/facturaService.js

import api from "../utils/api";

export default {
  async obtenerFacturas() {
    const res = await api.get("/facturas");
    return res.data;
  },
};
