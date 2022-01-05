import { createApp } from 'vue'
import App from './App.vue'
import "./assets/global.css";

createApp(App).mount('#app')
// app.config.compilerOptions.isCustomElement = tag => tag.startsWith('Modal')