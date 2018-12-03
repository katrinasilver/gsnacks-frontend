require('./partials/render')
const path = window.location.pathname
const signup = require('./partials/signup')
const login = require('./partials/login')
const snack = require('./partials/snack')
const index = require('./partials/homepage')

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
  '/': index.init,
  '/index.html' : index.init,
  '/signup.html': signup.init,
  '/login.html': login.init,
  '/snack.html' : snack.init
}

if (initialize.hasOwnProperty(path)) initialize[path]()
else console.error(`${ path } can't initialize`)
