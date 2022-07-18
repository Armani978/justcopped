import Nav from './components/Nav';
import { Route , Routes } from "react-router"
import  Login  from "./views/Login";
import  Register  from "./views/Register";
import  Marketplace  from "./views/Marketplace";
import  AddProduct  from "./views/AddProduct";
import ChatPage from './views/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap"
import Logout from './components/Logout';

import { AuthContextProvider } from './context/AuthContext';


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
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: '',
  members: ['flat-cell-4'],
});

const App = () => (
  
  <Chat client={chatClient} theme='messaging light'>
   <AuthContextProvider>
      <Nav />
     <Routes>
           <Route path="/" element={<Marketplace />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/marketplace" element={<Marketplace />} />
         <Route path="/add" element={<AddProduct />} />
       <Route path="/Chat " element={<ChatPage />} />
         <Route path="/logout" component={<Logout />} />

       </Routes>
       </AuthContextProvider>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
