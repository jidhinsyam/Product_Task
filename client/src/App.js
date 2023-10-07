import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './components/forms/Categories';
import Categoriest from './pages/Categoriest';
import Subelectronics from './pages/Subcategory';
import Subcategory from './pages/Subcategory';
import Product from './pages/Product';
import Allproduct from './pages/Allproduct';
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addcategory' element={<Categoriest/>}/>
    <Route path='/addsubcategory' element={<Subcategory/>}/>
    <Route path='/addproduct' element={<Product/>}/>
    <Route path='/allproduct/:id' element={<Allproduct/>}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
