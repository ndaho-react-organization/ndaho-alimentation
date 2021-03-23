import NavBar from './components/NavBar';
import './styles/App.css';
import Home from './views/Home'

import { list } from './data'
import { useEffect, useState } from 'react';
import Cart from './views/Cart';

function App() {

  const [filtiring, isTextSearch] = useState(false);
  const [filteredResults, setSearchText] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddTocart = count => {
    setCartCount(cartCount + count)
  }

  const handleOnTextSearch = input => {
    let fullList = list.flat();
    let results = fullList.filter(item => {
      let name = item.name.toLowerCase();
      return name.indexOf(input.toLowerCase()) > -1
    })

    setSearchText(results)
  }

  useEffect(() => {
    //
  }, [filtiring])

  return (
    <>
      <NavBar textSearch={handleOnTextSearch} isTextSearch={isTextSearch} cartCount={cartCount} />
      <Home filtiring={filtiring} filteredResult={filteredResults} addTocart={handleAddTocart} />
      <Cart></Cart>
    </>
  );
}

export default App;
