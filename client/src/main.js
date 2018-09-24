<<<<<<< HEAD
import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import './plugins/vuetify'
=======
import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
>>>>>>> 4cdc8645e1c8fa2d35e776d1bcf1c99ab6ae1f7f
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
