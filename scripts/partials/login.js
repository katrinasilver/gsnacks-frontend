const { request } = require('./requests')

const login = () => {
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    request('/login', 'post', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        window.location = '/account.html'
      }).catch(error => console.log(error))
  })
}

const init = () => {
  login()
}

module.exports = { init }
