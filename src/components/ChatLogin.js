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