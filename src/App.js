import React from 'react'
import { observer } from 'mobx-react'

const App = observer(({ store }) => {
  return (
    <>
      <h1>Count is {store.count}</h1>
      <button onClick={store.addCount}>Add</button>
      <button onClick={store.decCount}>Dec</button>
      <div>
        <h3>Count by Three: {store.countByThree}</h3>
      </div>
    </>
  )
})

export default App
