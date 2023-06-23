import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import ProductList from './pages/ProductList';
import Album from './pages/Album';
import AlbumIndex from './pages/album/AlbumIndex';
import AlbumPhoto from './pages/album/AlbumPhoto';
import AlbunSearch from './pages/album/AlbumSearch';
import NotFound from './pages/NotFound';


const Container = ({ }) => {
  return <div className="container mt-4">
    <div className="row">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/album' element={<Album />} >
          <Route index element={<AlbumIndex />} />
          <Route path=':id' element={<AlbumPhoto />} />
          <Route path='search' element={<AlbunSearch />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </div>
}


export default Container;