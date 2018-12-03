const { signup } = require('./requests')

const init = () => {
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const creds = {
      email: e.target.email.value, password: e.target.password.value
    }

    signup(creds)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        window.location = '/index.html'
      }).catch(error => console.log(error))
  })
}

module.exports = { init }
