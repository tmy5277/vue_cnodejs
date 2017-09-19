import Vue from 'vue';
import Router from 'vue-router';

import Main from '../components/MainPage.vue';
import User from '../components/UserPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      components: {
      	main:Main,
      }},
      // {
      // path: '/topic/:id',
      // name: 'Article',
      // component: {
      // 	main:Article,
      // 	side:Side
      // }},
      {
      path: '/user/:loginname',
      name: 'User',
      components: {
      	main:User,
      }},
      
  ]
})
