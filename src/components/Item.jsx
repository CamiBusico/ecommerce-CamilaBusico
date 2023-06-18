import { Link } from 'react-router-dom'


const Item = ({producto})=>{

    return(

        <>
        
            <div className="col mx-5 cardsQuery">
                    <Link to={"/item/" + producto.id} className='text-decoration-none'>
                        <div className="card estiloCards" >
                            
                            <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body" >
                                <h5 className="card-title tituloCard">{producto.tipo} {producto.nombre} </h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p>${producto.precio} </p>

                            </div>
                           
                         </div>
                         </Link>

            </div>
        </>
 
    )
}
export default Item