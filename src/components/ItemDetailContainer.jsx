import { useEffect, useState } from "react"
//import arrayProductos from "../Array de productos/cervezas.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer =()=>{
    const [datos, setDatos]= useState({});
    const {id} = useParams ();
    const [loading, setLoading] = useState(true)

 // useEffect (()=>{
 //     const promesa = new Promise((resolve) => {
 //         setTimeout(()=>{
 //             resolve(arrayProductos.find(datos=> datos.idx === parseInt(id)))
 //         },2000);
 //     });
 //     promesa.then(data =>{
 //         setDatos(data)
 //     })
 // },[id])

 useEffect(()=>{
    const db = getFirestore();
    const producto = doc (db, "items", id)
    getDoc(producto).then(resultado=>{
        setDatos({id:resultado.id, ...resultado.data()})
        setLoading(false)
    })
 },[id])

    return(
        <div >
            {loading ? <Loading/> : <ItemDetail producto={datos} />}
        </div>
    )


}

export default ItemDetailContainer