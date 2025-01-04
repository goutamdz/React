import {paris,bg} from './assets/indexAsset'

import Layout from './components/Layout'

function App() {

  return (
    <>
      <Layout bg={bg} paris={paris} name={"Rita Correia"} age={32} followers="80k" likes="803k" photos="1.4k"/>
    </>
  )
}

export default App
