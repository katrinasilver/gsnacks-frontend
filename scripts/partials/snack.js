const { notify } = require('./utils')
const { review, one, form, editForm } = require('./templates')
const { readOne, create, readReviews, remove, readOneReview, edit } = require('./requests')

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
    const review = {
      title: e.target.title.value,
      rating: e.target.ratings.value,
      comment: e.target.comment.value,
    }

    create(review)
      .then(() => setTimeout(() => { document.querySelector('#form').classList.add('collapsed')}, 500))
      .then(() => setTimeout(() => { window.location.reload(true) }, 0))
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
    .then(editReview)
    .then(removeReview)
    .catch(error => console.log(error))
}

const editReview = () => {
  const edt = document.querySelectorAll('.edit')
  edt.forEach(d => {
    d.addEventListener('click', (e) => {
      e.preventDefault()
      let id = e.target.parentElement.parentElement.getAttribute('data-id')
      const div = document.querySelector(`div[data-id="${id}"]`)
      readOneReview(id)
        .then(response => {
          div.innerHTML = ''
          div.innerHTML = editForm(response.data)
          const editOne = document.querySelector(`.editForm[data-edit="${id}"]`)

          editOne.addEventListener('submit', (e) => {
            e.preventDefault()
            const title = e.target.editTitle.value
            const rating = e.target.ratings.value
            const comment = e.target.editComment.value

            edit(id, title, rating, comment)
            readOneReview(id)
              .then(renderReview)
              .then(renderSnack)
              .then(() => window.location.reload(true))
          })
        })
    })
  })
}

const removeReview = () => {
  const del = document.querySelectorAll('.delete')
  del.forEach(d => {
    d.addEventListener('click', (e) => {
      e.preventDefault()
      let id = e.target.parentElement.parentElement.getAttribute('data-id')
      remove(id)
        .catch(error => console.log(error))
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
