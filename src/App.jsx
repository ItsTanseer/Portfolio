

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Projects from './Projects'
import Home from './Home'
import Skills from './Skills'
import Contact from './Contact'
import CustomCursor from './Components/CustomCursor'


function App() {
  

  return (
    <div className='mx-auto m-2 '>
      <CustomCursor/>
      <div className='fixed left-1/2 -translate-x-1/2 z-40 top-0 self-center'>
      <Navbar/>

      </div>
      <Routes>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
  </Routes>
      
    </div>
  )
}

export default App
