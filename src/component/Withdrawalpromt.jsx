import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Withdrawalpromt.css";
import Header from "./Header";
// import Withdrawalbg from "../assets/Withdrawalbg.png";


const Withdrawalpromt = () => {
   useEffect(() => {
      // Disable scroll while on Withdrawal page
      document.body.style.overflow = "hidden";
  
      // Restore scroll when leaving page
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);


  return (
    <div className="withdrawal-wrappers min-vh-100 d-flex flex-column">
      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <div className="container-fluid flex-grow-1">
        <div className="row h-100 align-items-center">
          <div className="col-lg-4 col-md-6 px-5 ">
            <h2 className="text-white fw-bold mb-4">Withdrawal Prompt Pay</h2>

            <button className="withdraw-btns w-100 mb-3">
              <i className="bi bi-qr-code"></i>
              <span>Prompt Pay</span>
            </button>

            <button className="withdraw-btns w-100 mb-3">
              <strong>K+</strong>
              <span>K plus Pay</span>
            </button>

            <button className="withdraw-btns w-100 mb-3">
              <i className="bi bi-bank"></i>
              <span>Bank Transfer</span>
            </button>

            <button className="withdraw-btns w-100">
              <i className="bi bi-wallet2"></i>
              <span>E-Wallet Withdrawal</span>
            </button>
          </div>

          {/* <div className="col-lg-8 d-none d-lg-block position-relative">
            <div className="bg-x-pattern"></div>
          </div> */}

          <div className="col-lg-8 d-none d-lg-block position-relative m-0 p-0">
            {/* <div className="watermark-text">X</div> */}

            <img
              src={Withdrawalbg}
              alt="User"
              className="img-fluid "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawalpromt;
