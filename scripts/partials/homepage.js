const { grid } = require('./templates')
const { read } = require('./requests')

const renderHomepage = () => {
  const snacks = document.querySelector('.reviews')
  read()
  .then(response => {
    let layout = response.data.map(r => grid(r))
    snacks.innerHTML = ''
    snacks.innerHTML = layout.join('\n')
  })
}

const init = () => renderHomepage()
module.exports = { init }
