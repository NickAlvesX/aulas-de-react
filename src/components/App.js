import React  from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar';
import ShoppingCart from "./ShoppingCart";
import ItemsProvider from './ItemsProvider'
import Home from "./Home";
import { HOME, SHOPPING_LIST } from "../routes";

const App = () => (
  <Router>
    <ItemsProvider>
      <Navbar />
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route path={SHOPPING_LIST}>
          <ShoppingCart />
        </Route>
      </Switch>
    </ItemsProvider>
  </Router>
)

export default App
