<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import productService from '../../services/productService';

const product = ref({
  name: '',
  description: '',
});

const loading = ref(false);

const router = useRouter();

const handleSubmit = async () => {
  loading.value = true;
  try {
    await productService.create(product.value);
    loading.value = false;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });

    router.push({
      name: 'Product',
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="row w-100">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label class="form-label">Product Name</label>
            <input
              v-model="product.name"
              type="text"
              class="form-control"
              placeholder="Enter product name"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="product.description"
            ></textarea>
          </div>

          <div class="btn-submit">
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="loading"
            >
              Create
            </button>
            <router-link to="/product" class="btn btn-secondary ms-3"
              >Back Product List</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
