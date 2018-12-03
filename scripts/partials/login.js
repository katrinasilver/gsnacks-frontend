const { login, getid } = require('./requests')

const init = () => {
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const creds = {
      email: e.target.email.value, password: e.target.password.value
    }

    login(creds)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        window.location = `/snacks.html`
      })
      .then(getid)
      .then(response => localStorage.setItem('id', response.data.id))
      .catch(error => console.log(error))
  })
}

module.exports = { init }
