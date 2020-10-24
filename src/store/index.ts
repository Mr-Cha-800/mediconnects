import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import accountModule from 'src/store/account';
import userProfileModule from 'src/store/userProfile';
import orgProfileModule from 'src/store/orgProfile';
import followConnectModule from 'src/store/followConnect';
import postingModule from 'src/store/posting';
import GroupsModule from 'src/store/groups'
import feedPostsModule from 'src/store/feed'
// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      accountModule,
      userProfileModule,
      orgProfileModule,
      followConnectModule,
      postingModule,
      GroupsModule,
      feedPostsModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
