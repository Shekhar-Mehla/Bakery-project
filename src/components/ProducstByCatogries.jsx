import React from "react";
import bread from "../assets/muffin.jpg";
import cake from "../assets/croissant.jpg";
import pastry from "../assets/Cinnamon_Roll.jpg";

const ProducstByCatogries = () => {
  return (
    <div className="container  mb-4">
      <div className="row d-flex   card-grp  ">
        <div className="col">
          <a href="#" className="card border border-3 border-white">
            <div className="card-image">
              <img src={bread} className="card-img-top" alt="..." />
            </div>
            <div className="card-img-overlay">
              <h3 className="card-title  fw-bolder text-white text-center mt-5">
                Cakes
              </h3>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" className="card border border-3 border-white">
            <div className="card-image">
              <img src={pastry} className="card-img-top" alt="..." />
            </div>
            <div className="card-img-overlay">
              <h3 className="card-title  fw-bolder text-white text-center mt-5">
                Breads
              </h3>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" className="card border border-3 border-white">
            <div className="card-image">
              <img src={cake} className="card-img-top" alt="..." />
            </div>
            <div className="card-img-overlay">
              <h3 className="card-title  fw-bolder text-white text-center mt-5">
                Tarts
              </h3>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" className="card border border-3 border-white">
            <div className="card-image">
              <img src={bread} className="card-img-top" alt="..." />
            </div>
            <div className="card-img-overlay">
              <h3 className="card-title  fw-bolder text-white text-center mt-5">
                Cookies
              </h3>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" className="card border border-3 border-white">
            <div className="card-image">
              <img src={pastry} className="card-img-top" alt="..." />
            </div>
            <div className="card-img-overlay">
              <h3 className="card-title  fw-bolder text-white text-center mt-5">
                Bagels
              </h3>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" className="card border border-3 border-white">
            <div className="card-image">
              <img src={pastry} className="card-img-top" alt="..." />
            </div>
            <div className="card-img-overlay">
              <h3 className="card-title fw-bolder text-white text-center mt-5">
                Muffins
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProducstByCatogries;
