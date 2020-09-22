import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueRoute from "vue-router";
import { routes } from "./route.js";
import {store} from "./store/store"

Vue.config.productionTip = false;
Vue.use(vueRoute);


const router = new vueRoute({
  routes,
});
new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
