import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { auth: true, },
    children: [
      { path: '', component: () => import('pages/feed/Index.vue'), name: 'home', meta: { auth: true } },
      { path: '/profile', component: () => import('pages/accounts/MyProfile.vue'), name: 'MyProfile', meta: { auth: true } },
      { path: '/profile/update', component: () => import('pages/accounts/MyProfileUpdate.vue'), name: 'MyProfileUpdate', meta: { auth: true } },
      { path: '/profile/organizations', component: () => import('pages/accounts/UserOrgsList.vue'), name: 'profileOrganizations', meta: { auth: true } },
      { path: '/profile/organizations/add', component: () => import('pages/organizations/OrgProfileAdd.vue'), name: 'OrgProfileAdd', meta: { auth: true } },
      { path: '/profile/organizations/:orgId', component: () => import('pages/organizations/organizationProfile.vue'), name: 'organizationProfile', meta: { auth: true } },
      { path: '/profile/organizations/:orgId/edit', component: () => import('pages/organizations/OrgProfileEdit.vue'), name: 'EditOrganization', meta: { auth: true } },
      { path: '/profile/organizations/:orgId/members', component: () => import('pages/organizations/OrganizationMembers.vue'), name: 'OrganizationMembers', meta: { auth: true } },
      { path: '/profile/requests', component: () => import('pages/accounts/UserConnectRequests.vue'), name: 'UserConnectRequests', meta: { auth: true } },
      { path: '/post', component: () => import('pages/posting/AddPost.vue'), name: 'AddPost', meta: { auth: true, noFooter: true } },
      { path: '/groups', component: () => import('pages/groups/Groups.vue'), name: 'groups', meta: { auth: true } },
      { path: '/groups/:groupId/tenants', component: () => import('pages/groups/GroupTenants.vue'), name: 'groupTenants', meta: { auth: true } },

      { path: '/messages', component: () => import('pages/Index.vue'), name: 'messages', meta: { auth: true } },

      { path: '/users/:userId/profile', component: () => import('pages/users/UserProfile.vue'), name: 'UserProfile', meta: { auth: true } },

      { path: '/search/users', component: () => import('pages/search/ProfilesSearch.vue'), name: 'ProfilesSearch', meta: { auth: true } },
      { path: '/search/organizations', component: () => import('pages/search/OrganizationsSearch.vue'), name: 'OrganizationsSearch', meta: { auth: true } },

      { path: '/public/organizations/:orgId', component: () => import('pages/publicAccount/PublicOrganizationProfile.vue'), name: 'PublicOrganizationProfile', meta: { auth: true } },{ path: '/public/organizations/:orgId', component: () => import('pages/publicAccount/PublicOrganizationProfile.vue'), name: 'PublicOrganizationProfile', meta: { auth: true } },

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
