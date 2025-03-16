import { useContext } from 'react'
import CardPizza from "../components/CardPizza"
import { PizzaContext } from "../context/PizzasContext"

const Pizza = () => {
    const {pizza, loading } = useContext(PizzaContext)

    return (
        <div className="container mt-4">
            <div className="row">
                {pizza && pizza.map((p, index) => (
                    <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
                        <CardPizza
                            id = {p.id}
                            name={p.name}
                            price={p.price}
                            ingredients={p.ingredients}
                            img={p.img}
                            description={p.desc}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pizza;
