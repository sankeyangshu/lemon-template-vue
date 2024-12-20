import { createApp } from 'vue';
import setupSvgIcons from '@/plugins/SvgIcons';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './store';
import 'virtual:svg-icons-register';
import 'virtual:uno.css';
import '@unocss/reset/normalize.css';

function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);

  setupSvgIcons(app);

  app.mount('#app');
}

bootstrap();
