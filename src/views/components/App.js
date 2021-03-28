import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from '../../components/NavBar';
import Erreur404 from '../../components/Erreur404';
import '../../styles/App.css';
import Home from './Home'

import { list } from '../../data'
import { useState } from 'react';
import { CartPage } from './Cart';

const App = props => {

  const { items, onAddToCart, onUpdateCart } = props

  const [filtiring, isTextSearch] = useState(false);
  const [filteredResults, setSearchText] = useState([]);

  const handleAddTocart = (item, quantity) => {
    onAddToCart(item, quantity)
  }

  const handleOnTextSearch = input => {
    let fullList = list.flat();
    let results = fullList.filter(item => {
      let name = item.name.toLowerCase();
      return name.indexOf(input.toLowerCase()) > -1
    })

    setSearchText(results)
  }

  return (
    <Router>
      <NavBar textSearch={handleOnTextSearch} isTextSearch={isTextSearch} />
      <Switch>
        <Route exact path="/" render={() => <Home filtiring={filtiring} filteredResult={filteredResults} addTocart={handleAddTocart} />} />
        <Route exact path="/cart" render={() => <CartPage />} />
        <Route render={() => <Erreur404 />} />
      </Switch>
    </Router>
  );
}

export default App;
