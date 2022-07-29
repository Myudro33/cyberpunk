import React,{useState} from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PageSection from './components/PageSection'
import Products from './components/Products'

const App = () => {
  const [isMenuShown, setisMenuShown] = useState(false)
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setisMenuShown={setisMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Products />
      <PageSection />
    </div>
  )
}

export default App