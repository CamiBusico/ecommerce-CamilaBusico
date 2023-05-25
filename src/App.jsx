import './App.css';
import React from "react";
import ItemListContainer from './components/ItemListComntainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
        return (
          
            <div className='' style={{backgroundColor:'var(--colorTres)'}}>
            
                <Navbar/>
                <ItemListContainer slogan={"Más que una IPA"} />
                <Footer legal={"Producto exclusivo para mayores de 18 años"} />
            </div>
         
        
        )
}

export default App;