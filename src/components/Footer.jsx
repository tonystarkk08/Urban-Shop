import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-4">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ {""}
              <a  href="https://github.com/tonystarkk08" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Mohammad Sadique</a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/tonystarkk08" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
              
            </a>
           
            <a className="text-dark fs-4" href="https://www.instagram.com/" target=" blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
