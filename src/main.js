import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(router);
app.mount('#app')