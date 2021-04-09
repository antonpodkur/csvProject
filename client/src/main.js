import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AddDocument from './views/AddDocument'
import FindDocument from './views/FindDocument'
import Home from './views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "/add",
    component: AddDocument
  },
  {
    path: "/find",
    component: FindDocument
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
