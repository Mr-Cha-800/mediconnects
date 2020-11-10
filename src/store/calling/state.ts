import { CometChat } from '@cometchat-pro/chat/CometChat';

export interface CallingStateInterface {
  call?: CometChat.Call;
  status: {
    receivingCall?: boolean;
    emittingCall?: boolean;
    calling?: boolean;
    error?: string;
  }
}

const state: CallingStateInterface = {
  status: {
    receivingCall: false,
    emittingCall: false,
    calling: false,
  }
};
export default state;
