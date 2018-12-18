const { header, footer } = require('./partials/templates')
document.querySelector('header').innerHTML = header()
document.querySelector('footer').innerHTML = footer()

const path = window.location.pathname
const initialize = {
  '/': require('./partials/grid').init,
  '/index.html': require('./partials/grid').init,
  '/login.html': require('./partials/login').init,
  '/signup.html': require('./partials/signup').init,
  '/snack.html': require('./partials/snack').init
}

if (initialize.hasOwnProperty(path)) initialize[path]()
else console.error(`${path} can't initialize`)

const leave = document.querySelector('.logout')
if (leave) {
  leave.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location = '/index.html'
  })
}
