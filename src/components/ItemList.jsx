import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <div className="d-flex flex-wrap" style={{alignSelf:"center"}}>
            {productos.map(producto => <Item key={producto.idx} producto={producto} />)}
        </div>
    )
}

export default ItemList;