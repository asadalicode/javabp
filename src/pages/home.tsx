import BackroundImage from "../utils/backgroundImage";

import TopBg from "../assets/home/1_web.png";
import TopMobileBg from "../assets/home/1_mobile.png";
import Section1Bg from "../assets/home/section1_bg.svg";
import Section2Bg from "../assets/home/section2_bg.svg";
import Section2MobBg from "../assets/home/section2_mob_bg.png";
import { ReactComponent as Member } from "../assets/business/Member.svg";
import { ReactComponent as Accounts } from "../assets/business/accounts.svg";
import { ReactComponent as Dissolution } from "../assets/business/Dissolution.svg";
import Section3Bg from "../assets/home/Bg_yellow_right.svg";
import Section2UpperBg from "../assets/home/section2_upper_bg.png";
import Section3UpperBg from "../assets/home/section3_upper_bg.png";
import Section4UpperBg from "../assets/home/section4_upper_bg.png";

import Section4Bg from "../assets/home/2.svg";

import { ReactComponent as IconBank } from "../assets/icons/bankAccount.svg";
import { ReactComponent as IconCompany } from "../assets/icons/company.svg";
import { ReactComponent as Plain } from "../assets/icons/Plain.svg";
import { ReactComponent as Visa } from "../assets/icons/visa.svg";
import { ReactComponent as Business } from "../assets/icons/business.svg";
import { ReactComponent as Investment } from "../assets/icons/investment.svg";

import IsMobile from "../utils/detectDevice";
import FindMore from "./findMore";

