import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.scss'

/**
 * Card que muestra el producto o personaje
 * @property {Object} product Recibe el product en formato de objeto para renderizarlo
 * @returns JSX con el renderizado del producto
 */

const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    //Navegar hacia el detalle del producto
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div 
      onClick={navigateDetail} 
      className= "card-detail"
    >
      <img src={product.image} className="img-producto" alt="character"/>
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
    </div>
  )
}

export default Item