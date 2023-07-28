
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<ProductPage/>}/>
     </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
