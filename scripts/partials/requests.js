const axios = require('axios')
const url = 'http://localhost:3000'

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
const getid = () => axios.get(`${url}/login`, header())
const signup = (credentials) => axios.post(`${url}/signup`, credentials)

const read = () => axios.get(`${url}/snacks`, header())
const readOne = (id) => axios.get(`${url}/snacks/${id}`, header())
const readReviews = (id) => axios.get(`${url}/snacks/${id}/reviews`, header())

const remove = (id, rid) => axios.delete(`${url}/snacks/${id}/reviews/${rid}`, header())
const create = (id, review) => axios.post(`${url}/snacks/${id}/reviews/`, review, header())
const edit = (id, rid, review) => {
  return axios.patch(`${url}/snacks/${id}/reviews/${rid}`, review, header())
}

module.exports = {
  login,
  signup,
  getid,
  read,
  readOne,
  readReviews,
  create,
  remove,
  edit
}
