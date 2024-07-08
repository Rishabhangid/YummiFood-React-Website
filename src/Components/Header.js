import React, { useState } from 'react'
// imported react icons 
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx"
import "./Header.css"
import Logo from "../img/Group 6.png";
import { Link } from 'react-router-dom';

function Header({count}) {

    // usestate to control the nav bar. on small screen the nav bar will shfit to the right.
    const [sideNav, setSideNav] = useState(false);

    // function to change the sidenav value to open clode the  GiHamburgerMenu. 
    const handlechange = () => {
        setSideNav(!sideNav)
        console.log(sideNav)
    }




    return (
        <div className="main fixed top-0 left-0 w-full z-50 bg-white">
            <div className="">

                <div className="navbar flex justify-between py-[20px] px-[25px] shadow-lg">

                    <div className="logo">
                        {/* <img src={Logo} className="weblogo"></img> */}
                        <span className="text-2xl font-semibold">Yummi<span className="text-[#fbc531] font-bold">Food</span></span>
                    </div>

                    <div className="menu ">
                        {/* it means "sm:flex" ki sm size ke upr isko flex kena he baaki hidden  */}
                        <ul className="sm:flex hidden cursor-pointer gap-5">
                            <Link to="/">
                                <li>Home</li>
                            </Link>

                            <Link to="/aboutus">
                                <li>About Us</li>
                            </Link>

                            <Link to="meals">
                                <li>Meals</li>
                            </Link>

                            <Link to="signin">
                                <li>Sign In</li>
                            </Link>

                        </ul>
                    </div>

                    {
                        sideNav ?
                            (


                                <div className="menu bg-[#f5f6fa] w-[250px] absolute top-0 right-0 h-[99vh] flex justify-center items-center z-10">
                                    {/* it means "sm:flex" ki sm size ke upr isko flex kena he baaki hidden  */}
                                    <RxCross2 size={30} className="absolute top-5 cursor-pointer right-5" onClick={handlechange} />
                                    <ul className="flex-col gap-5">
                                        
                                        <Link to="/">
                                        <li className="cursor-pointer  hover:text-[#fbc531] py-[10px]" onClick={handlechange}>Home</li>
                                        </Link>
                                        
                                        <Link to="/aboutus">
                                        <li className="cursor-pointer hover:text-[#fbc531] py-[10px]" onClick={handlechange}>About Us</li>
                                        </Link>
                                       
                                        <Link to="/meals">
                                        <li className="cursor-pointer hover:text-[#fbc531] py-[10px]" onClick={handlechange}>Meals</li>
                                        </Link>
                                        
                                        <Link to="/signin">
                                        <li className="cursor-pointer hover:text-[#fbc531] py-[10px]" onClick={handlechange}>Sign In</li>
                                        </Link>
                                        
                                    </ul>
                                </div>






                            ) : " "
                    }

                    <div className="cart flex gap-5">
                        <GiHamburgerMenu size={30} className="cursor-pointer sm:hidden block" onClick={handlechange} />
                        <h1 className="bg-black text-white p-1 rounded-2xl">{count}</h1>
                        <FaCartShopping size={25} className="cursor-pointer" />
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Header








