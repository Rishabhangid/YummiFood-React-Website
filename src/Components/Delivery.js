import React from 'react'

function Delivery() {
    return (
        <div>
            <div className="w-full">
                <h3 className="text-center text-2xl font-bold text-[#fbc531] py-[25px]">Quick Delivery App</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-[80%] my-10 gap-10">
                    <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" className="w-[550px]" />

                    <div className="flex flex-col justify-center">
                        <p className="font-bold text-[30px] text-[green]">Get the App</p>
                        <h2 className="text-4xl py-2 font-bold">The Fastest Delivery In India</h2>
                        <button
                            className="bg-black text-white w-[200px] rounded-md py-[15px] text-[12px] md:text-[20px] hover:text-[#fbc531] font-semibold my-[10px]">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery