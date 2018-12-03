const { renderHomepage, renderOne, renderRatings } = require('./partials/render')
const { create, read, readOne, readReviews } = require('./partials/requests')
// const { notify, eventListener } = require('./partials/utils')
const signup = require('./partials/signup')

const reviews = document.querySelector('.reviews')
const collection = document.querySelector('.collection')
const snack = document.querySelector('.snack')
// const addRating = document.querySelector('.add-rating')

// if (addRating) {
//   addForm(addRating)
//   swapImg('.comic-image img')
// }

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


const initialize = {
  '/signup.html': signup.init
  // '/login.html': login.init
}

const path = window.location.pathname

if (initialize.hasOwnProperty(path)) initialize[path]()
else console.error(`${ path } can't initialize`)

if (snack) readOne(window.location.search.slice(-1)).then(() => renderOne(snack))
if (snack) readReviews(window.location.search.slice(-1)).then(response => renderRatings(collection, response.data))
if (reviews) read().then(response => renderHomepage(response.data))
