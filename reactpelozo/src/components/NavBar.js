import CartWidget from "./CartWidget"

export default function Navbar () {
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/" className="site-title">
            Tienda de Pokemon TCG
        </a>
        <ul>
            <CustomLink href="/">Inicio</CustomLink>
            <CustomLink href="/eventos">Eventos</CustomLink>
            <CustomLink href="/nosotros">Nosotros</CustomLink>
            <CustomLink href="/contacto">Contacto</CustomLink>
            <CustomLink href="/colecciones">Colecciones</CustomLink>
            <CustomLink href="/carrito"><CartWidget/></CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}{...props}>{children}</a>
        </li>
    )
}