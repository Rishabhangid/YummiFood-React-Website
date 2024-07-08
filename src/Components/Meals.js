import React from 'react'
import { MealData } from "../Data/data.js";

function Meals({handleadd= { handleadd }}) {
    return (
       <div className="my-[100px] mt-[100px]">
        <h3 className="text-center text-2xl font-bold text-[black] ">What's on your mind?</h3>
         <div className="w-[90%] mx-auto  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 py-[20px]">
            
            {
                MealData.map((elem, index) => (
                    <div>
                        <div className="flex justify-center">
                            <img src={elem.img} className="w-[250px] h-[200px] rounded-xl object-cover" />
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
        </div>
       </div>
    )
}

export default Meals