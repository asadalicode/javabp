import { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Logo_white } from "../assets/logo_white.svg";
import { ReactComponent as Menu } from "../assets/icons/menu.svg";
import { ReactComponent as MenuClose } from "../assets/icons/cross_icon.svg";
import { ReactComponent as Linkedln } from "../assets/icons/linkedln.svg";
import { ReactComponent as Fb } from "../assets/icons/fb.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { Link } from "react-router-dom";



const Header = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className={`w-full bg-white fixed z-10  ${navbar ? "nav_bg" : ""}`}>
            <div className="justify-between md:px-16 px-4 mx-auto ">
                <div>
                    <div className="flex items-center justify-between py-5 ">
                        <div onClick={() => setNavbar(!navbar)}>
                            {navbar ? (
                                // <div></div>
                                <Logo_white className="md:hidden  h-full w-32" />

                            ) : (
                                <Logo className="h-full w-32 sm:w-24" />

                            )}
                        </div>
                        <div>
                            <div className="flex space-x-3">
                                <Linkedln className="w-10 sm:w-6" />
                                <Fb className="w-10 sm:w-6" />
                                <Twitter className="w-10 sm:w-6" />
                                <button
                                    className="pl-5 p-2 rounded-md outline-none "
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <MenuClose className="h-8 w-10" />
                                    ) : (
                                        <Menu className="w-7 sm:w-6" />
                                    )}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="duration-75">
                    <div
                        className={`flex justify-between flex-1 py-10   ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <Logo_white onClick={() => setNavbar(!navbar)} className="sm:hidden" />
                        <ul className="items-center justify-center space-y-6  w-full  duration-300  ">
                            <h4 className="font-semibold  px-3 text-right  hover:text-yellow hover:underline">
                                <Link to={'/business'} onClick={() => setNavbar(!navbar)}> Business, Financial & Legal Templates </Link>
                            </h4>
                            <h4 className="font-semibold  text-right  px-3 hover:text-yellow hover:underline">
                                <Link to={'/capitalInvestment'} onClick={() => setNavbar(!navbar)}> Capital Investment & Partnerships </Link>

                            </h4>
                            <h4 className="font-semibold  text-right  px-3 hover:text-yellow hover:underline">
                                <Link to={'/company'} onClick={() => setNavbar(!navbar)}> Company Formation & Bank Account Opening </Link>
                            </h4>
                            <h4 className="font-semibold  text-right  px-3  hover:text-yellow hover:underline">
                                <Link to={'/capitalInvestment'} onClick={() => setNavbar(!navbar)}> Citizenship, Residency by Investment Options </Link>
                            </h4>
                            <h4 className="font-semibold  text-right  px-3  hover:text-yellow hover:underline">
                                <Link to={'/capitalInvestment'} onClick={() => setNavbar(!navbar)}> Business Consultancy & Marketing</Link>
                            </h4>
                        </ul>


                    </div>
                </div>

            </div>
        </nav>
    );
}
export default Header;