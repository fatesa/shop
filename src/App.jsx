import './App.css'
import Header from './layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import ProductList from './pages/ProductList'
import ProudctInfo from './pages/ProductInfo'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          {/* <Main /> */}
          <Routes>
            <Route path='/' element={<Main />} />            
            <Route path='/products' element={<ProductList />} />
            {/* :id -> products/1,2,3과 같음 */}
            <Route path='/products/:id' element={<ProudctInfo />} />
          </Routes>
        </BrowserRouter>
      </div>      
    </>
  )
}

export default App
