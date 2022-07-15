import { createApp } from 'vue';
import App from './components/app.vue';
import NodeCard from './components/NodeCard.vue';

let app = createApp(App);
app.component('node-card', NodeCard);

app.mount('#app');
