import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import ILoged from "../login/ILoged";
import "./dropdown.scss"

const attrIcons = {
  fontSize: "30px",
};


function Dropdown(props: ILoged) {
    const logged = props.isLogged;
    const name = props.name;

    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
    setToggle(!toggle)
    }

    // const [isLogged, setIsLogged] = useState(false)

    const logOff = () => <li className="text-white">Cerrar sesión</li>
    const logIn= () => <li className="text-white">Iniciar sesión</li>

    return(
        <div className="text-white">
            <BiUserCircle className={toggle ? "slide-left": "slide-right"} 
            onClick={() => handleClick()} 
            style={attrIcons} /> {name}
          {toggle && (
            <ul className={toggle ? "list-group": "scale-down-ver-top"}>
              {logged ? logOff(): logIn()}
            </ul>
          )}
        </div>
    );
}

export default Dropdown