import React, { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer  = ({slogan} ) => {
    const [items, setItems]= useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(q).then(resultado=>{
            if (resultado.size){
                setItems(resultado.docs.map (producto=>({id:producto.id, ...producto.data()})));
                setLoading(false);
            } 
        })
    },[id]);


    return(
        
        <div className="container-fluid " >
            
            <h2 className="estiloSlogan">{slogan} </h2>
            
            {loading ? <Loading/> : <ItemList productos={items} />}
           
        </div>
    )
}

export default ItemListContainer