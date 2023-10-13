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
      <Route path="/" element={<Headline/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
     </div>
     </BrowserRouter>
    )
  }
}