const Home = () => {

    return (
        <>
            <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">JAVA Business Partnership International</h1>
                    <p className=" text-white opacity-70">Our Partnerships with Global Companies connects You the Business Owner to Products and Services at huge discounted rates that you would not necessarily have access to. We have done all the work for you, by connecting your Business to the World. Our partners have been in business collectively for over 50 years, Java Business Partners International brings expertise and services to you with Pride.</p>
                    <button className="rounded bg-yellow-secondary w-40 h-12 hover:bg-yellow ">
                        <p className="text-black-secondary"> Learn More</p></button>
                </div>
            </BackroundImage>

            {/*  */}
            <BackroundImage url={Section1Bg} classes="text-center space-y-9  bg-right">
                <h2 className="font-bold pt-16">Our Services Offered</h2>


                <div className="grid grid-cols-3 sm:grid-cols-1 gap-10 px-16 sm:px-8">
                    <div className="p-6 space-y-4 bg-white  rounded-2xl card-shadow ">
                        <IconCompany className="h-16 w-auto" />
                        <h5 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Company Formations (Both Local and Offshore)</h5>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</p>
                    </div>

                    <div className=" p-6 space-y-4 bg-white rounded-2xl card-shadow ">
                        <IconBank className="h-16 w-auto" />
                        <h5 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Company Bank Account Openings Remotely</h5>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</p>
                    </div>

                    <div className=" p-6 space-y-4 bg-white rounded-2xl  card-shadow ">
                        <Plain className="h-16 w-auto" />
                        <h5 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Citizenship And Residency By Investment</h5>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</p>
                    </div>

                    <div className=" p-6 space-y-4 bg-white rounded-2xl  card-shadow ">
                        <Visa className="h-16 w-auto" />
                        <h5 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Golden Visa And 2Nd Passport Programs Applications</h5>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</p>
                    </div>

                    <div className=" p-6 space-y-4 bg-white rounded-2xl  card-shadow ">
                        <Business className="h-16 w-auto" />
                        <h5 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Business, Financial, And Legal Documents And Templates</h5>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</p>
                    </div>

                    <div className=" p-6 space-y-4 bg-white rounded-2xl  card-shadow ">
                        <Investment className="h-16 w-auto" />
                        <h5 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Private Investment And Business Funding Options</h5>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.</p>
                    </div>
                </div>

            </BackroundImage>


            <section className="grid grid-cols-2 mt-16  sm:grid-cols-1 bg-white">
                <BackroundImage url={IsMobile() ? Section2MobBg : Section2Bg} classes={`text-center bg-left`}>
                    <img className="max-w-xl w-4/5 ml-12 pt-20 " src={Section2UpperBg} />
                </BackroundImage>
                <div className="space-y-4 pt-32 sm:pt-8 pr-16 sm:px-8 py-2">
                    <h2 className="font-bold">Service Two Case Study Facts And Figures Example</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">We work directly with multiple Private Investors and Venture Capital Companies, Hedge Fund Managers and Angel Investors on an International level. Many of our investors are not known or accessible by the public and include wealthy families and individuals, private equity firms, hedge funds, venture capital firms, investment companies, and other private and institutional investors. Our innovative structure funding Partnerships make sure you are partnered with the Company or Investor that best suites your Business Portfolio and needs. We are committed to fulfilling your needs with the highest level of professionalism, expertise and service. <br /> Private Wealth Management <br /> Maximize Your Impact <br /> Our private wealth advisors offer unparalleled resources, access and guidance to help you maximize your impact and use your wealth in meaningful ways. Our private wealth advisors offer unparalelled resources, access and guidance to help you maximize your impact and use your wealth in meaningful ways. Your advisor is deeply attuned to your goals and values and curates all we has to offer on your behalf <br /> Your advisor is deeply attuned to your goals and values and curates all we have to offer. <br /> Learn more about our services below and sign up today.</p>
                </div>
            </section>





            <section className="grid grid-cols-2 gap-8  sm:grid-cols-1 px-16 sm:px-8">

                <div className="space-y-4 pt-32 sm:pt-8   py-2">
                    <h2 className="font-bold">Why Work With Us?</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">Convenience <br /> At work, at home - anywhere. <br /> Our form is available online, anytime:PC</p>
                    <div className="py-4 sm:w-full w-4/6 border-2 border-dashed border-yellow-secondary grid grid-cols-3 gap-2">
                        <div className=" text-center justify-items-center grid space-y-1 justify-center">
                            <Member className="w-14" />
                            <p className="text-black font-bold px-2 leading-tight">Tablet</p>
                        </div>
                        <div className=" text-center justify-items-center grid space-y-1 justify-center">
                            <Accounts className="w-14" />
                            <p className="text-black font-bold px-2 leading-tight">Notebook</p>
                        </div>
                        <div className=" text-center justify-items-center grid space-y-1 justify-center">
                            <Dissolution className="w-14" />
                            <p className="text-black font-bold px-2 leading-tight">Mobile</p>
                        </div>
                    </div>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">No matter what device you're on! <br /> Ease and simplicity at your fingertips! <br /> Expertise <br /> We take a personal approach to each customer. Our customers <br /> consistently see increased satisfaction, enhanced lifestyle and new <br /> opportunities <br /> Cost Effective <br /> An inclusive, one-time, non-refundable registration fee applies to all <br /> registrations. <br /> This must be paid at the time of your application via credit or debit card for your convenience.</p>

                </div>

                <BackroundImage url={IsMobile() ? Section3Bg : Section3Bg} classes={`text-center bg-right`}>
                    <img src={Section3UpperBg} />
                </BackroundImage>
            </section>

            <BackroundImage url={Section4Bg} className="bg-contain">

                <section className="grid grid-cols-2 gap-12  px-16 sm:px-8 py-16 sm:grid-cols-1">
                    <div className="space-y-4 sm:order-2 ">
                        <h2 className="font-bold text-left py-16 sm:py-0 text-white w-4/6">Excellence One Step Ahead Of The Pack</h2>
                        <p className="text-white opacity-90 text-left tracking-wider">
                            The 21 century has changed the way people do business and live. <br /> Looking for the ultimate Lifestyle, low tax rates, or a visa <br /> that enables visa free travel to over 150 <br /> countries - We are your partner of choice! <br /> Whether you are doing business in Europe, Asia, Africa, <br /> the Middle East, the Americas or elsewhere, <br /> our partners will set up the best trading or holding <br /> structure for your business in line with <br /> local laws and regulations. Our professional <br /> services include but are not limited to <br /> the following. We provide expertise <br /> and support to help you: Conduct business in  the global market smoothly Maximize opportunities <br /> and achieve long-term sustainability Reduced <br /> taxation Secure intellectual property <br /> Fewer restrictions Access to tax <br /> treaties Enhanced assets Political stability <br /> We provide expertise and support conducting business in global <br /> market smoothly, maximize opportunities and achieve long-term sustainability
                        </p>
                    </div>
                    <img src={Section4UpperBg} />

                </section>

            </BackroundImage>


            <FindMore />

        </>
    );
}

export default Home