import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.less";
/** Layouts **/
import LayoutRoute from "./layouts/layoutRoute";
/** Components **/
import Profile from "./components/profile/profile";
import ChatList from "./components/chat/chatList";
import Messages from "./components/chat/messages";


function App() {
    return (
      <Router>
        <Switch>
          <LayoutRoute exact path="/chats" component={ChatList} />
          <LayoutRoute exact path="/profile" component={Profile} />                  
          <LayoutRoute exact path="/" component={ChatList} />   
          {
            window.innerWidth < 768 ?
              <LayoutRoute exact path="/messages" component={Messages} />

            :
              <Redirect to="/chats"></Redirect>

          }
          
                         
        </Switch>
      </Router>
    );
  
}

export default App;