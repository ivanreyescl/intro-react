import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Button from './Button'

const CardPizza = ({ id, name, price, ingredients, img, description }) => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    console.log(id, name)
    const pizzaToAdd = { id, name, price, img, description }
    addToCart(pizzaToAdd)
  }

  const formattedPrice = price.toLocaleString()

  return (
    <div className="card shadow-sm">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="text-center card-title">{name}</h5>
          <hr />
          <div className="card-text d-flex flex-column justify-content-center">
            {description && <p className="text-center text-secondary">{description}</p>}
            <h5 className="text-center text-secondary">Ingredientes:</h5>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>🍕 {ingredient}</li>
              ))}
            </ul>
          </div>
          <hr />
          <p className="text-center card-text fs-5">
            <strong>Precio:</strong> ${formattedPrice}
          </p>
          <div className="d-flex justify-content-between">
            <Button
              label="Ver más"
              bgColor="light"
              textColor="dark"
              icon="eye"
            />
            <Button 
              label="Añadir" 
              bgColor="dark"
              textColor="light"
              icon="shopping-cart"
              onClick={() => {
                handleAddToCart()
                alert("Pizza " + name + " agregada con éxito")
              }}
            />
          </div>
        </div>
    </div>
  )
}

export default CardPizza