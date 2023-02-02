import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";

function ItemDetail({Item}) {

    const [countInCart, setCountInCart] = useState(0);

    const { addToCart } = useContext(cartContext);

    function handleAddToCart(count) {

        setCountInCart(count);
        addToCart(Item, count)
    }

    return (
        <div className="card-detail_main">
            <div className="card-detail_img">
                <img src={Item.img} alt={Item.title} />
            </div>
            <div className="card-detail_detail">
                <h1>{Item.title}</h1>
                <h4 className="priceTag">$ {Item.price}</h4>
                <p>{Item.description}</p>
            </div>
            <>
            {
                countInCart > 0 ? 
                <button>
                    <Link to="/cart">Ir al carrito</Link>
                </button>
                :
                <ItemCount stock={Item.stock} onAddToCart={handleAddToCart}/>
            }
            </>
        </div>
    );
}


export default ItemDetail;