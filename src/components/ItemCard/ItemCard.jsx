import { Link } from "react-router-dom";
import Boton from "../../extra/Boton";

const ItemCard = ({item}) => {

  return (
    <article className="w-80">
      <img src={item.img} alt={item.name} />
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <hr />
      <p>{item.description}</p>
      { item.stock <= 10 && <p className="font-bold text-red-500">Quedan sólo {item.stock} unidades!</p> }

      <p className="text-xl font-bold">Precio: ${item.price}</p>

      <Boton>
      <Link className="text-white text-xl px-10 bg-rose-800 justify-center" to={`/item/${item.id}`}>Ver más</Link>
      </Boton>
    </article>
  );
};

export default ItemCard;

