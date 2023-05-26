import { Link } from 'react-router-dom'
// import ItemCount from './ItemCount'

const Item = ({producto})=>{

    let estiloCards = {width:"18rem",
    margin:"2%", 
    backgroundColor:"var(--colorCinco)", 
    color:"white"
    }

    return(

        <>

            <div className="col-md-3">
                    <Link to={"/item/" + producto.idx} className='text-decoration-none'>
                        <div className="card" style={estiloCards}>
                            
                            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body" >
                                <h5 className="card-title tituloCard">{producto.tipo} {producto.nombre} </h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p>${producto.precio} </p>
                              {/* <ItemCount stock={producto.stock} /> */}

                            </div>
                           
                         </div>
                         </Link>

            </div>
        </>
 
    )
}
export default Item