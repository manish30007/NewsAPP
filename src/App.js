
import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar'
import News  from './component/News'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Your API key is: d943f98512b045c6ada2b91021fe63aa
// import LoadingBar from 'react-top-loading-bar'
const App =()=> {
  const apiKey = process.env.REACT_APP_News_API
  const pageSize=6;
 
const[progress,setProgress]=useState(0)
  
 const showprogress=(progress)=>{
    setProgress(progress)
  }     

    return (
      <div>
      <Router>
       <Navbar/>
       {/* <LoadingBar color='#f11946' progress={progress} height={2.5} /> */}
       <Switch>
          <Route exact path="/Home"><News showprogress={showprogress} apiKey={apiKey} key="Home" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/"><News showprogress={showprogress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News showprogress={showprogress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News showprogress={showprogress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News showprogress={showprogress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News showprogress={showprogress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News showprogress={showprogress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News showprogress={showprogress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News showprogress={showprogress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
       </Switch>
       </Router>
      </div>
    )
  
}
export default App






