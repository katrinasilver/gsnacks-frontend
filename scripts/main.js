const { renderHomepage, renderOne, renderRatings, addForm, swapImg } = require('./partials/render')
const { create, read, readOne, readReviews, request } = require('./partials/reviews')
const { notify, eventListener } = require('./partials/utils')

const reviews = document.querySelector('.reviews')
const collection = document.querySelector('.collection')
const snack = document.querySelector('.snack')
const addRating = document.querySelector('.add-rating')

if (addRating) {
  addForm(addRating)
  swapImg('.comic-image img')
}

// eventListener('#form', 'submit', (e) => {
//   e.preventDefault()
//   const review = {
//     id: '',
//     title: e.target.title.value,
//     url: e.target.image_url.value,
//     rating: e.target.ratings.value,
//     review: e.target.review_comment.value
//   }
//   create(review)
//     .then(response => notify('.notice', 'Your review has been added! Hooray!', 1500))
//     .catch(error => notify('.notice', 'All Fields are Required', 2000))

//   e.target.reset()
//   eventListener('.reset', 'click', () => window.location.reload(true))
// })

eventListener('#form', 'submit', (e) => {
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value

  request('/login', 'post', { email, password })
    .then(response => {
      localStorage.setItem('token', response.data.token)
      window.location = '/ratings.html'
    }).catch(error => console.log(error))
})


if (snack) readOne(window.location.search.slice(-1)).then(() => renderOne(snack))
if (snack) readReviews(window.location.search.slice(-1)).then(response => renderRatings(collection, response.data))
if (reviews) read().then(response => renderHomepage(response.data))
