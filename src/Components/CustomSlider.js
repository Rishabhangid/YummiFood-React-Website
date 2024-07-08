import React from 'react'
import { topPicks } from "../Data/data.js";
// Slick Slider 
// import Slider from "react-slick";
// import Slider from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// receivinf value as prop 
function CustomSlider({handleadd}) {

  // Slick Slider 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  
  return (
    <div className="w-[90%] mx-auto mb-[100px] ">
      <h3 className="text-center text-2xl font-bold text-[black]  my-[60px]">What's on your mind?</h3>

      <Slider {...settings}>
      {
        topPicks.map((elem, index) => (
          <div key={elem.id} className="rounded-md">

            <div className="flex justify-center">
              <img src={elem.img} className="w-[200px] h-[200px] rounded-full object-cover  " />
            </div>

            <div className="flex flex-col items-center">
              <p className="font-bold text-[20px]"> {elem.title}</p>
              <p className="font-semibold text-[20px]"> {elem.price}</p>
              <button className="bg-black text-white w-[120px] rounded-md  py-[8px] text-[12px] md:text-[15px] hover:text-[#fbc531] font-semibold my-[10px]" onClick={handleadd}>
                Add to Cart
              </button>
            </div>


          </div>
        ))
      }
      </Slider>
    </div>
  )
}

export default CustomSlider 


// npm install react-slick --save
// npm install slick-carousel --save