import Header from './Header'
import CardPizza from "./CardPizza"
import { pizzas } from "../pizzas"

const Home = () => {  
    return (
    <>
        <div>
            <Header/>
            <div className="container mt-4">
                <div className="row">
                {pizzas.map((pizza, index) => (
                    <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
                    <CardPizza
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                    />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </>
    )
}

export default Home