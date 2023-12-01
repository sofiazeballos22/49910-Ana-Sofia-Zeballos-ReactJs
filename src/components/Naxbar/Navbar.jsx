import  './Navbar.css'
import logo from '../../assets/lenceria.png'
import NavLink from './NavLink'

   const Navbar = () => {
        return (
            <header className="bg-rose-800">
                <div className="container m-auto py-6 flex justify-between items-center">
                    <img src={logo} alt="logo" className='header__logo'/>
                    <h1 className="header__tittle">Kyros Lencería</h1>
                    <nav className="flex gap-4">
                        <NavLink href={"#"} text= {"Inicio"}/>
                        <NavLink href={"#"} text= {"Catálogos"}/>
                        <NavLink href={"#"} text= {"Ofertas"}/>
                        <NavLink href={"#"} text= {"Ubicación y contacto"}/>
                        <NavLink href={"#"} text= {"Nosotros"}/>
                    </nav>
                </div>
            </header>
        )


   }


   export default Navbar