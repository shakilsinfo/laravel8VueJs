require('./bootstrap');
import Vue from 'vue/dist/vue';
window.Vue = require('vue');

import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';


// v form integration............... support
import Form from 'vform'
window.Form = Form; 

// sweet alert integration.............. support
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;

// vuex integration......................Support Vuex;
// NB: What is vueX? 
// Vuex is a state management pattern or library of VueJs. Its serve as a centralized store
// for all the components in an application.
// Vuex is used for centralize your all component with data processing and using
// each other components
import Vuex from 'vuex'
Vue.use(Vuex)

import storeManage from './store-manage/store';

const store = new Vuex.Store(
  storeManage
)


Vue.component(
    "admin-master", require("./components/backend/admin-master.vue").default
);

Vue.use(VueRouter);
Vue.use(VueAxios, axios);



const router = new VueRouter({
    mode: 'hash',
    routes: routes
});
 
const app = new Vue({
    el: '#main-wrapper',
    router,
    store,
    
});