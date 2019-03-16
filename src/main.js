import Vue from 'vue'
import App from './App.vue'
import vee from 'vee-validate';
import router from './router/index';
import './router/globalAuth.guard';
import ClipLoader from 'vue-spinner/src/ClipLoader';
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";

Vue.config.productionTip = false;
Vue.use(vee);
Vue.component('BaseButton', BaseButton);
Vue.component('ClipLoader', ClipLoader);
Vue.component('BaseInput', BaseInput);

new Vue({
  router,
  ClipLoader,
  render: h => h(App),
}).$mount('#app')

Vue.config.devtools = true;
