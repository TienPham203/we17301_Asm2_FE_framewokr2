
import './App.css'
import ProductListAdmin from './Page/Admin/ProductList/ProductList'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './Page/Client/HomePage/HomePage'
// import ProductList from './Page/ProductList'
import { Routes, Route } from "react-router-dom"
import Dashbroad from './Page/Admin/DashBroad/Dashbroad'
import ProductList from './Page/Client/ProductList'
import Content from './Component/content/content'
function App() {


  return (


    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<Content />} />
          <Route path='productlist' element={<ProductList />} />
        </Route>



        <Route path='/admin/' element={<Dashbroad />}>
          <Route index element={<ProductListAdmin />} />
        </Route>


      </Routes >
    </div>

  )
}

export default App
