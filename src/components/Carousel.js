import React from "react";

const Carousel = () => {
    return (
        <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">


<div className="carousel-indicators" data-interval="5000">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="./images/5.jpg" alt="Los Angeles" className="d-block w-100"/>
  </div>
  <div className="carousel-item">
    <img src="./images/2.webp" alt="Chicago" className="d-block w-100"/>
  </div>
  <div className="carousel-item">
    <img src="images/4.jpg" alt="New York" className="d-block w-100"/>
  </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>
<br/>
</>



    );
}

export default Carousel;