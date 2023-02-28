import React from "react";
import banner2img from "../pages/images/jug-orange.avif";
import "./banner.css";

const banner2 = () => {
  return (
    <>
    <div className="banner2-flex">
      <div className="banner2 bannerimg">
        <img src={banner2img} alt="" />
      </div>
      <div className="banner2-about">
        <h3>About Us</h3>
        <h1>The best comfort will always be guarantees</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          veritatis sint perferendis beatae nam alias praesentium excepturi
          ratione quo nesciunt. 
        </p>
        <div className="banner2-btn">
            <button>Order Now</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default banner2;
