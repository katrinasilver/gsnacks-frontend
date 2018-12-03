const eventListener = (selector, type, fn) => {
  const target = document.querySelectorAll(selector)
  target.forEach(t => t.addEventListener(type, fn))
}

const notify = (container, message, time) => {
  const notice = document.querySelector(container)
  notice.innerHTML = message
  notice.classList.remove('hidden')
  setTimeout(() => { notice.classList.add('hidden') }, time)
}

const starRating = (rating) => {
  let result = ''
  let border = `<i class="material-icons blue-grey-text text-lighten-4">star</i>`
  let star = `<i class="material-icons green-text">star</i>`
  let arr = [border, border, border, border, border]
  let newArr = arr.slice(rating)
  for (let i = 0; i < rating; i++) {
    newArr.unshift(star)
    result = newArr.join('')
  }
  return result
}

module.exports = { notify, eventListener, starRating }
