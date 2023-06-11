import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount =({stock, onAdd}) =>{
    const [unidades, setUnidades] = useState (0);
    const [unidadesStock, setUnidadesStock]= useState(stock);
    const [unidadesAdded, setUnidadesAdded]= useState(false);


    const incrementar = () =>{
                        if (unidades < unidadesStock){
                                    setUnidades(unidades + 1)
                        }
    }

    const decrementar = () =>{
                        if (unidades > 0){
                            setUnidades(unidades - 1)
                        }
    }

    const addToCart = () =>{
                if (unidades <= unidadesStock){
                    setUnidadesStock(unidadesStock - unidades);
                    setUnidades(0)
                    setUnidadesAdded(true)
                    onAdd(unidades)
                }
    }

    useEffect(()=>{
        setUnidadesStock(stock);
    },[stock]);


    return(
         <div>
            <p>Cantidad: {unidades} </p>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary estiloBotones" onClick={decrementar}>-</button>
                <button type="button" className="btn btn-outline-primary estiloBotones">{unidades} </button>
                <button type="button" className="btn btn-outline-primary estiloBotones" onClick={incrementar}>+</button>
            </div>
            
            {unidadesAdded ? <Link to={"/cart"} className="btn btn-outline-primary my-2 estiloBotones">Finalizar Compra</Link> : 
            <button className="btn btn-outline-primary my-2 estiloBotones" onClick={addToCart}>Agregar al carrito</button>}
         </div>
    )
}

export default ItemCount;