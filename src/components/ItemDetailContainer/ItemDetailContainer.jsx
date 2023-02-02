import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/firebase";
import { useParams } from "react-router-dom";
import "./itemdetail.css";

import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [Item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { itemID } = useParams();

  async function getData() {
    let respuesta = await getSingleItem(itemID);
    setItem(respuesta);
    setIsLoading(false);
  }

  useEffect( () =>{
    getData();
  }, [])

  return (
    <>
      <h2>Detalle del producto</h2>
      {isLoading ? <Loader color="red" /> : <ItemDetail Item={Item} />}
    </> 
  );
}

export default ItemDetailContainer;
