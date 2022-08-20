
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Your API key is: d943f98512b045c6ada2b91021fe63aa
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route exact path="/" key="home" element={<News pageSize={5} country="in" category="general"/>}></Route>
        <Route exact path="/about" key="about" element={<News pageSize={5} country="in" category="general"/>}></Route>
        <Route exact path="/general" key="general" element={<News pageSize={5} country="in" category="general"/>}></Route>
        <Route exact path="/business" key="business"element={<News pageSize={5} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment" key="entertainment"element={<News pageSize={5} country="in" category="entertainment"/>}></Route>
        <Route exact path="/health" key="health"element={<News pageSize={5} country="in" category="health"/>}></Route>
        <Route exact path="/science" key="science"element={<News pageSize={5} country="in" category="science"/>}></Route>
        <Route exact path="/sports" key="sports"element={<News pageSize={5} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" key="technology" element={<News pageSize={5} country="in" category="technology"/>}></Route>
       </Routes>
       </BrowserRouter>
      </div>
    )
  }
}







