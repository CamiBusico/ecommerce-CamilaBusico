import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(

    <div className="container-fluid header">
               {/* logo */}
                <div className="">
                    <Link className="navbar-brand" to="/"> <img src={"/images/DOBLE IPA 3.png"} alt="Logo" /></Link>
                </div>

                {/* nav hamburguesa bootstrap */}
            <div className="row partesNav menu">
               <nav className="navbar navbar-expand-lg col">
                    <div className="container-fluid">
                        <button className="navbar-toggler botonExpandir" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to={"/"} >Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/Clasicas"}>Clásicas</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/Especiales"}>Especiales</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>

            <div className="col">
             <CartWidget/>
            </div>
         </div>
    </div>
    
)}

export default Navbar