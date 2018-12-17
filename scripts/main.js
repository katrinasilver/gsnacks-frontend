const { header, footer } = require('./partials/templates')
document.querySelector('header').innerHTML = header()
document.querySelector('footer').innerHTML = footer()

const path = window.location.pathname
const initialize = {
  '/': require('./partials/grid').init,
  '/index.html': require('./partials/grid').init,
  '/login.html': require('./partials/login').init,
  '/signup.html': require('./partials/signup').init,
  '/snack.html': require('./partials/snack').init
}

// const del = document.querySelectorAll('.delete')
// console.log(del)

// del.forEach(d => {
//   d.addEventListener('click', (e) => {
//     e.preventDefault()
//     let id = e.target.parentElement.parentElement.getAttribute('data-id')
//     console.log(e, id)
//     // remove(id)
//     //   .catch(error => notify('.notice', 'Rating cannot be deleted!', 2000))
//     //   .finally(response => renderReview(response.data))
//   })
// // })

// document.addEventListener('DOMContentLoaded', () => {
//   const del = document.querySelectorAll('.delete')
//   del.forEach(d => {
//     d.addEventListener('click', (e) => {
//       e.preventDefault()
//       let id = e.target.parentElement.getAttribute('data-id')
//       console.log(e)
//       remove(id)
//         .catch(error => notify('.notice', 'Rating cannot be deleted!', 2000))
//         .finally(response => renderReview(response.data))
//     })
//   })
// })

if (initialize.hasOwnProperty(path)) initialize[path]()
else console.error(`${path} can't initialize`)

const leave = document.querySelector('.logout')
if (leave) {
  leave.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location = '/index.html'
  })
}
