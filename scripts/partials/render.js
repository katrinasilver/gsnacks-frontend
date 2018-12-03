const { header, footer, form, review, one, editReview, snacks } = require('./templates')
const { notify, eventListener } = require('./utils')
const { read, readOne, readReviews, remove, update } = require('./requests')


const nav = document.querySelector('header')
const bottom = document.querySelector('footer')
nav.innerHTML = header()
bottom.innerHTML = footer()

// const addForm = (container) => container.innerHTML = form()
