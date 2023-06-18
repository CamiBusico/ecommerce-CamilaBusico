import './App.css';
import React from "react";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Checkout from './components/Checkout';
import FinCompra from './components/FinCompra';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import CartContextProvider from './Context/CartContext';
import Cart from './components/Cart';


function App() {
        return (
          
            <div className='' style={{backgroundColor:'var(--colorTres)'}}>
                <CartContextProvider>
                <BrowserRouter>
                <Navbar/>
                <Carousel/>
                <Routes >
                    <Route path={"/"} element={<ItemListContainer slogan={"Más que una IPA"} />} />
                    <Route path={'/category/:id'} element={<ItemListContainer slogan={"Más que una IPA"} />} />
                    <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
                    <Route path={'/cart'} element={<Cart/>} />
                    <Route path={'/checkout'} element={<Checkout/>} />
                    <Route path={'/fincompra/:orderId'} element={<FinCompra/>} />
                    <Route path={'/*'} element={ <div style={{height:"100vh"}}>
                    <div className="alert alert-danger m-2 text-center" role="alert" >ERROR 404 NOT FOUND</div>
                    </div>}/>
                </Routes>
                <Footer legal={"Producto exclusivo para mayores de 18 años"} />
                </BrowserRouter>
                </CartContextProvider>
            </div>
         
        
        )
}

export default App;