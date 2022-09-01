import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './assets/style.scss'

import GAuth from "vue3-google-oauth2";
const gauthOption = {
  clientId: '59770724956-hnasop07s4rug1r5b25os104g83ssvn8.apps.googleusercontent.com',
  scope: 'profile email',
  plugin_name: 'PLUGIN',
  prompt: 'consent',
  fetch_basic_profile: true
}

const app = createApp(App)
  .use(router)
  .use(GAuth, gauthOption)
app.mount('#app')
