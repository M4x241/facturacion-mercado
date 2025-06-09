<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Facturación Mercado</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Inicio</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/facturas">Facturas</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/facturas/nueva">Crear</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
