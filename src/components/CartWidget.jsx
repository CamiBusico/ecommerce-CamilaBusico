import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext)

    return(

        <div className="container-fluid">

            {(cartTotal() > 0) ? <Link to={"/cart"} className="btn btn-outline-light botonCarrito position-relative">
                        <img src={"/images/cart.svg"} alt="cart" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartTotal()}
                        <span className="visually-hidden">Productos en Carrito</span>
                    </span>
            </Link> : ""}
            
        </div>
    )
}

export default CartWidget