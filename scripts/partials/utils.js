const eventListener = (selector, type, fn) => {
  const target = document.querySelectorAll(selector)
  target.forEach(t => t.addEventListener(type, fn))
}

const params = () => {
  return window.location.search.slice(1)
    .split('&').map(e => e.split('='))
    .reduce((i, e) => ({ ...i, [e[0]]: e[1] }), {})
}

const notify = (container, message, time) => {
  const notice = document.querySelector(container)
  notice.innerHTML = message
  notice.classList.remove('hidden')
  setTimeout(() => { notice.classList.add('hidden') }, time)
}

// const logout = () => {

//   const logout = document.querySelector('#logout')
//   if (logout) {
//     logout.addEventListener('click', (e) => {
//       e.preventDefault()
//       localStorage.removeItem('token')
//       localStorage.removeItem('id')
//       window.location = '/index.html'
//     })
//   }
// }

const starRating = (rating) => {
  let result = ''
  let border = `<i class="material-icons blue-grey-text text-lighten-4">star</i>`
  let star = `<i class="material-icons red-text">star</i>`
  let arr = [border, border, border, border, border]
  let stars = arr.slice(rating)
  for (let i = 0; i < rating; i++) {
    stars.unshift(star)
    result = stars.join('')
  }
  return result
}

module.exports = { notify, eventListener, params, starRating }
