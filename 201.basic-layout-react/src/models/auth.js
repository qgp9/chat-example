import firebase from 'firebase/app';
import 'firebase/auth'

class AuthModel {
  constructor(updateHandler = null) {
    this.updateHandler = updateHandler;
    this.user = undefined;
  }
  logout() {
    firebase.auth().signOut() // promise
  }
  logoutEventHandler(event) {
    event.preventDefault();
    this.logout();
  }
  init() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        user.getIdToken().then((accessToken) => {
          this.user = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          };
          this.update(this.user)
        });
      } else {
        this.user = null;
        this.update(user)
      }
    }, function (error) {
      console.log(error);
    });
  };

  update(user) {
      console.log('user_update:', user)
      if (this.updateHandler)
        this.updateHandler(user);
  }
}

export default AuthModel;