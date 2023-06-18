import { useContext } from "react"
import {CartContext} from "../Context/CartContext"
import { Link } from "react-router-dom";

const Cart = () =>{
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if(cartTotal() === 0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div class="alert alert-secondary" role="alert">
                        ¡El carrito está vacío!
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <table class="table m-3">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Cerveza</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Sub-Total</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map(item => (
                                    <tr key={item.id} >
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td>{item.nombre}</td>
                                        <td>{item.cantidad} x ${item.precio}</td>
                                        <td className="text-center">${item.cantidad * item.precio}</td>
                                        <td className="text-end"><button className="btn btn-secondary estiloBotones" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={"/images/trash.svg"} alt="Eliminar Producto" width={18} /></button></td>
                                    </tr>
                                ))}
                        <tr>
                            <td colSpan={3} className="text-end" style={{fontWeight:"bold"}}>Total a Pagar</td>
                            <td className="text-center">${sumTotal()}</td>
                            <td>&nbsp;</td>
                        </tr>
                </tbody>
                </table>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
               <button className="btn btn-outline-danger m-2 btn-sm" onClick={() => {clear()}} title="Eliminar todos los elementos del carrito">Vaciar Carrito</button>
               <Link to= {"/checkout"} className="btn btn-outline-success m-2 btn-sm"> Pagar </Link>
               </div>
        </div>
    )
}

export default Cart;