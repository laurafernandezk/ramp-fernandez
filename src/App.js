import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartContainer} from './components/CartContainer/CartContainer'
function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
