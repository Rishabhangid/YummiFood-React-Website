import React from 'react'

function AboutUs() {
  return (
    <>
    <div className="mt-[100px]">

      <div className=" w-[90%] mx-auto my-[60px]">
        <h2 className="font-bold text-[30px] my-[8px]">Driving the force of <span className="text-[#fbc531] font-bold">assortment</span> </h2>
        <p className="text-[grey] text-[18px] font-normal">For over a decade now, we have been empowering our customers in discivering new tastes and experrience across countries. By putting together meticulous information for our customer, we enable them to make an informed choice. </p>
      </div>

      <div className="00 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-[60px]">

        <div className="500 ">
          <h2 className="font-bold text-[30px] my-[8px]">Who are we?</h2>
          <p className="text-[grey] text-[16px] text-justify">Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
        </div>

        <div className=" flex justify-center items-center">
          <img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="img " className="w-[500px] h-[300px] rounded-lg object-cover"/>
        </div>

      </div>

    </div>
    </>
  )
}

export default AboutUs