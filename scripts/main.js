const uid = localStorage.getItem('id')
const { getOne } = require('./partials/requests')
const { header, footer } = require('./partials/templates')
const { logout } = require('./partials/utils')
document.querySelector('footer').innerHTML = footer()
const nav = document.querySelector('header')


const path = window.location.pathname
const initialize = {
  '/': require('./partials/grid').init,
  '/index.html': require('./partials/grid').init,
  '/login.html': require('./partials/login').init,
  '/signup.html': require('./partials/signup').init,
  '/snack.html': require('./partials/snack').init
}

if (uid !== null) {
  getOne(uid)
    .then(response => {
      const name = response.data[0].firstName + ' ' + response.data[0].lastName
      nav.innerHTML = header(name)
      logout('#logout')
    })
    .catch(error => error)
} else {
  nav.innerHTML = header()
}

if (initialize.hasOwnProperty(path)) initialize[path]()
else console.error(`${path} can't initialize`)
