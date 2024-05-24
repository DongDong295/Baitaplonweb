import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header.jsx';
import Shop from './pages/shop.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from './components/product.jsx'
import CartFeature from './pages/cartfeature.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';
import Footer from './components/footer.jsx';
import Result from './components/result.jsx';


const MainPage = () => (
  <Provider store={store}>
      <>
        <AppHeader />
        <Shop />
        <Footer/>
      </>
  </Provider>
)

const Cart = () => {
  return (
    <Provider store={store}>
      <CartFeature/>
    </Provider>
  );
}

const SearchResult = () =>{
  return (
    <Provider store={store}>
        <AppHeader />
        <Result/>
        <Footer/>
    </Provider>
  );
}

const router = createBrowserRouter([
  {path:'/', element:<MainPage/>},
  {
    path: "/product/:id",
    element: <Product/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/result",
    element: <SearchResult/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router = {router}/>
  </React.StrictMode>,
)
