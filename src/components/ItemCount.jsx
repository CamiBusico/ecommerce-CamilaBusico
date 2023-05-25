import { useEffect, useState } from "react"

const ItemCount =({stock}) =>{
    const [unidades, setUnidades] = useState (0);
    const [unidadesStock, setUnidadesStock]= useState(stock);

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

    const onAdd = () =>{
                if (unidades <= unidadesStock){
                    setUnidadesStock(unidadesStock - unidades);
                    setUnidades(0)
                }
    }

    useEffect(()=>{
        setUnidadesStock(stock);
    },[stock])


    return(
         <div>
            <p>Cantidad: {unidades} </p>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary estiloBotones" onClick={decrementar}>-</button>
                <button type="button" className="btn btn-outline-primary estiloBotones">{unidades} </button>
                <button type="button" className="btn btn-outline-primary estiloBotones" onClick={incrementar}>+</button>
            </div>
            <div><button className="btn btn-outline-primary my-2 estiloBotones" onClick={onAdd}>Agregar al carrito</button></div>
         </div>
    )
}

export default ItemCount;