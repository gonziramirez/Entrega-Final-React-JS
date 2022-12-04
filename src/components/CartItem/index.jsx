import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import TrashCanIcon from '../TrashCanIcon'
import "./styles.css"

const CartItem = ({item}) => {

  const {removeProduct} = useContext(Shop);

  const handleRemove = () => {
    removeProduct(item.id)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 30,
      gap: 40,
      alignItems: 'center'
    }}>
        <img src ={item.image} style={{border: "2px solid black", borderRadius: 5} } width={150} alt='cart-item'/>
        <h2>{item.name}</h2>
        <h4>Cantidad: {item.quantity}</h4>
        <h4>Precio por unidad: ${item.price}</h4>
        <div style={{width: 30}} onClick={handleRemove}>
          <TrashCanIcon className="icon-trash" />
        </div>
    </div>
  )
}

export default CartItem