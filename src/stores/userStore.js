import { observable, action } from 'mobx'
import axios from 'axios'

const userStore = observable(
  {
    users: null,
    error: null,
    getUsers () {
      console.log(`${process.env.REACT_APP_BACKEND_URL}/users`)
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
        .then(res => res.data)
        .then(
          action('fetchSuccess', users => {
            userStore.users = users
          }),
          action('fetchError', error => {
            userStore.error = error
          })
        )
    }
  },
  {
    getUsers: action
  }
)

export default userStore
