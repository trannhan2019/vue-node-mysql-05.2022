import { createRouter, createWebHistory } from 'vue-router';
import DashboardLayout from '../layouts/DashboardLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardLayout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/quantri/Dashboard.vue'),
        },
        //product
        {
          path: '/product',
          name: 'Product',
          component: () => import('@/views/quantri/Product.vue'),
        },
        {
          path: '/product-add',
          name: 'ProductAdd',
          component: () => import('@/views/quantri/ProductAdd.vue'),
        },
        {
          path: '/product-edit/:id',
          name: 'ProductEdit',
          component: () => import('@/views/quantri/ProductEdit.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
