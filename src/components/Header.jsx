import './Header.css'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <Navbar/>
            <header className="d-flex align-items-center text-center bg-dark text-white p-3" >
                <div className="container">
                    <h1 className="h3">¡Pizzería Mamma Mia!</h1>
                    <span>¡Tenemos las mejores pizzas que podrás encontrar!</span>
                    <hr/>
                </div>
            </header>
        </>
    )
}

export default Header