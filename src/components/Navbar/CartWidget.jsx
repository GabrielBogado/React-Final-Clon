import { useContext } from "react";
import React from "react";
import { cartContext } from "../../storage/cartContext";
import {Link} from "react-router-dom"

function CartWidget() {
  const valueContext = useContext(cartContext);
  const totalItems = valueContext.totalItemsInCartfn();

  return (
    <div>
      <Link to="/cart">
      <span>🛒</span>
      {totalItems > 0 && <span>{totalItems}</span>}
      </Link>
    </div>
  );
}

export default CartWidget;
