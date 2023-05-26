import './App.css';
import React from "react";
import ItemListContainer from './components/ItemListComntainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
        return (
          
            <div className='' style={{backgroundColor:'var(--colorTres)'}}>
                <BrowserRouter>
                <Navbar/>
                <Routes >
                    <Route path={"/"} element={<ItemListContainer slogan={"Más que una IPA"} />} />
                    <Route path={'/category/:id'} element={<ItemListContainer slogan={"Más que una IPA"} />} />
                    <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
                    <Route path={'/*'} element={<div class="alert alert-danger m-2" role="alert">ERROR 404 NOT FOUND</div>}/>
                </Routes>
                <Footer legal={"Producto exclusivo para mayores de 18 años"} />
                </BrowserRouter>
            </div>
         
        
        )
}

export default App;