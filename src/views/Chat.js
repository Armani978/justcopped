import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('qpzbntjmn4m9');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmxhdC1jZWxsLTQifQ.PEOg6RL95iqlE4w63uMzQSi0D-AWO4CsOziTGkJCgWg';

chatClient.connectUser(
  {
    id: 'flat-cell-4',
    name: 'flat-cell-4',
    image: 'https://getstream.io/random_png/?id=flat-cell-4&name=flat-cell-4',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  
  name: 'JustCopped',
  members: ['flat-cell-4'],
});

export default function ChatPage(){
return( 
  <Chat client={chatClient} theme='messaging light'>
    
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
)
}

