import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <div className="d-flex flex-wrap cardsQuery" >
            {productos.map(producto => <Item key={producto.id} producto={producto} />)}
        </div>
    )
}

export default ItemList;