import { route } from 'quasar/wrappers';
import VueRouter from 'vue-router';
import { Store } from 'vuex';
import { StateInterface } from '../store';
import routes from './routes';
import { CometChat } from '@cometchat-pro/chat/CometChat';

export const Router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,

  // Leave these as is and change from quasar.conf.js instead!
  // quasar.conf.js -> build -> vueRouterMode
  // quasar.conf.js -> build -> publicPath
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
});

export default route<Store<StateInterface>>(({ Vue, store }) => {
  Vue.use(VueRouter);

  Router.beforeEach(async (to, from, next) => {
    const { meta: { auth } } = to;
    const user = {} //await CometChat.getLoggedinUser();

    if (auth && (!user || !store.getters['accountModule/isAuthenticated'])) {
      CometChat.logout();
      return Router.push({name: 'login'});
    }
    next();
  });

  return Router;
})
