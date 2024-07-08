import React from 'react'

function Footer() {
    return (
        // one to make footer col.
        // <div className="text-white bg-black flex justify-around py-8 flex-wrap">

        // another way to make using tailwinf css grid 
        <div className="text-white bg-black grid  grid-cols-2 md:grid-cols-4 py-8 mx-auto ">

            <div className="p-4 ">
                <span className="text-2xl font-semibold">Yummi<span className="text-[#fbc531] font-bold">Food</span></span>
                <p>@ 2023 Bundl Technologies Pvt. Ltd</p>
            </div>

            <div className="p-4 ">
                <h3 className="mb-2 font-extrabold text-[16px] md:text-[20px]">Company</h3>
                <p className="mb-2 text-[grey] text-[15px] md:text-[18px]">About</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Careers</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Team</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Swiggy One</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Swiggy Intamrt</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Swiggy Genie</p>
            </div>

            <div className="p-4 ">
                <h3 className="mb-2 font-extrabold text-[18px] md:text-[20px]">Contact Us</h3>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Help & Support</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Parterner with Us</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Ride with us</p>

                <h3 className="mb-2 font-extrabold text-[18px] md:text-[20px]">Legal</h3>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Terms & Conditions</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Cookie Policy</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Privacy Policy</p>
            </div>

            <div className="p-4 ">
                <h3 className="mb-2 font-extrabold text-[18px] md:text-[20px]">We deliver to:</h3>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Gurgaon</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Banglore</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Jaipur</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Delhi</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Mumbai</p>
                <p  className="mb-2 text-[grey]  text-[15px] md:text-[18px]">Pune</p>
            </div>


        </div>
    )
}

export default Footer