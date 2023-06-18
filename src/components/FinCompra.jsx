import { Link, useParams } from "react-router-dom"

const FinCompra = () =>{
const {orderId} = useParams();

return(
    <div className="container">
        <div className="row">
            <div className="col alert alert-warning m-2 text-center" role="alert">
                
                <h3>¡Gracias por tu compra!</h3> 
                <p>Tu orden de compra es: <b> {orderId} </b> </p> 
                
            </div>
                <div className="text-center m-3">
                <Link to={"/"} className="btn btn-outline-primary my-2 estiloBotones p-1" style={{backgroundColor:"#d2c885"}}> Seguir comprando </Link>
                </div>
        </div>

    </div>
)
}

export default FinCompra