import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer =()=>{
    const [datos, setDatos]= useState({});
    const {id} = useParams ();
    const [loading, setLoading] = useState(true)


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