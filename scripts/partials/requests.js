const axios = require('axios')
const url = 'http://localhost:3000'
const uid = localStorage.getItem('id')
const snacks = `${url}/snacks`

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
const getUser = () => axios.get(`${url}/users/${uid}`)

const read = () => axios.get(snacks)
const readOne = (id) => axios.get(`${snacks}/${id}`)
const readReviews = (id) => axios.get(`${snacks}/${id}/reviews`)

const create = (id, review) => axios.post(`${url}/users/${uid}/snacks/${id}/reviews`, review, header())
// const edit = (id, rid, review) => axios.patch(`${snacks}/${id}/user/${userid}/review/${rid}`, review, header())
// const remove = (id, userid, rid) => axios.delete(`${snacks}/${id}/user/${userid}/review/${rid}`, header())

module.exports = {
  login,
  signup,
  getid,
  getUser,
  read,
  readOne,
  readReviews,
  create
  // remove,
  // edit
}
