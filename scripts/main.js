const { header, footer } = require('./partials/templates')
document.querySelector('header').innerHTML = header()
document.querySelector('footer').innerHTML = footer()

const path = window.location.pathname

const initialize = {
  '/': require('./partials/login').init,
  '/index.html': require('./partials/login').init,
  '/signup.html': require('./partials/signup').init,
  '/snacks.html': require('./partials/grid').init,
  '/snack.html': require('./partials/snack').init,

  '/add-review.html' : require('./partials/review').init
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
