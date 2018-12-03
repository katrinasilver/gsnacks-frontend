const { review, one } = require('./templates')
const { readOne, readReviews } = require('./requests')

const params = window.location.search.slice(1)
  .split('&').map(e => e.split('='))
  .reduce((i, e) => ({ ...i, [e[0]]: e[1] }), {})

const renderSnack = () => {
  const snack = document.querySelector('.snack')

  readOne(params.id)
    .then(response => {
      snack.innerHTML = one(response.data)

      // eventListener('.edit', 'click', (e) => {
      //   e.preventDefault()
      //   container.innerHTML = editReview(response.data)

      // eventListener('#edit-form', 'submit', (e) => {
      //   e.preventDefault()
      //   const title = e.target.title.value
      //   const url = e.target.image_url.value
      //   const rating = e.target.ratings.value
      //   const review = e.target.review.value

      //   update(params.id, title, url, rating, review)
      //   readOne(params.id)
      //     .then(response => renderOne(container, response.data))
      //     .catch(error => error)
      // })
      // })
    }).catch(error => error)
}


const renderReview = () => {
  const reviews = document.querySelector('.reviews')
  readReviews(params.id)
    .then(response => {
      let layout = response.data.map(r => review(r))
      reviews.innerHTML = ''
      reviews.innerHTML = layout.join('\n')
    }).catch(error => error)

  // eventListener('.delete', 'click', (e) => {
  //   e.preventDefault()
  //   let id = e.target.parentElement.getAttribute('data-id')
  //   remove(id)
  //     .catch(error => notify('.notice', 'Rating cannot be deleted!', 2000))
  //     .finally(() => {
  //       read().then(response => renderRatings(container, response.data))
  //     })
  // })
}

const init = () => {
  renderSnack()
  renderReview()
}

module.exports = { init }
