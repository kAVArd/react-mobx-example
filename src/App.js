import React from 'react'
import { observer } from 'mobx-react'

const App = observer(({ state }) => {
  return (
    <>
      <h1>Count is {state.count}</h1>
      <button onClick={state.addCount}>Add</button>
      <button onClick={state.decCount}>Dec</button>
      <div>
        <h3>Count by Three: {state.countByThree}</h3>
      </div>
    </>
  )
})

export default App
