import NavBar from './components/NavBar';
import Products from './components/Products';
import SideMenu from './components/SideMenu';
import './styles/App.css';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <div className="row">
          <SideMenu></SideMenu>
          <div className="col-sm">
            <Products/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
