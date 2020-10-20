import { UserProfileInterface } from 'src/store/userProfile/state';
import { CometChat } from '@cometchat-pro/chat/CometChat';
import { COMETCHAT_CONSTANTS } from 'src/constants';
import { Router } from 'src/router';

export const createUser = async (id?: string) => {
  const user = new CometChat.User(id);
  await CometChat.createUser(user, COMETCHAT_CONSTANTS.API_KEY + '');
  return Promise.resolve();
}
export const login = (id?: string) => CometChat.login(id, COMETCHAT_CONSTANTS.API_KEY + '')

export const updateUser = async ({ id, firstName, lastName }: UserProfileInterface) => {
  const user = new CometChat.User({
    uid: id,
    name: `${firstName} ${lastName}`
  });
  await CometChat.updateUser(user, COMETCHAT_CONSTANTS.API_KEY + '');
  return Promise.resolve();
};
export const sendUserMessage = async ({ receiverID, messageText }: { receiverID: string, messageText: string }) => {
  const receiverType = CometChat.RECEIVER_TYPE.USER;
  const textMessage = new CometChat.TextMessage(
    receiverID,
    messageText,
    receiverType
  );

  CometChat.sendMessage(textMessage).then(() => Router.push({name: 'messages'}));
  return Promise.resolve();
};
