import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import ProductList from './pages/ProductList';

const Container = ({ }) => {
  return <div className="container mt-4">
    <div className="row">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductList />} />
      </Routes>
    </div>
  </div>
}


export default Container;