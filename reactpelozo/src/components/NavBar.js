import {Link, useMatch, useResolvedPath} from "react-router-dom"
import CartWidget from "./CartWidget"

export default function Navbar () {
    return <nav className="nav">
        <Link to="/" className="site-title">
            Tienda de Pokemon TCG
        </Link>
        <ul>
            <CustomLink to="/">Inicio</CustomLink>
            <CustomLink to="/eventos">Eventos</CustomLink>
            <CustomLink to="/nosotros">Nosotros</CustomLink>
            <CustomLink to="/contacto">Contacto</CustomLink>
            <CustomLink to="/colecciones">Colecciones</CustomLink>
            <CustomLink to="/carrito"><CartWidget/></CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}