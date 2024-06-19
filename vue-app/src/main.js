import Vue from 'vue';
import App from '@/app.vue';
import router from './router';
import store from './store';
import './registerServiceWorker'
import { sync } from 'vuex-router-sync'
import ArgonDashboard from './plugins/argon-dashboard'

Vue.config.productionTip = false;
Vue.use(ArgonDashboard)
sync(store, router)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
