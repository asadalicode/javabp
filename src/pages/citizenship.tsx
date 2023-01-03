import BackroundImage from "../utils/backgroundImage";
import TopBg from "../assets/citizenship/heroBg.png";
import TopMobileBg from "../assets/citizenship/heroBg_mbl.png";
import BgYellowLeft from "../assets/company/bgYellowLeft.svg";
import BgYellowRight from "../assets/citizenship/bgRightLayer.svg";
import GoldenVisa from "../assets/citizenship/GoldenVisa.png";
import Section2UpperBg from "../assets/citizenship/Group282.png";
import Section4UpperBg from "../assets/citizenship/Group36.png";

import Section5UpperBg from "../assets/citizenship/Group600.png";
import IsMobile from "../utils/detectDevice";
import FindMore from "./findMore";

const Citizenship = () => {

    return (
        <>
            <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">Our Services</h1>
                    <p className=" text-white opacity-70">Everyone has the opportunity to thrive no matter where home is</p>
                    <button className="rounded bg-yellow-secondary w-40 h-12 hover:bg-yellow ">
                        <p className="text-black-secondary"> Learn More</p></button>
                </div>
            </BackroundImage>


            <section className="grid grid-cols-2 mt-16 sm:mt-0   sm:grid-cols-1 bg-white">

                <div className="space-y-4 w-11/12 pt-16 sm:pt-8 pl-16 sm:px-8 ">
                    <h2 className="font-bold">Our Bespoke Services Taylored To Meet Your Needs</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">Find out more about the available schemes in our Golden Visa Programme Summary below, or contact us by registering to discuss your immigration needs today. Here are various countries, both in the EU and beyond, offering some form of a programme whereby you can obtain either residency, or even citizenship, by means of investing in property or by starting a business. Even better – you can obtain EU residency rights for your spouse or children, without the need to invest in property or actually settle in the EU to achieve this. Whether you’re obtaining a second citizenship outright or acquiring permanent residency through a Golden Visa Programme, establishing a footprint abroad is a process. We have streamlined this process to make your application simple and easy. Most of our clients obtain their residency rights by applying over a period of 4 months, depending on the exact jurisdiction. Our approach is distinctly hands-on – we accompany you to your European host jurisdiction to ensure your application experience fast and seamless Bespoke Offers We create tailor-made solutions to meet your exact residency and citizenship needs. When a customer has completed their registration and payment, Your Immigration applicant becomes a client of our Immigration lawyers in the country you are wanting to immigrate to. The very first thing he/she will receive from the firm is the firm's Immigration preliminary package, which contains all of the necessary forms, document checklists, instructions and information to enable the client to commence the Immigration Application process with your attorney's assistance.</p>
                </div>
                <BackroundImage url={IsMobile() ? BgYellowRight : BgYellowRight} classes={`text-center ${IsMobile() ? 'pl-8 pr-8 pt-8' : 'pl-32 pr-16'} bg-right`}>
                    <img src={Section2UpperBg} />
                    {/* <img className="pt-2 sm:hidden" src={Section3UpperBg} /> */}

                </BackroundImage>
            </section>



            <section className="px-16 py-16 sm:py-8 sm:px-8">


                <BackroundImage url={GoldenVisa} classes="bg-cover rounded-lg">

                    <section className="space-y-4  px-16 sm:px-8 py-32 sm:py-8">
                        <h2 className="font-bold text-left  sm:py-0 text-white ">Golden Visa, Residency & 2Nd Passport Options</h2>
                        <p className="text-white opacity-90 text-left tracking-wider">
                            Golden Visas facilitates the acquisition of residency, immigration and citizenship through investment. <br /> We make what looks like an expensive and difficult option, affordable  <br /> and complex free. With clients from more than 100 <br /> countries worldwide and over 18 program options, we understand your reasons and we have <br /> the best solution for your needs. <br /> In an increasingly global  <br />yet uncertain world, investing for second <br /> residency and citizenship has seen a surge in demand. Today’s Golden Visa <br />has become an essential requirement for many high <br /> net worth families. Let us help you achieve your goals.
                        </p>

                    </section>

                </BackroundImage>
            </section>


            <section className="grid grid-cols-2  sm:grid-cols-1 bg-white">
                <BackroundImage url={IsMobile() ? BgYellowLeft : BgYellowLeft} classes={`text-center bg-left ${IsMobile() ? 'order-2 pt-4 mt-8' : ''} `}>
                    <img className="pr-32 sm:pr-16 " src={Section4UpperBg} />
                </BackroundImage>
                <div className="space-y-4 pt-32 sm:pt-8 pr-16 sm:px-8 py-2">
                    <h2 className="font-bold">Investment To Gain Citizenship</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wider">European cities are a hub for foreign investors due to the growing demand for new developments that the government has undertaken. Malta citizenship by real estate investment is one of the most popular programs that investors prefer due to a plethora of benefits. The latest data and statistics show that investors favor property investment and a second home in countries in Europe over other countries in the world. Golden Visa programs also provide individuals with the ability to secure citizenship, although the process is very different, as it grants you residency, not citizenship, and the ability to gain citizenship by naturalization after living in the country for a certain amount of years (depending on the country’s criteria). When you opt for the Golden Visa program, it does not grant you citizenship but gives you the status of being an EU resident, as is the case in Portugal, for example. Portugal permanent residents who apply for citizenship can acquire the status through the naturalization law. Being one of the most popular residency by investment programs, the Portugal Golden Visa has a whole host of benefits, some of which will be outlined.</p>
                </div>
            </section>


            <section className="px-16 py-16 sm:px-8 sm:py-8">


                <BackroundImage url={Section5UpperBg} classes="bg-cover rounded-lg">

                    <section className="space-y-4  px-16 sm:px-8 py-16">
                        <h2 className="font-bold  sm:py-0 text-white text-center pb-6  ">Global Citizenship And Residency At Your Fingertips</h2>
                        <p className="text-white opacity-90 text-left tracking-wider">
                            With years of experience in property investment, Global Citizen Solutions provides a personalized service to each client, relying on statistical data from market transactions, real estate intelligence, and the support of a wide network of trusted partners. Having an expert on-hand every step of the way to advise you on required contracts and legal obligations may prevent you from making a costly misstep. It also means you know exactly what to expect from your investment, as tax and legal technicalities can vary depending on the market and your specific financial circumstances. If you are looking for visa-free travel throughout Europe, residency in a European country will give you access to all 26 Schengen Area member states for up to 90 days, without internal border checks or any requirement for additional documents. Australia New Zealand Germany Spain Portugal Greece Ireland Malta & others Citizenship provides visa-free travel to as many as 152 nations. With year-round sunshine, rich cultures and a relaxed attitude to life, the Caribbean is an understandably attractive proposition for investors from all over the world. Visa-free travel to as many as 152 countries Application process from 60 days Investment options from USD$100,000 Little or no physical presence requirement Good transport links with US and Europe Residency through Investment If you are looking for visa-free travel throughout Europe, residency in a European country will give you access to all 26 Schengen Area member states for up to 90 days, without internal border checks or any requirement for additional documents. Countries offer second citizenship programmes – that is to say, the potential option to buy citizenship outright by means of property or business investment, or by making a contribution to government-prescribed development funds or causes: The UK Ireland Cyprus Grenada Malta
                        </p>

                    </section>

                </BackroundImage>
            </section>


            <FindMore />

        </>
    );
}

export default Citizenship