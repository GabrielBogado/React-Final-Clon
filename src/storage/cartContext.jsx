import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });

const Provider = cartContext.Provider;

function CartContextProvider(props){

    const [cart, setCart] = useState([]);


    function addToCart(item,count){
        let indexItemInCart = cart.findIndex( itemInContext => itemInContext.id === item.id )   
        let isItemInCart = indexItemInCart !== -1;
        const newCart = [...cart];

        if (isItemInCart){
            newCart[indexItemInCart].count += count
            setCart(newCart)
        }
        else {

            newCart.push( {...item, count: count})        
            setCart(newCart);
        }
    }
    function deleteCart (){
        return(
        setCart([])
        )
    }
    let totalItemsInCart = 0;
    cart.forEach( item => totalItemsInCart += item.count);
    
    function totalItemsInCartfn(){
        let totalItemsInCart = 0;
        cart.forEach( item => totalItemsInCart += item.count);
        return totalItemsInCart;
    }

    return(
        <Provider value={ {
            cart, 
            addToCart,
            totalItemsInCart,
            totalItemsInCartfn,
            deleteCart
            }}>
            {props.children}
        </Provider>
    )
}

export { cartContext, CartContextProvider };