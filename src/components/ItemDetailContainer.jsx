import { useEffect, useState } from "react"
import arrayProductos from "../Array de productos/cervezas.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer =()=>{
    const [datos, setDatos]= useState({});
    const {id} = useParams ();

    useEffect (()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(arrayProductos.find(datos=> datos.idx === parseInt(id)))
            },2000);
        });
        promesa.then(data =>{
            setDatos(data)
        })
    },[id])

    return(
        <div >
            <ItemDetail producto={datos} />
        </div>
    )


}

export default ItemDetailContainer