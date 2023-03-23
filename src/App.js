import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Products from './pages/products/Products.jsx'
import Product from './pages/product/Product.jsx'
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";


const Layout = () => {
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
