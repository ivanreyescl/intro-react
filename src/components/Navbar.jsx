import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const total = 25000
    const token = true // decidí dejarlo para que se pueda cambiar entre true y false para realizar las pruebas, pero en la versión final supongo que esta funcionalidad va a cambiar?
    const formattedTotal = total.toLocaleString()
    return (
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item-title">
                        <Link className="nav-link text-white" to="/">¡Pizzería Mamma Mia!</Link>
                    </li>
                    <li className="nav-item-box">
                        <Link className="nav-link text-white" to="/">🍕 Home</Link>
                    </li>
                    {/*
                        <li className="nav-item-box">
                            <Link className="nav-link text-white" to="/pizza/p001">🍕 Pizzas</Link>
                        </li>
                    */}
                    <li className="nav-item-box">
                        <Link className="nav-link text-white" to={token ? "/profile" : "/login"}>
                            {token ? "👤 Profile" : "🔐 Login"}
                        </Link>
                    </li>
                    <li className="nav-item-box">
                                            {/* de momento dejé la ruta del logout a home */}
                        <Link className="nav-link text-white" to={token ? "/" : "/register"}>
                            {token ? "🔒 Logout" : "📝 Register"}
                        </Link>
                    </li>
                </ul>
                <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item-box">
                        <Link className="nav-link text-white" id="total_pizza" to="/cart">
                            🛒 ${formattedTotal}
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar