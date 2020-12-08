const users = {
  '9f8wuef98we98fuwef': {
    displayName: 'Beomsu Chang',
    avata: 'img/avatar-thumb-paul9.jpeg',
    id: '9f8wuef98we98fuwef',
  }
}
const messages = []
/*
msg = {
  userId: '9f8wuef98we98fuwef',
  date: Date.now(), // epoch time
  content: '이것은....'
  el: <element>
}
*/


const elChatMain = document.querySelector('.chat-main')
function renderMessages(messages) {
  messages.forEach((msg, i) => {
    if (msg.el) return;
    const elMsg = document.createElement('div')
    elMsg.classList.add('message-container')
    const user = users[msg.userId]
    const dateStr = (new Date(msg.date)).toISOString()
    console.log(dateStr)
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
    msg.el = elMsg;
    elChatMain.appendChild(elMsg)
  })
}

function addMessage(msg) {
  messages.push(msg)
  renderMessages(messages)
}

const elChatInput = document.querySelector('.chat-input')
elChatInput.addEventListener("keyup", function (event) {
  if (elChatInput.value.length > 0 && event.keyCode === 13) {
    event.preventDefault();
    addMessage({
      userId: '9f8wuef98we98fuwef',
      date: Date.now(),
      content: elChatInput.value
    });
    elChatInput.value = '';
    elChatMain.scrollTop = elChatMain.scrollHeight
  }
});