import firebase from 'firebase/app';
import 'firebase/firestore';

class ChatModel {
  constructor(key, updateHandler) {
    this.key = key;
    //this.messages = []
    this.channel = 'random' // FIXME 
    this.team = 'FINKO-DEV' // FIXME
    this.onUpdate = updateHandler
    this.db = firebase.firestore();
    this.collection = this.db.collection(this.key)
  }
  addMessage(msg) {
    const message = {
        ...msg,
        displayName: 'Beomsu Chang',
        photoURL: '/img/avatar-thumb-paul9.jpeg',
        created: Date.now(),
    }
    return this.collection.doc(message.created+'').set(message);
  }

  subscribe() {
    this.unscribeHandler = this.collection.onSnapshot((querySnapshot) => {
      const messages = querySnapshot.docs.map(d => d.data()).sort((a,b) => a.created-b.created)
      console.log(messages)
      this.update(messages)
    })
  }

  update(messages) {
    if (this.onUpdate) this.onUpdate(messages)
  }

  unsubcribe() {
    if (this.unscribeHandler) this.unscribeHandler();
  }
}

const chatModel = new ChatModel('messages')

export default chatModel;