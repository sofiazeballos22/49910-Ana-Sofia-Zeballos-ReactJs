const Boton = ({ children, className = "", onClick }) => {

    return (
      <button
          onClick={onClick}
        className={` py-2 px-4  ${className}`}
      >
        {children}
      </button>
    );
  };

  export default Boton;
