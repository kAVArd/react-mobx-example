import { observable, action, runInAction } from 'mobx'
import axios from 'axios'

const userStore = observable(
  {
    users: null,
    error: null,
    getUsers () {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
        .then(res => res.data)
        .then(
          users => {
            runInAction(() => {
              userStore.users = users
            })
          },
          error => {
            runInAction(() => {
              userStore.error = error
            })
          }
        )
    }
  },
  {
    getUsers: action
  }
)

export default userStore
