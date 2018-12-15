const { signup } = require('./requests')
const { notify } = require('./utils')

const init = () => {
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const creds = {
      firstName: e.target.first.value,
      lastName: e.target.last.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    signup(creds)
      .then(() => { notify('.hidden', 'Account Created!', 2000) })
      .then(() => {
        setTimeout(() => { window.location = '/login.html' }, 2000)
      }).catch(error => notify('.hidden', 'Email not available!', 2000))
  })
}

module.exports = { init }
