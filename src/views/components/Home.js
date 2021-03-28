import Products from '../../components/Products';
import SideMenu from '../../components/SideMenu';

import { list } from '../../data'
import { useState } from 'react';

const Home = ({ filtiring, filteredResults, addTocart }) => {

  const [category, searchCategory] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <SideMenu search={searchCategory} category={category} />
          <div className="col-sm">
            <Products data={filtiring ? filteredResults : list[category]} searchCat={category} addTocart={addTocart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
