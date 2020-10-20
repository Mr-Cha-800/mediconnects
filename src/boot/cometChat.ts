import { CometChat } from '@cometchat-pro/chat/CometChat';
import { COMETCHAT_CONSTANTS } from 'src/constants';


export default async ({}) => {
  const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(COMETCHAT_CONSTANTS.REGION).build();
  await CometChat.init(COMETCHAT_CONSTANTS.APP_ID, appSetting);
}
