import React from "react";
import "./popular.css";
import { TbCoffee } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { TbCup } from "react-icons/tb";
import { BsCupStraw } from "react-icons/bs";
import { MdOutlineCake } from "react-icons/md";
import { FaIceCream } from "react-icons/fa";


const Popular = () => {
  return (
    <>
      <div className="popular">
        <h3>Categori</h3>
        <h2>Popular Categories</h2>
      </div>
      <div className="popular-flex">
        <div className="food">
          <TbCoffee className="foodicon" />
          <h5>Coffee</h5>
          <h6>From $4</h6>
        </div>
        <div className="food">
          <MdFastfood className="foodicon" />
          <h5>Food</h5>
          <h6>From $4</h6>
        </div>
        <div className="food">
          <TbCup className="foodicon" />
          <h5>Snack</h5>
          <h6>From $4</h6>
        </div>
        <div className="food">
          <BsCupStraw className="foodicon" />
          <h5>Drinks</h5>
          <h6>From $4</h6>
        </div>
        <div className="food">
          <MdOutlineCake className="foodicon" />
          <h5>Cake</h5>
          <h6>From $4</h6>
        </div>
        <div className="food">
          <FaIceCream className="foodicon" />
          <h5>Ice Cream</h5>
          <h6>From $4</h6>
        </div>
      </div>
    </>
  );
};

export default Popular;
