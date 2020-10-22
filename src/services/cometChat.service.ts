import { UserProfileInterface } from 'src/store/userProfile/state';
import { CometChat } from '@cometchat-pro/chat/CometChat';
import { COMETCHAT_CONSTANTS } from 'src/constants';
import { Router } from 'src/router';
import { avatarMediaObject } from 'src/helpers/parseMediaOject';
import { GroupsInterface } from 'src/store/groups/state';

export const createUser = async (id?: string) => {
  const user = new CometChat.User(id);
  await CometChat.createUser(user, COMETCHAT_CONSTANTS.API_KEY + '');
  return Promise.resolve();
}
export const login = (id?: string) => CometChat.login(id, COMETCHAT_CONSTANTS.API_KEY + '')

export const updateUser = async ({ id, firstName, lastName, avatar }: UserProfileInterface) => {
  const user = new CometChat.User({
    uid: id,
    avatar: avatarMediaObject(avatar),
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
export const sendGroupMessage = async ({ receiverID, messageText }: { receiverID: string, messageText: string }) => {
  const receiverType = CometChat.RECEIVER_TYPE.GROUP;
  const textMessage = new CometChat.TextMessage(
    receiverID,
    messageText,
    receiverType
  );

  CometChat.sendMessage(textMessage).then(() => Router.push({name: 'messages'}));
  return Promise.resolve();
};

export const createGroup = async ({id, name, avatar}: GroupsInterface) => {
  const group = new CometChat.Group(id + '', name + '', CometChat.GROUP_TYPE.PRIVATE);
  group.setIcon(avatarMediaObject(avatar));
  await CometChat.createGroup(group);
  return Promise.resolve();
}

export const updateGroup = async ({ id, name, avatar }: GroupsInterface) => {
  const group = new CometChat.Group(id + '', name + '', CometChat.GROUP_TYPE.PRIVATE);
  group.setIcon(avatarMediaObject(avatar));
  await CometChat.updateGroup(group);
  return Promise.resolve();
};

export const addMemberToGroup = async (guid: string, memberId: string) => {
  const membersList = [
    new CometChat.GroupMember(memberId, CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT),
  ];
  await CometChat.addMembersToGroup(guid, membersList, []);
  return Promise.resolve();
}

export const removeMemberFromGroup = async (guid: string, memberId: string) => {
  await CometChat.kickGroupMember(guid, memberId);
  return Promise.resolve();
}
