import { createApp } from 'vue';
import setupSvgIcons from '@/plugins/SvgIcons';
import App from './App.vue';
import { setupI18n } from './locales';
import { setupRouter } from './router';
import { setupStore } from './store';
import 'virtual:svg-icons-register';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import 'virtual:uno.css';
import '@unocss/reset/normalize.css';
import './styles/index.scss';

function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);

  setupSvgIcons(app);

  setupI18n(app);

  app.mount('#app');
}

bootstrap();
