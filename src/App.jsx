import './App.css';
import React from "react";
import ItemListContainer from './components/ItemListComntainer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
        return (
          <div>
            <body className='body'>
            
                <Navbar/>
                <ItemListContainer slogan={"Más que una IPA"} />
                <Footer legal={"Producto exclusivo para mayores de 18 años"} />
            </body>
          </div>
        
        )
}

export default App;