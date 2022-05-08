import axiosClient from './axiosClient';

const productService = {
  getAll() {
    const url = '/products';
    return axiosClient.get(url);
  },

  getOne(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  create(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },

  update(id, data) {
    const url = `/products/${id}`;
    return axiosClient.put(url, data);
  },

  delOne(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productService;
