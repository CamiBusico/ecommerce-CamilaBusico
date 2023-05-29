const Carousel = () => {
    return(
    <>        
                <div id="carouselExampleAutoplaying" className="carousel slide estiloCarousel" data-bs-ride="carousel">
                         <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="/images/fotos cerveceria/cerveceria10.png" className="d-block w-100" alt="cervecería"/>
                    </div>
                    <div className="carousel-item">
                    <img src="/images/fotos cerveceria/cerveceria11.png" className="d-block w-100" alt="cervecería"/>
                    </div>
                    <div className="carousel-item">
                    <img src="/images/fotos cerveceria/cerveceria12.png" className="d-block w-100" alt="cervecería"/>
                    </div>
                    <div className="carousel-item">
                    <img src="/images/fotos cerveceria/cerveceria13.png" className="d-block w-100" alt="cervecería"/>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
    </>
    )
}

export default Carousel