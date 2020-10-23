import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserProfileStateInterface } from './state';
import { avatarMediaObject } from 'src/helpers/parseMediaOject';

const getters: GetterTree<UserProfileStateInterface, StateInterface> = {
  profile: ({ profile }) => profile,
  isMe: ({ profile: {id: myId} }) => (userId?: string): boolean => userId === myId,
  user: ({ user }) => user,
  users: ({ users }) => users,
  status: ({ status }) => status,
  userStatus: ({ userStatus }) => userStatus,
  filtersections(state){
    if(state.filter === 'all') {
     const avengers = state.profile.sections
      return avengers
    }
    else if(state.filter === 'Experience') {
     const avengers = state.profile.sections.filter(section => section.group === 'experience');
      return avengers
    }
    else if(state.filter === 'Education') {
     const avengers = state.profile.sections.filter(section => section.group === 'education');
      return avengers
    }
    else if(state.filter === 'Companies') {
     const avengers = state.profile.sections.filter(section => section.group === 'companies');
      return avengers
    }
    else if(state.filter === 'Family') {
     const avengers = state.profile.sections.filter(section => section.group === 'family');
      return avengers
    }
    else if(state.filter === 'Music') {
     const avengers = state.profile.sections.filter(section => section.group === 'music');
      return avengers
    }
    return state.profile.sections
  },
  getAvatar: ({ profile: { avatar } }) => avatarMediaObject(avatar),
};

export default getters;
