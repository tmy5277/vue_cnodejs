import Vue from 'vue';
import Router from 'vue-router';

import Main from '../components/main.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: {
      	main:Main,
      }},
      {
      path: '/topic/:id',
      name: 'Article',
      component: {
      	main:Article,
      	side:Side
      }},
      {
      path: '/user/:loginname',
      name: 'User',
      component: {
      	main:User,
      }},
      
  ]
})
