<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

import productService from '../../services/productService';

const productList = ref(null);
const loading = ref(false);
const router = useRouter();

const handleDel = async (id) => {
  loading.value = true;
  try {
    await productService.delOne(id);
    loading.value = false;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
    //remove product form product list
    //c1: use splice
    const index = productList.value.findIndex(
      (product) => product.id === id
    );
    if (~index) {
      productList.value.splice(index, 1);
    }
    //c2:filter
    // productList.value = productList.value.filter(
    //   (product) => product.id != id
    // );
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  loading.value = true;
  try {
    const data = await productService.getAll();
    //console.log(data);
    loading.value = false;
    productList.value = data.data.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="px-2 w-100">
    <div class="row">
      <div class="col">
        <h3 class="title">PRODUCTS</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link
          :to="{ name: 'ProductAdd' }"
          class="btn btn-primary"
          >Create</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-hover" v-if="!loading">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="productList === null">
              No have products
            </tr>
            <tr
              v-else
              v-for="product in productList"
              :key="product.id"
            >
              <th scope="row">{{ product.id }}</th>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>
                <router-link
                  :to="{
                    name: 'ProductEdit',
                    params: { id: product.id },
                  }"
                  class="btn btn-sm btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-sm btn-danger ms-1"
                  @click="handleDel(product.id)"
                >
                  Del
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-else>Loading.....</p>
      </div>
    </div>
  </div>
</template>
