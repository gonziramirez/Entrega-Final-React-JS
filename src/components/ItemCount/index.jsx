import React, { useContext, useState } from "react";
import "./styles.scss";

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial);
    
    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }
    return <div className="item-count-container">
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onPlus}>+</button>
        <button onClick={()=>onAdd(count)}>Confirmar compra</button>
    </div>;
};

export default ItemCount;
