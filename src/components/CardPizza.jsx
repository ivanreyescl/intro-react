import Button from './Button'

const CardPizza = ({ name, price, ingredients, img }) => {
  const formattedPrice = price.toLocaleString()

  return (
    <>
      <div className="card shadow-sm">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <hr />
          <div className="card-text d-flex flex-column justify-content-center">
            <h5 className="text-center text-secondary">Ingredientes:</h5>
            <span>🍕 {ingredients.join(", ")}</span>
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
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPizza