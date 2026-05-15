import { useSelector, useDispatch } from 'react-redux'
import { increment } from './features/counter/counterSlice'
import type { RootState, AppDispatch } from './app/store'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <main>
      <h1>Kickball Teams</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </main>
  )
}

export default App
