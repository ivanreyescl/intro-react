import './Navbar.css'

const Navbar = () => {
    const total = 25000
    const token = true
    const formattedTotal = total.toLocaleString()
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item-title">
                        <a className="nav-link text-white" aria-current="page" href="#home">¡Pizzería Mamma Mia!</a>
                    </li>
                    <li className="nav-item-box">
                        <a className="nav-link active text-white" aria-current="page" href="#home">🍕 Home</a>
                    </li>
                    <li className="nav-item-box">
                        <a className="nav-link text-white" href="#">{`${token ? `🔓Profile` : '🔐Login'}`}</a>
                    </li>
                    <li className="nav-item-box">
                        <a className="nav-link text-white" href="#">{`${token ? `🔒Logout` : '🔐Register'}`}</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">                    
                    <li className="nav-item-box">
                        <a className="nav-link text-white" href="#" id="total_pizza">{`$${formattedTotal}`}</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar