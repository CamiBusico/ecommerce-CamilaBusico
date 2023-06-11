import { useContext } from "react"
import {CartContext} from "../Context/CartContext"

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
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Primero</th>
                    <th scope="col">Último</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td>{item.titulo}</td>
                                        <td>{item.cantidad} x ${item.precio}</td>
                                        <td className="text-center">${item.cantidad * item.precio}</td>
                                        <td className="text-end"><button className="btn btn-light" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={"/images/trash.svg"} alt="Eliminar Producto" width={32} /></button></td>
                                    </tr>
                                ))}
                        <tr>
                            <td colSpan={3} className="text-end">Total a Pagar</td>
                            <td className="text-center">${sumTotal()}</td>
                            <td>&nbsp;</td>
                        </tr>
                </tbody>
                <td className="text-end"><button className="btn btn-light" onClick={() => {clear()}} title="Vaciar Carrito">Vaciar Carrito</button></td>
                </table>

        </div>
    )
}

export default Cart;