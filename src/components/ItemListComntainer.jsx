import React, { useEffect, useState } from "react";
// import Cards from './Cards'; 
import arrayCervezas from '../Array de productos/cervezas.json'
import ItemList from './ItemList'

const ItemListContainer  = ({slogan} ) => {
    const [items, setItems]= useState([]);

    useEffect(() => {
            const promesa = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(arrayCervezas, console.log(arrayCervezas))
                    }, 2000);
             });

            promesa.then(data => {
                    setItems(data);
            });
    }, []);


    return(
        
        <div className="container-fluid">
            <div className="row">

            <h2 className="estiloSlogan">{slogan} </h2>
            
            <ItemList productos={items} />
            {/* <Cards/> */}
            </div>
        </div>
    )
}

export default ItemListContainer