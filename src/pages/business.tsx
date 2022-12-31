import BackroundImage from "../utils/backgroundImage";
import IsMobile from "../utils/detectDevice";
import TopBg from "../assets/business/HeroBanner.svg";
import TopMobileBg from "../assets/home/1_mobile.png";
import Section1Bg from "../assets/home/section1_bg.svg";

import Section2Bg from "../assets/home/section2_bg.svg";
import Section3Bg from "../assets/home/Bg_yellow_right.svg";

import Section2MobBg from "../assets/business/Strategic&Operational.svg";
import Section2UpperBg from "../assets/business/Strategic&Operational.svg";
import Section3UpperBg from "../assets/business/financial.png";
// import Section3UpperBg from "../assets/home/section3_upper_bg.png";


import Section5UpperBg from "../assets/home/section5_upper_bg.png";
import Section5UpperMobBg from "../assets/home/section5_upper_mob_bg.png";
import { ReactComponent as IconBank } from "../assets/icons/bankAccount.svg";
import { ReactComponent as IconCompany } from "../assets/icons/company.svg";
import { ReactComponent as Plain } from "../assets/icons/Plain.svg";
import { ReactComponent as Visa } from "../assets/icons/visa.svg";
import { ReactComponent as Business } from "../assets/icons/business.svg";
import { ReactComponent as Investment } from "../assets/icons/investment.svg";

import { ReactComponent as Member } from "../assets/business/Member.svg";
import { ReactComponent as Accounts } from "../assets/business/accounts.svg";
import { ReactComponent as Dissolution } from "../assets/business/Dissolution.svg";

import Carousel from "../utils/carousel";

export interface cardData {
    heading: string,
    icon: any,
    text: string,



}

const cardData: cardData[] = [
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Business And Contracts' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Non-Disclosure Agreement' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'LLC Operating Agreement' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Independent Contracttor Agreement' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Business Contract' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Real Estate' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Lease Agreeement' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Eviction Notice' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Eviction Notice' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Quitclaim Deed' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Family And Personal' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Last Will and Testament' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Living Will' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Divorce Settlement Agreement ' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Child Care Authorization' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Personal' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Health And Medical' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Divorce And Legal Seperation' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Children' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Business' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Incorporation' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'LLC' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Running A Business / Compliance' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Intellectual Property And Licensing' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Labour And Employment' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Property And Finance' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Real Estate & Leasing' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Eviction' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Lending And Borrowing' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Debt Collection' },
    { heading: '', icon: <IconCompany className="h-16 w-full" />, text: 'Tax' },
]
const BusinessPage = () => {
    return (
        <>

            <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">All The Business, Financial & Legal Documents You Need</h1>
                    <p className=" text-white opacity-70">"Strive not to be a success but rather to be of value" <br /> ~~ Albert Einstein</p>
                    <button className="rounded bg-yellow-secondary w-40 h-12 hover:bg-yellow ">
                        <p className="text-black-secondary"> Learn More</p></button>
                </div>
            </BackroundImage>

            <BackroundImage url={Section1Bg} classes="text-center space-y-9  bg-right">
                <h2 className="font-bold pt-16">Templates Of Business Documents</h2>
                <Carousel data={cardData} >
                </Carousel>

            </BackroundImage>


            <section className="grid grid-cols-2 mt-16  sm:grid-cols-1 bg-white">
                <BackroundImage url={IsMobile() ? Section2Bg : Section2Bg} classes={`text-center bg-left`}>
                    <img className="max-w-xl w-4/5 ml-12 pt-20 " src={Section2UpperBg} />
                </BackroundImage>
                <div className="space-y-4 pt-32 sm:pt-8 pr-16 sm:px-8 py-2">
                    <h2 className="font-bold">Strategic & Operational Documents For Business</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wider">I'm ready to start a business. What should I do first? Small business consultants often have the same, glamorous but practical, answer of "get your own finances in order." You can easily and affordably start your business by using our incorporation services. We can help you form your LLC, obtain your tax ID number (EIN) and designate a registered agent, but it is up to you to manage your finances. Your personal credit may matter if you are intending to apply for small business loans, business credit cards, commercial lease space, or investment funding. In addition to forming a legal business entity, here are a few more actions to consider when starting a business: Separate your personal and business checking and savings accounts Improve your personal credit score Settle issues you may have with the IRS or state tax agency Avoid additional debt, if possible Separate your personal and business properties Consult with an accountant about how best to prepare for filing business taxes</p>
                </div>
            </section>


            <section className="grid grid-cols-2 gap-8   sm:grid-cols-1 sm:px-8">

                <div className="space-y-4 pt-16 sm:pt-8 pl-16 sm:pl-0  py-2">
                    <h2 className="font-bold">Why Work With Us?</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">Convenience <br /> At work, at home - anywhere. <br /> Our form is available online, anytime:PC</p>
                    <div className="py-4 w-fit border-2 border-dashed border-yellow-secondary grid grid-cols-3 gap-2">
                        <div className=" text-center justify-items-center grid space-y-1 justify-center">
                            <Member className="w-14" />
                            <p className="text-black font-bold px-2 leading-tight">Member contributions</p>
                        </div>
                        <div className=" text-center justify-items-center grid space-y-1 justify-center">
                            <Accounts className="w-14" />
                            <p className="text-black font-bold px-2 leading-tight">Accounting</p>
                        </div>
                        <div className=" text-center justify-items-center grid space-y-1 justify-center">
                            <Dissolution className="w-14" />
                            <p className="text-black font-bold px-2 leading-tight">Dissolution </p>
                        </div>
                    </div>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide leading-snug w-4/6 sm:w-fit">And a good Business Plan generally includes: <br /> A clear description of your product or service <br /> Who the stakeholders are and their roles <br /> A researched marketing plan <br /> A financial plan <br /> While in some cases a handshake agreement may be proven valid if it needs to be enforced, it is better to have a written agreement. Some laws require written contracts, such as certain real estate transactions. Additionally, there are laws that require contracts for agreements that may last longer than one year. <br /> A sample list of business agreements you should get in writing: <br /> Any real estate sales contract <br /> Commercial and residential lease agreements <br /> Sales agreements for large purchases <br /> Service agreements for costly jobs <br /> Partnerships or joint venture agreements <br /> Loan and investment contracts Agreements that last longer <br /> than a year Agreements that last past the death of one of parties</p>

                </div>
                <section className="w-fit ml-auto">
                    <BackroundImage url={IsMobile() ? Section3Bg : Section3Bg} classes={`text-center pr-16 sm:pr-0 ${IsMobile() ? '' : 'bg-right-cover'}`}>
                        <img className="py-8 pb-10 pt-16 sm:pt-0" src={Section3UpperBg} />
                    </BackroundImage>
                </section>
            </section>


            <BackroundImage url={IsMobile() ? Section5UpperMobBg : Section5UpperBg} classes="space-y-9  bg-cover">
                <div className=" space-y-6 px-16 py-20">
                    <h5 className=" text-white text-left font-bold ">Register Now For Immediate Download Of All The Document Templates You Need.</h5>
                    <h5 className=" text-white text-left font-bold ">Register Now To Receive Your Discount</h5>
                    <button className=" rounded border-2 border-yellow-secondary w-auto p-3 ">
                        <p className="text-yellow-secondary font-semibold">Register Now For Your Template Downloads</p></button>
                </div>
            </BackroundImage>

        </>
    )
}

export default BusinessPage;