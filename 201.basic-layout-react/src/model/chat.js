class ChatModel {
  constructor(key, updateHandler) {
    this.key = key;
    this.messages = []
    this.channel = 'random' // FIXME 
    this.team = 'FINKO-DEV' // FIXME
    this.onUpdate = updateHandler
    this.db = firebase.firestore();
    this.collection = this.db.collection(this.key)
    this.updateListener()
  }
  addMessage(msg) {
    return this.collection.doc(msg.created+'').set(msg)
  }

  updateListener() {
    this.collection.onSnapshot((querySnapshot) => {
      console.log(querySnapshot)
      console.log(querySnapshot.docs)
      this.messages = querySnapshot.docs.map(d => d.data())
      this.update()
    })
  }

  update() {
    if (this.onUpdate) this.onUpdate()
  }
}

const chatModel = new ChatModel('messages')