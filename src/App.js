import React from 'react'
import { observer } from 'mobx-react'

const App = observer(({ appStore, userStore }) => {
  return (
    <>
      <h1>Count is {appStore.count}</h1>
      <button onClick={appStore.incCount}>Inc</button>
      <button onClick={appStore.decCount}>Dec</button>
      <div>
        <h3>Count by Three: {appStore.countByThree}</h3>
      </div>
      <div>
        <button onClick={userStore.getUsers}>Get users</button>
        <ul>
          {userStore.users && userStore.users.map(user => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </>
  )
})

export default App
