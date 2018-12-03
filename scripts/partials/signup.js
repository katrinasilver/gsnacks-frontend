const { request } = require('./requests')

const signup = () => {
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    request('/signup', 'post', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        window.location = '/login.html'
      }).catch(error => console.log(error))
  })
}

const init = () => {
  signup()
}

module.exports = { init }
