const { review, one, form } = require('./templates')
const { readOne, create, readReviews, remove } = require('./requests')
const { notify } = require('./utils')

const showForm = () => {
  const post = document.querySelector('#form')
  const trigger = document.querySelector('.trigger')

  if (trigger) {
    trigger.addEventListener('click', () => {
      post.classList.remove('collapsed')
      document.querySelector('.reset').addEventListener('click', () => post.classList.add('collapsed'))
    })
  }
}

const renderSnack = () => {
  const snack = document.querySelector('.snack')
  readOne()
    .then(response => snack.innerHTML = one(response.data))
    .then(() => showForm())
    .catch(error => console.log(error))
}

const postReview = () => {
  const reviews = document.querySelector('.review')
  reviews.innerHTML = form()

  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const review = {
      title: e.target.title.value,
      rating: e.target.ratings.value,
      comment: e.target.comment.value,
    }

    create(review)
      .then(() => setTimeout(() => { document.querySelector('#form').classList.add('collapsed')}, 500))
      .then(() => setTimeout(() => { window.location.reload(true) }, 1000))
      .catch(error => notify('.notice', 'You already reviewed this item!', 2000))
  })
}

const renderReview = () => {
  const reviews = document.querySelector('.reviews')
  readReviews()
    .then(response => {
      let layout = response.data.map(r => review(r))
      reviews.innerHTML = ''
      reviews.innerHTML = layout.join('\n')
    })
    .then(removeReview)
    .catch(error => console.log(error))
}

const removeReview = () => {
  const del = document.querySelectorAll('button.delete')
  del.forEach(d => {
    d.addEventListener('click', (e) => {
      e.preventDefault()
      let id = e.target.parentElement.parentElement.getAttribute('data-id')
      remove(id)
        .catch(error => notify('.notice', 'Rating cannot be deleted!', 2000))
        .finally(response => renderReview(response))
    })
  })
}

const init = () => {
  renderSnack()
  postReview()
  renderReview()
}

module.exports = { init }
