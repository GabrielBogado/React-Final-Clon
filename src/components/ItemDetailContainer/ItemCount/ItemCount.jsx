import React, { useState } from "react";
import Button from "../../Button/Button";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart }) {
  let fijo;
  if(stock > 0){
    fijo = 1
  }else{
    fijo = 0
  }
  
  const [count, setCount] = useState(fijo);
  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <>
          { fijo === 0 ? 
            <><span>Sin Stock</span></> :
            <>
            <div className="itemcount_control">
            <Button onButtonTouch={handleSubstract}>-</Button>
            <span>{count}</span>
                <Button  onButtonTouch={handleAdd}>+</Button>
              </div>
              <div className="itemcount_btns">
                <Button onButtonTouch={()=>onAddToCart(count)}>Agregar al carrito</Button>
              </div>
            </>
          }
      </>
    </div>
  );
}

export default ItemCount;