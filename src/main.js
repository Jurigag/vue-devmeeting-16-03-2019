import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import './router/globalAuth.guard';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.config.devtools = true;
