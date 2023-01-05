import { ReactComponent as Linkedln } from "../assets/icons/linkedln.svg";
import { ReactComponent as Fb } from "../assets/icons/fb.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-yellow-secondary px-16 py-8">
            <div className="flex justify-between items-end">
                <h2 className="text-black font-bold pb-4" >JAVABP</h2>


                <div>
                    <h5 className="text-black font-bold" >Follow Us</h5>
                    <div className="flex gap-4">
                        <Linkedln className="w-10 sm:w-6" />
                        <Fb className="w-10 sm:w-6" />
                        <Twitter className="w-10 sm:w-6" />

                    </div>
                </div>
            </div>

            <div className="pt-6  text-center space-y-4">
                <Link to="/contact">
                    <h5 className="text-black font-bold" >Need to get in touch? <a className=" hover:opacity-60" href="javascript:void(0)">Contact Us</a> </h5>
                </Link>
                <p className="font-bold">@{new Date().getFullYear()} Java Business Partners International | Powered by Beaver Builder</p>
            </div>
        </footer>
    )
}

export default Footer;