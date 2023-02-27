import React from "react";
import "./Headerbanner.css";
import { AiFillCaretRight } from "react-icons/ai";
import sliderimg from "../pages/images/pngwing.com.png";


// import 'swiper/css';

const Headerbanner = () => {
  return (
    <>
    <div className="header-flex">
      <div className="headerbanner">
        <h1>Good food and drink choices are health</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          corporis deleniti amet veritatis fugiat eius tempora facere nihil
          dolorum voluptatibus.
        </p>
        <div className="headerbutton">
          <div className="btn1">
            <button>Order Now</button>
          </div>
          <div className="btn2">
            <h5>Watch Our Story</h5>
            <button>
              <AiFillCaretRight />
            </button>
          </div>
        </div>
      </div>
      <div>
     
        <div className="banner-image">
          <img src={sliderimg} alt="" />
        </div>    
        </div>
      </div>
    </>
  );
};

export default Headerbanner;
