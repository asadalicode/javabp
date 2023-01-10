import BackroundImage from "../utils/backgroundImage";
import TopBg from "../assets/capital/HeroBanner.svg";
import TopMobileBg from "../assets/capital/HeroBanner_mbl.png";

import Section1Bg from "../assets/home/section1_bg.svg";
import Section4Bg from "../assets/capital/Group970.svg";
import Section5Bg from "../assets/capital/Group282.png";
import Section6Bg from "../assets/capital/Group281.png";
import Section7Bg from "../assets/capital/Group282.jpg";
import Section2UpperBg from "../assets/capital/Group959.jpg";
import Section3UpperBg from "../assets/capital/WhoWeAre.svg";
import IsMobile from "../utils/detectDevice";
import FindMore from "./findMore";
import { useNavigate } from "react-router";

const CapitalInvestment = () => {

    let navigate = useNavigate();
    const navigateByUrl = (url: string) => {
        return navigate(url);
    }

    return (
        <>
            <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">Capital, Investments & Funding Partnerships</h1>
                    <p className=" text-white opacity-70">Connecting Business to Partners across the globe that are on standby to fund your start-up, business expansion or invest in your business to see it grow</p>
                    <button onClick={() => navigateByUrl('/businessConsultancyTemplate')} className="rounded bg-yellow-secondary w-auto px-4 h-12 hover:bg-yellow ">
                        <p className="text-black-secondary">Get Registered Now!</p></button>
                </div>
            </BackroundImage>


            <section className="grid grid-cols-2  sm:grid-cols-1 bg-white">

                <div className="space-y-4 w-11/12 pt-32 sm:pt-8 pl-16 sm:px-8 ">
                    <h2 className="font-bold">Our Investment Services</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">We have Access to Virtually Every Financing Product Available in the Market. We see ourselves as advisors, or consultants, that can help break down the complexity and ambiguity of the financing world. We can serve business big and small, startup and established, growing or receding, and can now even serve folks with residential real estate products. Our goal is to be a one-stop-shop for all your financing needs.</p>
                </div>
                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center ${IsMobile() ? 'pl-8' : 'pl-32'} pt-8 bg-right`}>
                    <img className="" src={Section2UpperBg} />
                </BackroundImage>
            </section>

            <section className="grid grid-cols-2  sm:grid-cols-1 bg-white">
                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center bg-left ${IsMobile() ? 'order-2 pt-4' : ''} `}>
                    <img className="max-w-xl w-4/5 " src={Section3UpperBg} />
                </BackroundImage>
                <div className="space-y-4 pt-32 sm:pt-8 pr-16 sm:px-8 py-2">
                    <h2 className="font-bold">Who We Are And What We Can Do For Your Business</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wider">Any company or individual that is unable to secure commercial financing through traditional sources, particularly if funding needs are immediate. We work with over 100 Private Investors monthly who specialize in non-traditional funding for clients who need a fast turnaround. We can only offer a very specific financing that may or may not be the best available for the borrowers request By best available we mean the most capital at the lowest interest rate with the least onerous collateral requirements. Keep in mind that because we are not a direct lender but rather a clearinghouse for hundreds of different Private Investors and funding sources we offer a great advantage to the commercial borrower. Small businesses like yours often struggle to get sufficient financing at a reasonable rate. The Small Business Administration works with lenders like Prosper Lending to provide a better option. These loans offer reduced interest rates and better terms compared to what you may otherwise qualify for. We can help you secure a loan quickly and with excellent terms.</p>
                </div>
            </section>

            <section className="grid grid-cols-2 gap-8  sm:grid-cols-1 ">

                <div className="space-y-4 pt-16 sm:pt-8 px-16 sm:px-8 ">
                    <h2 className="font-bold">Our Loan Options</h2>

                    <p className="text-gray-dark opacity-90 text-left tracking-wide">Any company or individual that is unable to secure commercial financing through traditional sources, particularly if funding needs are immediate. We work with over 100 Private Investors monthly who specialize in non-traditional funding for clients who need a fast turnaround. We can only offer a very specific financing that may or may not be the best available for the borrowers request By best available we mean the most capital at the lowest interest rate with the least onerous collateral requirements. Keep in mind that because we are not a direct lender but rather a clearinghouse for hundreds of different Private Investors and funding sources we offer a great advantage to the commercial borrower. Small businesses like yours often struggle to get sufficient financing at a reasonable rate. The Small Business Administration works with lenders like Prosper Lending to provide a better option. These loans offer reduced interest rates and better terms compared to what you may otherwise qualify for. We can help you secure a loan quickly and with excellent terms.</p>

                </div>


                <section className="w-fit ml-auto">
                    <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center  sm:pr-0 ${IsMobile() ? '' : 'bg-right-cover'}`}>
                        <img className="py-8 pt-8 sm:px-8 sm:pt-0" src={Section4Bg} />
                    </BackroundImage>
                </section>
            </section>


            <section className="px-16 sm:px-8">


                <BackroundImage url={Section5Bg} classes="bg-cover">

                    <section className="space-y-4  px-16 sm:px-8 py-32">
                        <h2 className="font-bold text-left  sm:py-0 text-white ">Make Your Real Estate Goals A Reality</h2>
                        <p className="text-white opacity-90 text-left tracking-wider">
                            One of the most common uses for an SBA loan is to cover the cost of purchasing, renovating or refinancing real estate. These loans can only be used for owner-occupied or hospitality properties. These are a few examples of the types of properties you could use a loan for: <br /> <br />
                            Offices <br /> Hotels  and motels <br /> Automotive  facilities <br /> Healthcare facilities <br /> Veterinary practices<br /> Childcare facilities<br /> Single-purpose buildings<br /> Nonconforming properties
                        </p>

                    </section>

                </BackroundImage>
            </section>

            <section className="grid grid-cols-2  sm:grid-cols-1 bg-white">
                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center bg-left`}>
                    <img className="max-w-xl w-4/5 ml-12 sm:m-auto pt-20 " src={Section6Bg} />
                </BackroundImage>
                <div className="space-y-4 pt-32 sm:pt-8 pr-16 sm:px-8 py-2">
                    <h2 className="font-bold">Buy Equipment</h2>
                    <p className="text-gray-dark opacity-90 text-left pr-16 tracking-wide">Another common use for a small business loan is to cover the cost of buying new equipment. These are some examples of what you could purchase: <br /> <br /> Production machinery <br />  Vehicles <br /> Heavy Equipment <br /> Diagnostic tools <br /> Laundry equipment <br /> Medical equipment</p>
                </div>
            </section>

            <section className="grid grid-cols-2  pb-8  sm:grid-cols-1 bg-white">

                <div className="space-y-4 pt-32 sm:pt-8 pl-16 px-16 sm:px-8 py-2">
                    <h2 className="font-bold">Acquire Another Business</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">Do you need funds to acquire a competitor or buy out a business partner? That could be a great way to use a Small Business Administration loan. These loans typically have a 15-year term. You can become pre qualified quickly. We will primarily examine the business’s cash flow and management.</p>
                </div>

                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center bg-right`}>
                    <img className="max-w-xl w-4/5 sm:m-auto  pt-20 " src={Section7Bg} />
                </BackroundImage>
            </section>

            <BackroundImage url={Section1Bg} classes="text-center space-y-9 pb-16  bg-white bg-right">
                <h2 className="font-bold pt-16 sm:pt-8 sm:px-8 px-16">Access Venture Capital, Private Equity, Private Investors Or Business Partners That Want Invest In Your Business</h2>


                <div className="grid grid-cols-3 sm:grid-cols-1 gap-10 px-16 sm:px-8">
                    <div className="p-6 space-y-4 bg-white  rounded-2xl card-shadow ">
                        <h3 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Funding</h3>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">We work directly with multiple Private Investors, Venture Capital Partners, Angel Investment Companies and can offer Equity Partnerships on an International level. Many of our investors are not known or accessible by the public and include wealthy families and individuals, private equity firms, hedge funds, venture capital firms, investment companies, and other private and institutional investors. We are committed to fulfilling your needs with the highest level of professionalism, expertise and service.</p>
                    </div>

                    <div className=" p-6 space-y-4 bg-white rounded-2xl card-shadow ">
                        <h3 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Equity & Venture Partners</h3>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">We can assist with Equity Financing, this involves investors who invest money into a company and in return receives some percentage ownership of the company. The exact amount of ownership would typically be a function of how much they are investing versus how much the company is worth at the time of investment hand</p>
                    </div>

                    <div className=" p-6 space-y-4 bg-white rounded-2xl  card-shadow ">
                        <h3 className="mb-2 font-bold tracking-tight text-black text-left max-w-xs">Debt Financing</h3>
                        <p className="text-gray-dark opacity-90 text-left tracking-tight">A lender who loans money to a company and receives a predetermined interest rate paid by the borrower as well as having the principal (the original amount of the loan) paid back over time. We have 1500 Private Investors and companies we work with on a monthly basis</p>
                    </div>


                </div>

            </BackroundImage>


            <FindMore url={'/businessConsultancyTemplate'} />


        </>
    );
}

export default CapitalInvestment