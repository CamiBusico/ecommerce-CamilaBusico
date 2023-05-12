import React from "react";



const Cards  = () => {
   
    const agregar = () => {alert("Has añadido el producto al carrito")}

    /*let estiloBotones = {backgroundColor: "var(--colorTres)",
                        color:"var(--colorCuatro)",
                        border: "black",
                         }*/
    
 
    let estiloCards = {width:"18rem",
                        margin:"2%", 
                        backgroundColor:"var(--colorCinco)", 
                        color:"white"
                    }

    return(

        <div className="main"> 

            <div className="cardsCervezas">
                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/dobleipafoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body" >
                                <h5 className="card-title tituloCard">Doble IPA Catedral</h5>
                                <p className="card-text">La especialidad de la casa. Fuerte e intensamente lupulada, pero limpia y seca, sin asperezas.</p>
                                <a href="/" className="btn btn-primary estiloBotones" onClick={agregar} >Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/ipafoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title tituloCard">American IPA Leñas</h5>
                                <p className="card-text">Cerveza lupulada y amarga, moderadamente fuerte. Perfil limpio y final seco.</p>
                                <a href="/" className="btn btn-primary estiloBotones" onClick={agregar}  >Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/goldenfoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title tituloCard">Golden Ale Castor</h5>
                                <p className="card-text">Es ligera, de carácter maltoso dulce, con caracteres frutales. No es demasiado amarga.</p>
                                <a href="/" className="btn btn-primary estiloBotones" onClick={agregar}  >Añadir</a>
                            </div>
                         </div>
                           
                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/blondealefoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title tituloCard">Blonde Ale Caviahue</h5>
                                <p className="card-text">Fácil de beber y accesible, con interesantes notas a fruta, lúpulo o carácter de malta de amargor medio.  </p>
                                <a href="/" className="btn btn-primary  estiloBotones" onClick={agregar}  >Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/scottishheavyfoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title tituloCard">Scottish Heavy Chapelco</h5>
                                <p className="card-text">Cerveza tostada y acaramelada. De cuerpo medio, Los lúpulos sólo son utilizados para balancear y apoyar la malta. </p>
                                <a href="/" className="btn btn-primary estiloBotones" onClick={agregar} >Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/negrafoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title tituloCard">American Porter Bayo</h5>
                                <p className="card-text">Maltosa, oscura y sustancial.
                                                            Su sabor moderado a pan, bizcocho y malta tostada incluye un carácter de caramelo, nuez y toffee. </p>
                                <a href="/" className="btn btn-primary estiloBotones" onClick={agregar}>Añadir</a>
                            </div>
                         </div>
             </div>
        
        </div>
    )
}



export default Cards