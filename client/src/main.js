import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AddDocument from './components/AddDocument'
import FindDocument from './components/FindDocument'

Vue.use(VueRouter);

const routes = [
  {
    path: "",
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
