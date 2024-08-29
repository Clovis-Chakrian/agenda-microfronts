import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import { cssLifecycleFactory } from 'vite-plugin-single-spa/ex';

import './assets/main.css'

import App from './App.vue';
import router from './router';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance(app) {
    app.use(router);
    app.mount('#app')
  },
});

const cssLc = cssLifecycleFactory('spa');

export const bootstrap = [cssLc.bootstrap, vueLifecycles.bootstrap];
export const mount = [cssLc.mount, vueLifecycles.mount];
export const unmount = [cssLc.unmount, vueLifecycles.unmount];
