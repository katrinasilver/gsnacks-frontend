const { login, getid } = require('./requests')
const { notify } = require('./utils')

const init = () => {
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const creds = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    login(creds)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        return getid()
      })
      .then(response => {
        localStorage.setItem('id', response.data.id)

        window.location = document.referrer.includes('signup.html') ? '/' : document.referrer
      })
      .catch(error => notify('.notice', 'Invalid Credentials!', 1000))
  })
}

module.exports = { init }
