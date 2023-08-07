
import './App.css'
import ProductListAdmin from './Page/Admin/ProductList/ProductList'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './Page/Client/HomePage/HomePage'
// import ProductList from './Page/ProductList'
import { Routes, Route } from "react-router-dom"
import Dashbroad from './Page/Admin/DashBroad/Dashbroad'
import ProductList from './Page/Client/ProductList'
import Content from './Component/content/content'
import AddProduct from './Page/Admin/AddProduct/AddProduct'
import { useSelector } from 'react-redux'
import UpdateProduct from './Page/Admin/UpdateProduct/UpdateProduct'
import ProductDetail from './Page/Client/ProductDetail/ProductDetail'
// import Cart from "./Component/Cart/Cart"
function App() {

  const { products, isLoading, error } = useSelector((state: any) => state.products)


  // if (isLoading) return <div className="pl">
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__dot"></div>
  //   <div className="pl__text">Loading…</div>
  // </div>;
  if (error) return <div>{error}</div>;
  return (


    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<Content />} />
          <Route path='productlist' element={<ProductList />} />
          <Route path='/products/:id/product-detail' element={<ProductDetail />} />
          {/* <Route path='cart' element={<Cart />}></Route> */}
        </Route>



        <Route path='/admin/' element={<Dashbroad />}>
          <Route index element={<ProductListAdmin />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='products/:_id/update' element={<UpdateProduct />} />
        </Route>


      </Routes >
    </div>

  )
}

export default App
