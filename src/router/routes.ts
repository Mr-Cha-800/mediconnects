import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/feed', component: () => import('pages/feed/Customizedfeeds.vue') },
      { path: '/profile', component: () => import('pages/accounts/UserProfile.vue') },
      { path: '/profile/organizations', component: () => import('pages/accounts/UserOrgsList.vue') },
      { path: '/profile/organizations/:orgId', component: () => import('pages/accounts/organizationProfile.vue') }
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
