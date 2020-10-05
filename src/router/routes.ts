import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { auth: true, },
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'home', meta: { auth: true } },
      { path: '/feed', component: () => import('pages/feed/Customizedfeeds.vue'), name: 'feed', meta: { auth: true }  },
      { path: '/profile', component: () => import('pages/accounts/UserProfile.vue'), name: 'userProfile', meta: { auth: true } },
      { path: '/profile/organizations', component: () => import('pages/accounts/UserOrgsList.vue'), name: 'profileOrganizations', meta: { auth: true } },
      { path: '/profile/organizations/:orgId', component: () => import('pages/accounts/organizationProfile.vue'), name: 'organizationProfile', meta: { auth: true } }
    ]
  },

  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/auth/Login.vue'), name: 'login' },
      { path: 'register', component: () => import('pages/auth/SignUp.vue'), name: 'register' }
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
