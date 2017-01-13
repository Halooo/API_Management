// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
import {routes} from './config/routes.config'

const router = new VueRouter({
	routes: routes
});

new Vue({
	// el: '#app',
	router: router,
	render: h => h(App),
	// template: '<App/>',
	// components: { App },
}).$mount('#app');
