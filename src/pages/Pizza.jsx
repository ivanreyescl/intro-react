import { useEffect, useState } from 'react'
import CardPizza from "../components/CardPizza"

const Pizza = () => {  
    const [pizza, setPizza] = useState(null)
    const ENV_URL = 'http://localhost:5000/api/pizzas/p001'

    useEffect(() => {
        const fetchPizzasFromApi = async () => {
            try {
                const response = await fetch(ENV_URL)
                const data = await response.json()
                setPizza(data)
            } catch (error) {
                console.error(error)
            }
        };

        fetchPizzasFromApi()
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {pizza && (
                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                        <CardPizza
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                            description={pizza.desc}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Pizza;
