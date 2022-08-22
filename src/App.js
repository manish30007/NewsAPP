
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News  from './component/News'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Your API key is: d943f98512b045c6ada2b91021fe63aa
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apiKey = process.env.REACT_APP_News_API
  pageSize=6;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }     
  render() {
    return (
      <div>
      <Router>
       <Navbar/>
       <LoadingBar color='#f11946' progress={this.state.progress} height={2.5} />
       <Switch>
          <Route exact path="/Home"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Home" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
       </Switch>
       </Router>
      </div>
    )
  }
}







