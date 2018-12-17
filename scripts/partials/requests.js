const axios = require('axios')
const uid = localStorage.getItem('id')
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

const login = (credentials) => axios.post(`${url}/login`, credentials)
const signup = (credentials) => axios.post(`${url}/users/signup`, credentials)
const getid = () => axios.get(`${url}/login`, header())
const getOne = (user) => axios.get(`${url}/users/${user}`)

const read = () => axios.get(`${url}/snacks`)
const readOne = () => axios.get(`${url}/snacks/${params().id}`)
const readReviews = () => axios.get(`${url}/snacks/${params().id}/reviews`)

const create = (review) => axios.post(`${url}/users/${uid}/snacks/${params().id}/reviews`, review, header())
// const edit = (id, rid, review) => axios.patch(`${snacks}/${id}/user/${userid}/review/${rid}`, review, header())
const remove = (rid) => axios.delete(`${url}/users/${uid}/snacks/${params().id}/reviews/${rid}`, header())

module.exports = {
  login,
  signup,
  getid,
  getOne,
  read,
  readOne,
  readReviews,
  create,
  remove
  // edit
}
