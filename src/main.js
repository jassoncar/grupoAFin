import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Configuración de Axios antes de crear la instancia de Vue
axios.defaults.baseURL = 'https://randomuser.me/api/?results=10'; // Cambia esto a tu URL base
Vue.prototype.$axios = axios;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
