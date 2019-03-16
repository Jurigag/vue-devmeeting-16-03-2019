import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import './router/globalAuth.guard';
import ClipLoader from 'vue-spinner/src/ClipLoader';
import BaseButton from "@/components/BaseButton";

Vue.config.productionTip = false;
Vue.component('BaseButton', BaseButton);
Vue.component('ClipLoader', ClipLoader);

new Vue({
  router,
  ClipLoader,
  render: h => h(App),
}).$mount('#app')

Vue.config.devtools = true;
