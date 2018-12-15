const { form } = require('./templates')
const { readOne, create } = require('./requests')

const params = window.location.search.slice(1)
  .split('&').map(e => e.split('='))
  .reduce((i, e) => ({ ...i, [e[0]]: e[1] }), {})

const renderForm = () => {
  const review = document.querySelector('.add-review')
  readOne(params.id)
    .then(response => {
      let layout = form(response.data)
      review.innerHTML = layout
  })
  console.log(`foo`)
}

const init = () => renderForm()
module.exports = { init }
