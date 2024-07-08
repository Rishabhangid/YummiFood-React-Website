import React from 'react'

function SignIn() {
  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 p-6 mt-[100px]">

        <div className="flex justify-center  flex-col p-10">
          <h1 className="font-bold text-[30px] my-[8px]">Get Started with your Account</h1>
          <p className="text-[grey] text-[16px] font-normal"> Find your Favorite Food on our plateform. Just one step to order your Food</p>
        </div>

        <div className="  rounded-xl flex justify-center items-centers">
          <div className="bg-yellow-100 w-[90%] p-[30px] rounded-xl">
            <form>
              <p className="font-bold my-[20px]">Sign Up</p>
              <p className="font-normal my-2">Full Name</p>
              <input type="text" className=" w-[100%] h-[40px] rounded-md" />
              <p className="font-normal my-2">Email</p>
              <input type="text" className="w-[100%] h-[40px] rounded-md" />
              <p className="font-normal my-2">Mobile</p>
              <input type="text" className="w-[100%] h-[40px] rounded-md" />
              <p className="font-normal my-2">Password</p>
              <input type="text" className="w-[100%] h-[40px] rounded-md" />
              <button type="submit" className="bg-[#fbc531] my-5 text-white w-[100%] p-3 rounded-lg text-[17px]" >Sign Up</button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default SignIn