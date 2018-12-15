const { grid } = require('./templates')
const { read } = require('./requests')

const init = () => {
  const snacks = document.querySelector('.reviews')
  read()
  .then(response => {
    let layout = response.data.map(r => grid(r))
    snacks.innerHTML = ''
    snacks.innerHTML = layout.join('\n')
  })
  .catch(error => console.log(error))
    // .then(() => {
    //   getid()
    //     .then(response => {
    //       localStorage.setItem('id', response.data.id)
    //       console.log(response.data.id)
    //   })
    // })
}

module.exports = { init }
