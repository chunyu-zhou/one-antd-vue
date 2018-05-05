import Vue from 'vue';
import VueRouter from 'vue-router';
import 'highlight.js/styles/solarized-light.css';
import App from './App';
import routerMap from './routers';
// import 'highlight.js/styles/color-brewer.css';
import Antdui from '../src';
// import '../package/style/vue-antdui.css';
// import Antdui from '../package/vue-antdui';
import components from './components';
// import locale from '../src/locale/lang/en';
import locale from '../src/locale/lang/zh-CN';

window.Promise = Promise;
Vue.use(VueRouter);
Vue.use(Antdui, { locale });
Vue.use(components);

window.Vue = Vue;
Vue.config.productionTip = false;

window.router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routerMap,
});

new Vue({
    el: '#app',
    router: window.router,
    render: h => h(App),
});
