const users = {
  '9f8wuef98we98fuwef': {
    displayName: 'Beomsu Chang',
    avata: 'img/avatar-thumb-paul9.jpeg',
    id: '9f8wuef98we98fuwef',
  }
}

const elChatMain = document.querySelector('.chat-main')
function renderMessages(messages) {
  elChatMain.innerHTML = ''
  const messagesElList = []
  messages.forEach((msg, i) => {
    const elMsg = document.createElement('div')
    elMsg.classList.add('message-container')
    const user = users[msg.userId]
    const dateStr = (new Date(msg.created)).toISOString()
    elMsg.innerHTML = `
    <div class="message-avata">
        <img src="${user.avata}">
    </div>
    <div class="message-body">
        <div class="message-name">
          ${user.displayName}
        </div>
        <div class="message-date">
          ${dateStr}
        </div>
        <div class="message-content">
          ${msg.content}
        </div>
    </div>
    `
    messagesElList.push(elMsg)
  })
  elChatMain.append(...messagesElList)
  setTimeout( () => elChatMain.scrollTop = elChatMain.scrollHeight, 0)
}

// subscribe chat model's update event
chatModel.onUpdate = () => renderMessages(chatModel.messages)

// handle input
const elChatInput = document.querySelector('.chat-input')
elChatInput.addEventListener("keyup", function (event) {
  if (elChatInput.value.length > 0 && event.keyCode === 13) {
    event.preventDefault();
    chatModel.addMessage({
      userId: '9f8wuef98we98fuwef',
      created: Date.now(),
      content: elChatInput.value
    });
    elChatInput.value = '';
  }
});