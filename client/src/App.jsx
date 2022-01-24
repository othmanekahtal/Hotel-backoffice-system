import { useState } from 'react'
import logo from './logo.svg'
import Routers from './router/routers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routers/>
    </div>
  )
}

export default App
