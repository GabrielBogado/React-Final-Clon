import React, { useState } from "react";

function ToggleButton(props) {
  const [isActive, setIsActive] = useState(false);

  function handleClick(evt) {    
    evt.preventDefault();
    setIsActive(!isActive);
  }

  let classNameButton = isActive ? "card-favicon d-flex justify-content-center align-items-center favorite" : "card-favicon d-flex justify-content-center align-items-center";

  return (
    <button className={classNameButton} onClick={handleClick}>
      {props.icon}
    </button>
  );
}

export default ToggleButton;