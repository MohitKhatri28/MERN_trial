import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { Teach } from './pages/teach'
import { Test } from './pages/test'
import { Class } from './pages/class'
import { Videos } from './pages/videos'
import { Doubts } from './pages/doubts'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teach/:id" element={<Teach/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/class" element={<Class/>}/>
      <Route path="/videos" element={<Videos/>}/>
      <Route path="/doubts" element={<Doubts/>}/>
    </Routes>
  )
}

export default App;