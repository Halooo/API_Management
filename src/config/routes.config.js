/**
 * Created by haos on 12/01/2017.
 */
export const routes = [{
  path: '/',
  name: 'hello',
  component: require('../components/Hello.vue')
},{
  path: '/api',
  component: require('../components/api/index.vue'),
  redirect: '/api/list',
  children: [{
    path: 'create',
    name: 'create',
    component: require('../components/api/create.vue'),
  }, {
    path: 'list',
    name: 'list',
    component: require('../components/api/list.vue'),
  }]
},];
