import NavBar from './components/NavBar';
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
            Store
          </div>
        </div>

      </div>


    </>
  );
}

export default App;
