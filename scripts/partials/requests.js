const axios = require('axios')
const uid = localStorage.getItem('id')
// const url = 'https://gsnacks.herokuapp.com'
const url = 'http://localhost:3000'
const { params } = require('./utils')

const header = () => {
  let bearer = ''
  const token = localStorage.getItem('token')
  if (token) bearer = `Bearer ${token}`

  return {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearer
    }
  }
}

const signup = (credentials) => axios.post(`${url}/users/signup`, credentials)
const login = (credentials) => axios.post(`${url}/login`, credentials)
const getid = () => axios.get(`${url}/login`, header())

const getOne = (userid) => axios.get(`${url}/users/${userid}`) // I might not need this

const read = () => axios.get(`${url}/snacks`)
const readOne = () => axios.get(`${url}/snacks/${params().id}`)
const readReviews = () => axios.get(`${url}/snacks/${params().id}/reviews`)
const readOneReview = (rid) => axios.get(`${url}/users/${uid}/snacks/${params().id}/reviews/${rid}`, header())

const create = (review) => axios.post(`${url}/users/${uid}/snacks/${params().id}/reviews`, review, header())
const remove = (rid) => axios.delete(`${url}/users/${uid}/snacks/${params().id}/reviews/${rid}`, header())
const edit = (rid, title, rating, comment) => {
  const review = { rid, title, rating, comment }
  axios.patch(`${url}/users/${uid}/snacks/${params().id}/reviews/${rid}`, review, header())
}

module.exports = {
  login,
  signup,
  getid,
  getOne,
  read,
  readOne,
  readReviews,
  readOneReview,
  create,
  remove,
  edit
}
