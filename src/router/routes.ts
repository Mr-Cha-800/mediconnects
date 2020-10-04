import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/feed', component: () => import('pages/UserInterface/Customizedfeeds.vue') },
      { path: '/profile', component: () => import('pages/UserInterface/Profile.vue') },
      { path: '/organization', component: () => import('pages/UserInterface/Organization.vue') }
    ]
  },

  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/auth/Login.vue') },
      { path: 'register', component: () => import('pages/auth/SignUp.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
