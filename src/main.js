// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/icon.css'
import '@/assets/styles/global.scss'

createApp(App).
  use(router).
  mount('#app');
