import  './Navbar.css'
import logo from '../../assets/lenceria.png'
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Boton from "../../extra/Boton";


const links = [

    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "medias",
      href: "/productos/medias",
    },
    {
      label: "packs de bombachas",
      href: "/productos/packs de bombachas",
    },
    {
      label: "conjuntos",
      href: "/productos/conjuntos",
    },

    {
      label: "trajes de baño",
      href: "/productos/trajes de baño",
    },
  ];

  const Navbar = () => {
    const { user, logout } = useContext(UserContext)
  
    return (
      <header className="bg-rose-800">
        <div className="container m-auto py-6 flex justify-between items-center">
          <img src={logo} alt="Logo" className='header__logo'/>
          <h1 className="header__tittle">Kyros Lencería</h1>
  
          <nav className="flex gap-4">
            {links.map((link) => (
  
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) => (
                  `text-lg uppercase font-semibold ${isActive ? "text-purple-400" : "text-white"}`
                )}
              >
                {link.label}
              </NavLink>
  
            ))}
  
            <CartWidget />
          </nav>
  
          {/* <CartWidget /> */}
        </div>
  
        {user.logged && <div className="flex gap-4 items-center container m-auto">
          <p className="text-white">{user.email}</p>
          <Boton onClick={logout}>Cerrar sesión</Boton>
        </div>}
      </header>
    );
  };
  
  export default Navbar;
  