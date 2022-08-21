
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Your API key is: d943f98512b045c6ada2b91021fe63aa
export default class App extends Component {
  pageSize=5;
  render() {
    return (
      <div>
      <Router>
       <Navbar/>
       <Switch>
       <Route exact path="/" key="home"  ><News pageSize={this.pageSize} country="in" category="general"/></Route>
        <Route exact path="/about" key="about"  ><News pageSize={this.pageSize} country="in" category="general"/></Route>
        <Route exact path="/general" key="general"  ><News pageSize={this.pageSize} country="in" category="general"/></Route>
        <Route exact path="/business" key="business" ><News pageSize={this.pageSize} country="in" category="business"/></Route>
        <Route exact path="/entertainment" key="entertainment" ><News pageSize={this.pageSize} country="in" category="entertainment"/></Route>
        <Route exact path="/health" key="health" ><News pageSize={this.pageSize} country="in" category="health"/></Route>
        <Route exact path="/science" key="science" ><News pageSize={this.pageSize} country="in" category="science"/></Route>
        <Route exact path="/sports" key="sports" ><News pageSize={this.pageSize} country="in" category="sports"/></Route>
        <Route exact path="/technology" key="technology"  ><News pageSize={this.pageSize} country="in" category="technology"/></Route>
       </Switch>
       </Router>
      </div>
    )
  }
}







