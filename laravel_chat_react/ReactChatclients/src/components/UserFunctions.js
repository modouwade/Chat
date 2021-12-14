import axios from 'axios'

export const register = newUser => {
    return axios
    .post('/api/register',newUser,{
        header: {'Content-type': 'application/json'}
    })
    .then(res => {
       console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}


export const getProfile = () => {
    return axios
    .get('/api/profile',{
        headers: {Authorization: `Bearer ${localStorage.usertoken}`}
    })
    .then(res => {
        console.log(res)
       return res.data
    })
    .catch(err => {
        console.log(err)
    })
}


export const login = user => {
  return axios
    .post('api/login', {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem('usertoken', res.data.token)
      console.log(localStorage.usertoken)
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

// export const getProfile = token => {
//   return axios
//     .get('api/profile', {
//       headers: { Authorization: ` ${token}` }
//     })
//     .then(res => {
//       console.log(res)
//       return res.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }