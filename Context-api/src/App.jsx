import './App.css'
import Child from './component/child'
import MyContext from './MyContext'

function App() {
  return (
    <>
      <MyContext.Provider value={5}>
        <Child/>
      </MyContext.Provider>
    </>
  )
}

export default App
