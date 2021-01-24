import React from 'react'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'
import Services from './Component/Services'
import { Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Reactjs from './Component/Reactjs'
import Web from './Component/Web'
import AdobeI from './Component/AdobeI'
import Adobep from './Component/Adobep'
import MSoffice from './Component/MSoffice'
import CCNA from './Component/CCNA'



const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Services" component={Services} />
      <Route  exact path="/Contact" component={Contact} />
      <Route exact path='/Reactjs' component={Reactjs} />
      <Route exact path="/AdobeI" component={AdobeI} />
      <Route exact path="/Adobep" component={Adobep} />
      <Route exact path="/Web" component={Web} />
      <Route exact path="/MSoffice" component={MSoffice} />
      <Route exact path="/CCNA" component = {CCNA} />
      <Redirect to = '/' />
      
      </Switch>
     


    </>
  )
}

export default App
