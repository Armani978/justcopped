import { CometChat } from "@cometchat-pro/chat";
const appID = "212008811670e7dd";
const region = "us";
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);
const authKey = "dbed17fa5fcbdf3b6ae7f3a49d032d40ddc181ff";
const uid = "SUPERHERO1";

CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user });    
  },
  error => {
    console.log("Login failed with exception:", { error });    
  }
);
export default CometChat;