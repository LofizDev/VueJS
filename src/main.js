import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "tw-elements";
// import VueAxios from 'vue-plugin-axios'
// import axios from 'axios'
import services from './common/services'
const app = createApp(App);
app.use(router);
app.mount("#app");
app.provide('services', services)
