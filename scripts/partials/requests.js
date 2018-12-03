const axios = require('axios')
const url = 'http://localhost:3000'

const read = () => axios.get(url + `/snacks/`)
const readOne = (id) => axios.get(url + `/snacks/${id}`)
const readReviews = (id) => axios.get(url + `/snacks/${id}/reviews`)

// const create = (review) => axios.post(url + `/snacks/${id}/reviews`, review)
const remove = (id) => axios.delete(url + `/snacks/` + id)
const update = (id, title, imgurl, rating, review) => {
  const entry = { title, url: imgurl, rating, review }
  return axios.patch(url + `/snacks/` + id, entry)
}

const request = (path, method = 'get', body = null) => {
  let bearer = ''
  const token = localStorage.getItem('token')
  if (token) bearer = `Bearer ${ token }`

  return axios(url + path, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearer
    },
    data: body
  })
}

module.exports = { read, readOne, readReviews, update, remove, request }
