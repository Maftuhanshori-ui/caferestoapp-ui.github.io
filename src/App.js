import React, { Component } from 'react'
import { NavbarComponent } from './components';
import Home from "./pages/Home";
import MenuCafe from "./pages/MenuCafe";
import Contact from "./pages/Contact";
import Sukses from "./pages/Sukses";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/menu" component={MenuCafe} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/sukses" component={Sukses} exact />
          </Switch>
        </main>
      </Router>

    )
  }
}