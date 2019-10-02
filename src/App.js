import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart'
import Details from './components/Details'
import Default from './components/Default'
import Modal from './components/Modal'

export default class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
         <Modal/>
        </React.Fragment>
      </div>
    )
  }
}
