import React, {useContext} from "react";
import { cartContext } from "../storage/cartContext";

function Contacto() {
  const miContexto = useContext(cartContext);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Hola gracias por contactarnos</p>
    </div>
  );
}

export default Contacto;
