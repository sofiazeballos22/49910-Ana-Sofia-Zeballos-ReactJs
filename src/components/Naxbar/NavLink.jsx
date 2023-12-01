const NavLink = ({href,text}) => {


    return (
        <a className="text-orange-200 hover:text-orange-50 text-xl uppercase font-semibold" href={href}>
        {text}
        </a>
    );
};

export default NavLink