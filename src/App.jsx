import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import { Carousel } from 'react-responsive-carousel'
import CarouselEffect from './Components/Carousel/CarouselEffect'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'
import Routing from './Pages/Router/Router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routing/>
    </>
  )
}

export default App
