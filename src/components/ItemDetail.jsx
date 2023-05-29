import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"


const ItemDetail =({producto})=> {
    const [datos, setDatos] = useState({});

    useEffect (()=>{
        setDatos(producto)
    },[producto])




    return(
        <div className="container-fluid  ">
        <div className="card mb-3 " style={{padding:"3%", width:"70%", marginRight:"auto", marginLeft:"auto", backgroundColor:"#e2cd82"}}>
            <div className="row g-0" >
                <div className="col-md-4">
                <img src={datos.imagen} className="card-img-top" style={{margin:"2%"}} alt={datos.nombre} />
                </div>
                <div className="col-md-8">
                <div className="card-body" style={{marginLeft:"1%"}}>
                    <h5 className="card-title">{datos.tipo} {datos.nombre}</h5>
                    <p className="card-text">{datos.descripcion}</p>
                    <p className="card-text"><small className="text-body-secondary">${datos.precio}</small></p>
                    <ItemCount stock={datos.stock} />
                </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default ItemDetail