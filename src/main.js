import Vue from 'vue'
import App from './App.vue'
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router'
import router from './router'
import store from './vuex/store'

Vue.use(Ant);
Vue.use(VueRouter);



Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
