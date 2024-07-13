// src/components/Contact.jsx

import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Contact Us</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fas fa-user mr-2"></i>Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope mr-2"></i>Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="fas fa-comment mr-2"></i>Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
