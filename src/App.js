import React,{useState} from 'react'
import Contact from './components/Contact'
import Customers from './components/Customers'
import DevApi from './components/DevApi'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PageSection from './components/PageSection'
import Products from './components/Products'
import Footer from './components/Footer'
const App = () => {
  const [isMenuShown, setisMenuShown] = useState(false)
  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setisMenuShown={setisMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Products />
      <PageSection />
      <DevApi/>
      <Customers/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App