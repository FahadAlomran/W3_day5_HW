import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './component/Footer'
import Nav from './component/Nav'
import Home from './component/Home'
import Riyadh from './component/Riyadh'
import { SimpleGrid } from '@chakra-ui/react'
import Jeddah from './component/Jeddah'
import Makkah from './component/Makkah'
import Medina from './component/Medina'

function App() {
 

  return (
   <>
   <nav>
    <Nav/>
   </nav>

<Home/>
<SimpleGrid columns={2} spacing={5}>
<Riyadh/>
<Jeddah/>
<Makkah/>
<Medina/>
   </SimpleGrid>
   <footer>
    <Footer/>
   </footer>
   
   </>
  )
}

export default App
