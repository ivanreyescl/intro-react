import Header from './Header'
import CardPizza from "./CardPizza"
import Pizza from "./Pizza"
import { useState } from 'react'

const Home = () => {  
    const [pizza, setPizza] = useState(null)

    return (
        <>
            <Header/>
            <Pizza setPizza={setPizza} />
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
        </>
    )
}

export default Home;
