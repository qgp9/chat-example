const teamName = "FINKO-DEV"

const channels = [
  {
    name: 'random',
    link: '/random',
  },
  {
    name: 'general',
    link: '/general',
  }
]

function renderTeamName(name) {
  const els = document.querySelectorAll('.team-name')
  els.forEach(el => {
    el.textContent = name
  })
}

function renderChannels(channels) {
  const el = document.querySelector('.channel-list')
  el.innerHTML = ''
  channels.forEach(ch => {
    const elLi = document.createElement('li')
    elLi.innerHTML = `<a href="${ch.link}"># ${ch.name}</a>`
    el.appendChild(elLi)
  })
}

renderTeamName(teamName)
renderChannels(channels)