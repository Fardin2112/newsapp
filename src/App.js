import React, { Component } from 'react'
import Navbar from './component/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Headline from './component/Headline'
import About from './About/About'

export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Navbar/>
     <div className='container'>
     <Routes>
      <Route path="/" element={<Headline country="in" category="general"/>}/>
      <Route path="/about" element={<About/>}/>
       {/* I used key bec i have to reload headline for another category but react can't reload it think that it's same component */}
      <Route path="/business" element={<Headline  key="business" country="in" category="business"/>}/>
      <Route path="/entertainment" element={<Headline  key="entertainment" country="in" category="entertainment"/>}/>
      <Route path="/general" element={<Headline key="general" country="in" category="general"/>}/>
      <Route path="/health" element={<Headline  key="health" country="in" category="health"/>}/>
      <Route path="/science" element={<Headline  key="science" country="in" category="science"/>}/>
      <Route path="/sports" element={<Headline  key="sports" country="in" category="sports"/>}/>
      <Route path="/technology" element={<Headline  key="technology" country="in" category="technology"/>}/>
      
     </Routes>
     </div>
     </BrowserRouter>
    )
  }
}

