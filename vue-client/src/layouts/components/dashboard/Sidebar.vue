<script setup></script>

<template>
  <aside class="sidebar mt-2">
    <ul class="list-group">
      <li class="list-group-item">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li class="list-group-item">
        <router-link to="/product">Products</router-link>
      </li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  width: 250px;
}
</style>
