import firebase from 'firebase/app';
import 'firebase/firestore';

class ChannelModel {
  constructor(key) {
    this.key = key;
    this.db = firebase.firestore();
    this.collection = this.db.collection(this.key)
  }
  addMessage(channel) {
    channel = {
        ...channel,
        created: Date.now(),
    }
    return this.collection.add(channel);
  }

  subscribe() {
    this.unscribeHandler = this.collection.onSnapshot((querySnapshot) => {
      const channels = querySnapshot.docs.map(d => d.data()).sort((a,b) => a.name<b.name ? -1 : 1)
      this.update(channels)
    })
  }

  update(channels) {
    if (this.onUpdate) this.onUpdate(channels)
  }

  unsubcribe() {
    if (this.unscribeHandler) this.unscribeHandler();
  }
}

const channelModel = new ChannelModel('channels')

export default channelModel;