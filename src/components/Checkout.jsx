import { useContext, useState } from "react"
import {CartContext} from "../Context/CartContext"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { Navigate } from "react-router-dom";


const Checkout = () =>{
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const [orderId, setOrderId] = useState ("");
    const { cart, sumTotal, clear } = useContext (CartContext);

    const nuevaOrden = () =>{

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, phone:telefono, email:email}
        const items = cart.map(item=> ({id:item.id, title:item.nombre, price:item.precio, quantity:item.cantidad}))
        const fecha = new Date()
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}
                        ${fecha.getHours()}:${fecha.getMinutes()}`
        const total = sumTotal();
        const order = {buyer: buyer, items:items, date:date, total:total}

        const db = getFirestore()
        const OrdersCollection = collection (db, "orders");
        addDoc(OrdersCollection, order).then(resultado=>{
            setOrderId(resultado.id)
            clear()



        })




    }

    return (
        <div className="container my-5">
            <div className="row" style={{justifyContent:"space-around"}} >
                <div className="col-md-5 offset-md-1">
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" onInput={(e)=> {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Correo Electrónico</label>
                        <input type="text" className="form-control" onInput={(e)=> {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="text" className="form-control" onInput={(e)=> {setTelefono(e.target.value)}}/>
                    </div>
                    
                </div>

                <div className="col-md-5">
                    <thead >
                        <tr >
                        <th scope="col">Productos comprados</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                    {cart.map(item => (
                                    <tr key={item.id}  >
                                        <td className="p-2"><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td className="p-2">{item.nombre}</td>
                                        <td className="p-2">{item.cantidad} x ${item.precio}</td>
                                        
                                    </tr>
                                ))}
                        <tr>
                            <td colSpan={3} className="text-end" style={{fontWeight:"bold"}}>Total a Pagar: </td>
                            <td className="text-center"> ${sumTotal()}</td>
                            
                        </tr>
                    </tbody>

                </div>
                    <div className="text-center">
                    <button type="button" className="estiloBotones my-2 p-1"  style={{backgroundColor:"#d2c885"}}
                    onClick={nuevaOrden}> Finalizar Pedido </button>
                    </div>
            </div>

            <div className="row">
                <div className="col text-center">
                 
                 {orderId ? <Navigate to={"/fincompra/" + orderId} /> : <p className="p-4 ">Complete los campos restantes para acceder a su compra</p>} 

                </div>
            </div>

        </div>
    )

}

export default Checkout