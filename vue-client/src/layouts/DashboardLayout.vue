<script setup>
import Header from './components/dashboard/Header.vue';
import Sidebar from './components/dashboard/Sidebar.vue';
import Footer from './components/dashboard/Footer.vue';
</script>

<template>
  <div class="dashboard">
    <Header />
    <div class="d-flex">
      <Sidebar />
      <router-view :key="$route.fullPath" />
    </div>
    <Footer />
  </div>
</template>
