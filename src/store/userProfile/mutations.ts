import { MutationTree } from 'vuex';
import { UserProfileInterface, UserProfileStateInterface } from './state';
import Vue from 'vue';

const mutation: MutationTree<UserProfileStateInterface> = {
  MyProfileRequest(state) {
    Vue.set(state, 'status', { loading: true });
  },

  MyProfileSuccess(state, userDetails: UserProfileInterface) {
    Vue.set(state, 'profile', userDetails);
    Vue.set(state, 'status', { loading: false });
  },

  MyProfileFailed(state, error: string) {
    Vue.set(state, 'profile', {});
    Vue.set(state, 'status', { loading: false, error });
  },

  MyProfileUpdateRequest(state) {
    Vue.set(state, 'status', { updating: true });
  },

  MyProfileUpdateSuccess(state, userDetails: UserProfileInterface) {
    Vue.set(state, 'profile', {...state.profile, ...userDetails});
    Vue.set(state, 'status', { updating: false });
  },

  MyProfileUpdateFailed(state, error: string) {
    Vue.set(state, 'status', { updating: false, error });
  },

  UserProfileRequest(state) {
    Vue.set(state, 'userStatus', { loading: true });
  },

  UserProfileSuccess(state, userDetails: UserProfileInterface) {
    Vue.set(state, 'user', userDetails);
    Vue.set(state, 'userStatus', { loading: false });
  },

  UserProfileFailed(state, error: string) {
    Vue.set(state, 'user', {});
    Vue.set(state, 'userStatus', { loading: false, error });
  },

  SearchRequestsRequest(state) {
    Vue.set(state, 'userStatus', { loading: true });
  },

  SearchRequestsSuccess(state, users: UserProfileInterface[]) {
    Vue.set(state, 'users', users);
    Vue.set(state, 'userStatus', { loading: false });
  },

  SearchRequestsFailed(state, error: string) {
    Vue.set(state, 'users', []);
    Vue.set(state, 'userStatus', { loading: false, error });
  },

  IncreaseUserFollowers(state) {
    const { profile: { followers = 0 } = {} } = state;
    Vue.set(state, 'profile', { ...state.profile, followers: followers + 1 });
  },
  DecreaseUserFollowers(state) {
    const { profile: { followers = 0 } = {} } = state;
    Vue.set(state, 'profile', { ...state.profile, followers: followers && followers - 1 });
  },
  updateFilter(state, filter){
    console.log(filter);
    Vue.set(state, 'filter', filter);
  },
  // working fine
  getContacts(state, contactlist){
    Vue.set(state, 'profile', { ...state.profile, contactList: contactlist });
  },
  //section group mutations
  sectionGroupAdded( state, payload:string ){
    state.profile.sectionGroups?.push( { name: payload,id: payload.toLowerCase().trim() });
  },
  sectionGroupDeleted( state, payload:string ){
    state.profile.sectionGroups?.splice(state.profile.sectionGroups.findIndex( grp => grp.id == payload ), 1);
  },
  sectionGroupUpdated( state, payload:string ){
    let index = state.profile.sectionGroups?.findIndex((grp => grp.id == payload))!;
    state.profile.sectionGroups![index]={ name:payload,id:payload.trim().toLowerCase() };
    Vue.set(state,'profile',{ ...state.profile });
  }
};

export default mutation;
