import React from "react";
import testimonail_image from "../assets/testimoniajpg.webp";

const Testimonal = () => {
  return (
    <div className="">
      <div className="card d-flex ">
        <div className="card-body">
          <p className="card-text">
            The cakes and pastries from [Your Bakery's Name] are exceptional!
            The quality and flavor are unmatched, and their attention to detail
            is impressive. Our custom cake for a special event was both
            beautiful and delicious. Their friendly service and dedication make
            them a standout choice for any occasion."
          </p>
        </div>
        <div>|</div>
        <img alt="..." className="card-img-bottom" src={testimonail_image} />
        <h5 className="card-title">Shekar</h5>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};
export default Testimonal;
