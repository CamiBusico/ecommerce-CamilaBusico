const Carousel = () => {
    return(
    <>        
                <div id="carouselExampleAutoplaying" class="carousel slide estiloCarousel" data-bs-ride="carousel">
                         <div class="carousel-inner">
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
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
    </>
    )
}

export default Carousel