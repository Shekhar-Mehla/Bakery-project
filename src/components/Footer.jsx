import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ut lorem in dolor commodo consequat.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <address className="text-white">
              123 Bakery Street, <br />
              Bakery City, AB 12345 <br />
              <a href="mailto:info@yourbakery.com" className="text-white">
                info@yourbakery.com
              </a>
            </address>
            <div className="social-icons mt-3">
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="small">© 2024 Your Bakery. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
