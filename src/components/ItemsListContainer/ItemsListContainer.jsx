import  './ItemsListContainer.css'


const ItemsListContainer = ({greeting}) => {
    return (
       
            <section className="list__container">
                <h2 className="list__tittle">Productos</h2>
                <p>{greeting}</p>
            </section>
    )


}


export default ItemsListContainer