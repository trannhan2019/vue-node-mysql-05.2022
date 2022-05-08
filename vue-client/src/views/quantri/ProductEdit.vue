<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Swal from 'sweetalert2';
import productService from '../../services/productService';

const product = ref({
  name: '',
  description: '',
});

const loading = ref(false);

const router = useRouter();
const route = useRoute();

const handleSubmit = async () => {
  loading.value = true;
  try {
    const id = route.params.id;
    await productService.update(id, product.value);

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

onMounted(async () => {
  const id = route.params.id;
  const data = await productService.getOne(id);
  product.value = data.data.data;
});
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
              Edit
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
