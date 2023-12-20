import Boton from "../../extra/Boton";

const QuantitySelector = ({cantidad, stock, setCantidad}) => {

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1)
  }

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  return (
    <div className="flex gap-4 items-center text-rose-800 px-10 text-xl ">
      <Boton className="text-black text-3xl" onClick={handleRestar}>-</Boton>
      <span>{cantidad}</span>
      <Boton className="text-black text-xl" onClick={handleSumar}>+</Boton>
    </div>
  );
};

export default QuantitySelector;