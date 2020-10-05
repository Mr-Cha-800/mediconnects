import { MutationTree } from 'vuex';
import { UserProfileInterface } from './state';

const mutation: MutationTree<UserProfileInterface> = {
  userProfileSuccess(state, userDetails: UserProfileInterface) {
    state = { ...state, ...userDetails };
  },
};

export default mutation;
