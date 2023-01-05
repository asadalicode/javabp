import BackroundImage from "../utils/backgroundImage";
import IsMobile from "../utils/detectDevice";
import { Link } from "react-router-dom";

import Section5UpperBg from "../assets/footer/ocean-waves-crashing.png";
import Section5UpperMobBg from "../assets/footer/ocean-waves-crashing_mbl.png";

const FindMore = () => {

    return (
        <>
            <BackroundImage url={IsMobile() ? Section5UpperMobBg : Section5UpperBg} classes="space-y-9 bg-cover ">
                <div className=" space-y-6 px-16 py-20">
                    <h5 className=" text-white text-left font-bold ">Find Out More About Our Service Offerings And How We Can Help You Access Your 20% Discount Off <br /> Our Services?</h5>
                    <h5 className=" text-white text-left font-bold ">Register Online For One Of Our Service Offerings To Qualify For Your Discount</h5>
                    <Link to="/payments" >
                        <button className=" rounded border-2 border-yellow-secondary w-auto mt-3 p-3 sm:bg-yellow-secondary">
                            <p className="text-yellow-secondary sm:text-black font-semibold">Register Online Here Now</p></button>
                    </Link>
                </div>
            </BackroundImage>

        </>

    );
}

export default FindMore