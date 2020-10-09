import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { auth: true, },
    children: [
      { path: '', component: () => import('pages/feed/Index.vue'), name: 'home', meta: { auth: true } },
      { path: '/profile', component: () => import('pages/accounts/UserProfile.vue'), name: 'userProfile', meta: { auth: true } },
      { path: '/profile/update', component: () => import('pages/accounts/UserProfileUpdate.vue'), name: 'userProfileUpdate', meta: { auth: true } },
      { path: '/profile/organizations', component: () => import('pages/accounts/UserOrgsList.vue'), name: 'profileOrganizations', meta: { auth: true } },
      { path: '/profile/organizations/add', component: () => import('pages/accounts/OrgProfileAdd.vue'), name: 'OrgProfileAdd', meta: { auth: true } },
      { path: '/profile/organizations/:orgId', component: () => import('pages/accounts/organizationProfile.vue'), name: 'organizationProfile', meta: { auth: true } },
      { path: '/profile/organizations/:orgId/edit', component: () => import('pages/accounts/OrgProfileEdit.vue'), name: 'EditOrganization', meta: { auth: true } },
      { path: '/profile/requests', component: () => import('pages/accounts/UserConnectRequests.vue'), name: 'UserConnectRequests', meta: { auth: true } },
      { path: '/post', component: () => import('pages/posting/AddPost.vue'), name: 'AddPost', meta: { auth: true, noFooter: true } },
      { path: '/groups', component: () => import('pages/Index.vue'), name: 'groups', meta: { auth: true } },
      { path: '/messages', component: () => import('pages/Index.vue'), name: 'messages', meta: { auth: true } },

      { path: '/public/organizations/:orgId', component: () => import('pages/publicAccount/PublicOrganizationProfile.vue'), name: 'PublicOrganizationProfile', meta: { auth: true } },{ path: '/public/organizations/:orgId', component: () => import('pages/publicAccount/PublicOrganizationProfile.vue'), name: 'PublicOrganizationProfile', meta: { auth: true } },

      { path: '/public/organizations/:q', component: () => import('pages/publicProfile/organizationsSearch.vue'), name: 'organizationSearch', meta: { auth: true } },
      { path: '/public/profiles/:q', component: () => import('pages/publicProfile/profilesSearch.vue'), name: 'profilesSearch', meta: { auth: true } },

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
