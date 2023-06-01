import React from "react";

const CartWidget = () => {
    return(

        <div className="container-fluid">

            <button type="button" className="btn btn-outline-light botonCarrito position-relative">
                        <img src={"/images/cart.svg"} alt="cart" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        1
                        <span className="visually-hidden">Productos en Carrito</span>
                    </span>
            </button>
            
        </div>
    )
}

export default CartWidget