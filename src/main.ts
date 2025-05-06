import { createApp } from 'vue';
import App from '@/App.vue';

// STYLES
import 'normalize.css';
import '@/assets/styles/main.css';

// APPLICATION
const app = createApp(App);

app.mount('#memory-game');

