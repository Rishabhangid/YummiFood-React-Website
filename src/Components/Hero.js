import React, { useEffect, useState } from 'react'
// using react icons 
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";




function Hero() {

  // Slider Image Data 
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    }
  ];

  // Usestate to control the slider 
  const [Img, setImg] = useState(0);

  // handles the next button 
  const handleplus = () => {
    setImg(Img === imgData.length - 1 ? 0 : Img + 1);
  }

  // handles the previous button 
  const handleminus = () => {
    setImg(Img === 0 ? imgData.length - 1 : Img - 1);
  }

  // handles the change the img after 3SecurityPolicyViolationEvent. 
  useEffect(() => {
    const sliderChange = setInterval(() => {
      handleplus();
    }, 3000);

    return () => clearInterval(sliderChange);
  }, [Img])

  return (
    <div>
      {/* We dont use this method, we will use map method.  */}
      {/* <img src={imgData[Img].url} /> */}
      <div className="w-[90%] mx-auto h-[80vh] my-5 relative mt-[100px]">
        {
          imgData.map((elem, index) => (

            <div key={index} className={`${Img === index ? "block" : "hidden"} `} >
              <img src={elem.url} className="w-full h-[80vh] rounded-2xl object-cover bg-gradient-to-r from-cyan-500 to-blue-500" />
            </div>
          ))
        }
        <div className="w-[100%]  h-[80vh] absolute opacity-50   rounded-2xl top-[0%] left-[0%] mx-auto bg-black"></div>

        <div className="absolute top-[50%] text-center text-[18px] md:text-[25px] text-xl text-white w-full   ">
          <p className="font-bold"> Welcome to Yummi<span className="text-[#fbc531] font-bold">Food</span></p>
        </div>

        <div className="flex justify-between text-white w-full px-5 absolute top-[50%] ">
          <FaChevronLeft size={30} onClick={handleminus} className="cursor-pointer" />
          <FaChevronRight size={30} onClick={handleplus} className="cursor-pointer" />
        </div>

      </div>








    </div>
  )
}

export default Hero