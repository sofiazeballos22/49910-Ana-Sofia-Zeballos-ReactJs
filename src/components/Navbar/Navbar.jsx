import  './Navbar.css'
import logo from '../../assets/lenceria.png'
import { NavLink } from 'react-router-dom';


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
  ];

   const Navbar = () => {
        return (
            <header className="bg-rose-800">
                <div className="container m-auto py-6 flex justify-between items-center">
                    <img src={logo} alt="logo" className='header__logo'/>
                    <h1 className="header__tittle">Kyros Lencería</h1>
                    <nav className="flex gap-4">
                        {links.map((link) => (

            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => (
                `text-lg uppercase font-semibold ${isActive ? "text-rose-400" : "text-white"}`
              )}
            >
              {link.label}
            </NavLink>

          ))}
        </nav>
                </div>
            </header>
        )


   }


   export default Navbar