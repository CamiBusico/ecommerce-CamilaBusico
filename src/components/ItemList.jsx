import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <div className="d-flex flex-wrap cardsQuery" >
            {productos.map(producto => <Item key={producto.idx} producto={producto} />)}
        </div>
    )
}

export default ItemList;