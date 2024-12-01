
import './App.css'
import { store } from './App/store'
import {Provider} from 'react-redux'
import { Counter } from './features/counter/Counter'

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

export default App
