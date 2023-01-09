import BackroundImage from "../utils/backgroundImage";
import IsMobile from "../utils/detectDevice";
import TopBg from "../assets/business/HeroBanner.svg";
import TopMobileBg from "../assets/business/HeroBanner.png";
import Section1Bg from "../assets/home/section1_bg.svg";
import Section2Bg from "../assets/home/section2_bg.svg";
import Section3Bg from "../assets/home/Bg_yellow_right.svg";
import Section2UpperBg from "../assets/business/Strategic&Operational.svg";
import Section3UpperBg from "../assets/business/financial.png";
import { ReactComponent as BusinessAndContracts } from "../assets/business/Business And Contracts.svg";
import { ReactComponent as NonDisclosureAgreement } from "../assets/business/Non-Disclosure Agreement.svg";
import { ReactComponent as LLCOperatingAgreement } from "../assets/business/LLC Operating Agreement.svg";
import { ReactComponent as IndependentContractorAgreement } from "../assets/business/Independent Contractor Agreement.svg";
import { ReactComponent as BusinessContract } from "../assets/business/Business Contract.svg";
import { ReactComponent as RealEstate } from "../assets/business/Real Estate.svg";
import { ReactComponent as LeaseAgreement } from "../assets/business/Lease Agreement.svg";
import { ReactComponent as EvictionNotice } from "../assets/business/Eviction Notice.svg";
import { ReactComponent as QuitclaimDeed } from "../assets/business/Quitclaim Deed.svg";
import { ReactComponent as FamilyAndPersonal } from "../assets/business/Family And Personal.svg";
import { ReactComponent as LastWillandTestament } from "../assets/business/Last Will And Testament.svg";
import { ReactComponent as LivingWill } from "../assets/business/Living Will.svg"
import { ReactComponent as DivorceSettlementAgreement } from "../assets/business/Divorce Settlement Agreement.svg"
import { ReactComponent as ChildCareAuthorization } from "../assets/business/Child Care Authorization.svg"
import { ReactComponent as Personal } from "../assets/business/Personal.svg"
import { ReactComponent as HealthAndMedical } from "../assets/business/Health And Medical.svg"
import { ReactComponent as DivorceAndLegalSeperation } from "../assets/business/Divorce And Legal Separation.svg"
import { ReactComponent as Children } from "../assets/business/Children.svg"
import { ReactComponent as Business } from "../assets/business/Business.svg"
import { ReactComponent as Incorporation } from "../assets/business/Incorporation.svg"
import { ReactComponent as LLC } from "../assets/business/LLC.svg"
import { ReactComponent as RunningABusinessCompliance } from "../assets/business/Running A Business - Compliance.svg"
import { ReactComponent as IntellectualPropertyAndLicensing } from "../assets/business/Intellectual Property And Licensing.svg"
import { ReactComponent as LabourAndEmployment } from "../assets/business/Labor And Employment.svg"
import { ReactComponent as PropertyAndFinance } from "../assets/business/Property & Finance.svg"
import { ReactComponent as RealEstateLeasing } from "../assets/business/Real Estate & Leasing.svg"
import { ReactComponent as Eviction } from "../assets/business/Eviction.svg"
import { ReactComponent as LendingAndBorrowing } from "../assets/business/Lending And Borrowing.svg"
import { ReactComponent as DebtCollection } from "../assets/business/Debt Collection.svg"
import { ReactComponent as Tax } from "../assets/business/Tax.svg"

import { ReactComponent as Member } from "../assets/business/Member.svg";
import { ReactComponent as Accounts } from "../assets/business/accounts.svg";
import { ReactComponent as Dissolution } from "../assets/business/Dissolution.svg";

import Carousel from "../utils/carousel";
import FindMore from "./findMore";

export interface cardData {
    heading: string,
    icon: any,
    text: string,
}

const cardData: cardData[] = [
    { heading: '', icon: <BusinessAndContracts className="h-16 w-full" />, text: 'Business And Contracts' },
    { heading: '', icon: <NonDisclosureAgreement className="h-16 w-full" />, text: 'Non-Disclosure Agreement' },
    { heading: '', icon: <LLCOperatingAgreement className="h-16 w-full" />, text: 'LLC Operating Agreement' },
    { heading: '', icon: <IndependentContractorAgreement className="h-16 w-full" />, text: 'Independent Contracttor Agreement' },
    { heading: '', icon: <BusinessContract className="h-16 w-full" />, text: 'Business Contract' },
    { heading: '', icon: <RealEstate className="h-16 w-full" />, text: 'Real Estate' },
    { heading: '', icon: <LeaseAgreement className="h-16 w-full" />, text: 'Lease Agreeement' },
    { heading: '', icon: <EvictionNotice className="h-16 w-full" />, text: 'Eviction Notice' },
    { heading: '', icon: <QuitclaimDeed className="h-16 w-full" />, text: 'Quitclaim Deed' },
    { heading: '', icon: <FamilyAndPersonal className="h-16 w-full" />, text: 'Family And Personal' },
    { heading: '', icon: <LastWillandTestament className="h-16 w-full" />, text: 'Last Will and Testament' },
    { heading: '', icon: <LivingWill className="h-16 w-full" />, text: 'Living Will' },
    { heading: '', icon: <DivorceSettlementAgreement className="h-16 w-full" />, text: 'Divorce Settlement Agreement ' },
    { heading: '', icon: <ChildCareAuthorization className="h-16 w-full" />, text: 'Child Care Authorization' },
    { heading: '', icon: <Personal className="h-16 w-full" />, text: 'Personal' },
    { heading: '', icon: <HealthAndMedical className="h-16 w-full" />, text: 'Health And Medical' },
    { heading: '', icon: <DivorceAndLegalSeperation className="h-16 w-full" />, text: 'Divorce And Legal Seperation' },
    { heading: '', icon: <Children className="h-16 w-full" />, text: 'Children' },
    { heading: '', icon: <Business className="h-16 w-full" />, text: 'Business' },
    { heading: '', icon: <Incorporation className="h-16 w-full" />, text: 'Incorporation' },
    { heading: '', icon: <LLC className="h-16 w-full" />, text: 'LLC' },
    { heading: '', icon: <RunningABusinessCompliance className="h-16 w-full" />, text: 'Running A Business / Compliance' },
    { heading: '', icon: <IntellectualPropertyAndLicensing className="h-16 w-full" />, text: 'Intellectual Property And Licensing' },
    { heading: '', icon: <LabourAndEmployment className="h-16 w-full" />, text: 'Labour And Employment' },
    { heading: '', icon: <PropertyAndFinance className="h-16 w-full" />, text: 'Property And Finance' },
    { heading: '', icon: <RealEstateLeasing className="h-16 w-full" />, text: 'Real Estate & Leasing' },
    { heading: '', icon: <Eviction className="h-16 w-full" />, text: 'Eviction' },
    { heading: '', icon: <LendingAndBorrowing className="h-16 w-full" />, text: 'Lending And Borrowing' },
    { heading: '', icon: <DebtCollection className="h-16 w-full" />, text: 'Debt Collection' },
    { heading: '', icon: <Tax className="h-16 w-full" />, text: 'Tax' },
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
                    <div className="py-4 sm:w-full w-10/12 border-2 border-dashed border-yellow-secondary grid grid-cols-3 gap-2">
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
                            <p className="text-black font-bold px-2 leading-tight">Dissolution</p>
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


            <FindMore url={'/businessTemplate'} />

        </>
    )
}

export default BusinessPage;