import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map(producto => <Item key={producto.idx} producto={producto} />)}
        </div>
    )
}

export default ItemList;