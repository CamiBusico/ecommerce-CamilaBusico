import React, { useEffect, useState } from "react";
import arrayCervezas from '../Array de productos/cervezas.json'
import ItemList from './ItemList'
import { useParams } from "react-router-dom";

const ItemListContainer  = ({slogan} ) => {
    const [items, setItems]= useState([]);
    const {id} = useParams();

    useEffect(() => {
            const promesa = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(id ? arrayCervezas.filter (item=> item.categoria === id ): arrayCervezas)
                    }, 2000);
             });

            promesa.then(data => {
                    setItems(data);
            });
    }, [id]);


    return(
        
        <div className="container-fluid " >
            
            <h2 className="estiloSlogan">{slogan} </h2>
            
            <ItemList productos={items} />
           
        </div>
    )
}

export default ItemListContainer