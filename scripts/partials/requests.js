const axios = require('axios')
const url = 'http://localhost:3000'
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
const getid = () => axios.get(`${url}/login`, header())
const signup = (credentials) => axios.post(`${url}/signup`, credentials)

const read = () => axios.get(snacks, header())
const readOne = (id) => axios.get(`${snacks}/${id}`, header())
const readReviews = (id) => axios.get(`${snacks}/${id}/reviews`, header())

const create = (id, userid, review) => axios.post(`${snacks}/${id}/user/${userid}/review/`, review, header())
const edit = (id, rid, review) => axios.patch(`${snacks}/${id}/user/${userid}/review/${rid}`, review, header())
const remove = (id, userid, rid) => axios.delete(`${snacks}/${id}/user/${userid}/review/${rid}`, header())

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
