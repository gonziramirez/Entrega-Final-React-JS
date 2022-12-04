import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ character }) => {

    const {addProduct} = useContext(Shop);
    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const navigate = useNavigate();

    const confirmPurchase = (quantity) => {
        addProduct({...character, quantity})
        setQuantityItemDetail(quantity);
    };

    const handleNavigate = () => {
      navigate('/cart')
    }

    return (
        <div className="item-detail">
            <img src={character.image} className="border rounded" width={500} alt="detail" />
            <div className="texts">
              <h1>{character.name}</h1>
              {quantityItemDetail ? 
                <button onClick={handleNavigate}>Ir al carrito</button>
              : 
                <ItemCount onAdd={confirmPurchase} initial={1} stock={character.quantity} />
              }
            </div>
        </div>
    );
};

export default ItemDetail;
