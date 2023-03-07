// import "../node_modules/bootstrap/dist/css/bootsrap.min.css";
// import "bootstrap\dist\css\bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
// import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
      
      <Route path='/' element={<Home></Home>}></Route>  
      <Route path='/about' element={<About></About>}></Route>  
      <Route path='/service' element={<Service></Service>}></Route>  
      <Route path='/contact' element={<Contact></Contact>}></Route>  

      {/* <Redirect to="/"></Redirect> */}
      
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
