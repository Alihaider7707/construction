import React from "react";
import "./gallery.css";
import galleryimg1 from '../pages/images/Corn-Plant.webp'
import galleryimg2 from '../pages/images/starb7b_b-transformed.jpeg'
import galleryimg3 from '../pages/images/Strawberry.jpg'
import galleryimg4 from '../pages/images/pink-coffe.jpg'


const Gallery = () => {
  return (
    <>
    <div className="gallery-flex">
      <div className="gallery">
        <h2>Our best gallery from customers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quod adipisci assumenda ipsum consectetur quaerat expedita, voluptatum
          rem voluptatibus ratione.
        </p>
        <div className="gallery-btn">
            <button>View All</button>
        </div>
      </div>
      <div className="gallery-images">
      <img src={galleryimg1} alt="" />
      <img src={galleryimg2} alt="" /> 
      <img src={galleryimg4} alt="" />
      <img src={galleryimg3} alt="" />
     
      </div>
      </div>
    </>
  );
};

export default Gallery;
