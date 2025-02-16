import React, { useState } from 'react'
import { pizzaCart } from '../pizzas.js'

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart)

    const increaseQuantity = (id) => {
        setCart(cart.map(pizza => 
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        ))
    }
    
    const decreaseQuantity = (id) => {
        setCart(cart.map(pizza => {
            if (pizza.id === id) {
                return pizza.count > 1 ? { ...pizza, count: pizza.count - 1 } : null
            }
            return pizza
        }).filter(pizza => pizza !== null))
    }
    
    const total = cart.reduce((total, pizza) => {
        return total + pizza.price * pizza.count
    }, 0)

    return (
        <div className="container text-center">
            {cart.length > 0 ? (
                <>
                    {cart.map(pizza => (
                        <div key={pizza.id + pizza.name} className="row align-items-center mb-3">
                            <div className="col-md-2">
                                <img src={pizza.img} alt={pizza.name} className="img-fluid" />
                            </div>
                            <div className="col-md-4">
                                <h3>{pizza.name}</h3>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <p className="p-5 fw-bold">Precio: ${pizza.price}</p>
                                <button className="btn btn-outline-danger" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                                <span className="mx-3 fw-bold">{pizza.count}</span>
                                <button className="btn btn-outline-primary" onClick={() => increaseQuantity(pizza.id)}>+</button>
                            </div>
                        </div>
                    ))}
                    <h3 className="text-start">Total: ${total}</h3>
                    <button className="btn btn-outline-dark">Pagar</button>
                </>
            ) : (
                <div>
                    <h3>El carrito está vacío</h3>
                    <button
                        className="btn btn-outline-warning"
                        onClick={() => {
                            if (window.confirm('¿Estás seguro? Esto reiniciará las pizzas iniciales')) {
                                setCart(pizzaCart)
                            }
                        }}>
                        Restaurar carrito
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart
