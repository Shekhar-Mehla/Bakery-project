import React from "react";
import Bakeryshop_img from "../assets/bakershop.jpg";

const About_us = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <img
              src={Bakeryshop_img} // Replace with your bakery image
              alt="Bakery"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6">
            <h1>About Us</h1>
            <h2>Welcome to [Your Bakery Name]</h2>
            <p>
              At [Your Bakery Name], we believe that every day is a good day for
              fresh, delicious baked goods. Founded in [Year], our bakery has
              been serving the [City/Town] community with high-quality,
              handcrafted pastries, cakes, and bread.
            </p>
            <p>
              Our team of passionate bakers uses only the finest ingredients to
              create a variety of treats that cater to all tastes and
              preferences. From classic sourdough to decadent chocolate cakes,
              we pride ourselves on our attention to detail and commitment to
              excellence.
            </p>
            <p>
              We are dedicated to providing not just exceptional baked goods but
              also a warm and inviting experience for our customers. Whether
              you're here for a quick coffee and croissant or planning a special
              celebration, we look forward to welcoming you to our bakery.
            </p>
            <p>
              Thank you for choosing [Your Bakery Name]. We hope to see you
              soon!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About_us;
