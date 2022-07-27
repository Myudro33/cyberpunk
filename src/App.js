import React,{useState} from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [isMenuShown, setisMenuShown] = useState(false)
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setisMenuShown={setisMenuShown} />
    </div>
  )
}

export default App