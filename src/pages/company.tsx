import BackroundImage from "../utils/backgroundImage";
import TopBg from "../assets/company/hero_bg.png";
import TopMobileBg from "../assets/company/HeroBanner.png";
import BgYellowLeft from "../assets/company/bgYellowLeft.svg";
import Section4Bg from "../assets/company/Group278.png";
import Section5Bg from "../assets/company/Group315.png";
import Section6Bg from "../assets/company/Group301.png";
import Section7Bg from "../assets/company/Group305.png";
import Section8Bg from "../assets/company/Group316.png";

import Section2UpperBg from "../assets/capital/Group959.jpg";
import Section3UpperBg from "../assets/company/Group36.png";
import IsMobile from "../utils/detectDevice";
import FindMore from "./findMore";
import { useNavigate } from "react-router";

const Company = () => {

    let navigate = useNavigate();
    const navigateByUrl = (url: string) => {
        return navigate(url);
    }

    return (
        <>
            <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">The world’s #1 online company formation provider</h1>
                    <p className=" text-white opacity-70">Need to do Business Globally? Serving clients from our Global offices, we offer the lowest costs, fast company registration and a truly unique service.</p>
                    <button onClick={() => navigateByUrl('/companyTemplate')} className="rounded bg-yellow-secondary w-40 h-12 hover:bg-yellow ">
                        <p className="text-black-secondary">Get Registered Now!</p></button>
                </div>
            </BackroundImage>


            <section className="grid grid-cols-2  sm:grid-cols-1 bg-white">

                <div className="space-y-4 w-11/12 pt-32 sm:pt-8 pl-16 sm:px-8 ">
                    <h2 className="font-bold">How We Can Help You Achieve Your Goals?</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">No matter where your company is located, we are able to establish a professional team within 48 hours. Our teams are always available so your business requirement can be processed with military precision. Our employees are constantly educated so they are up to date with current market trends. 7 Reasons to work with us Confidentiality & data protection Competitive price policy 96% client satisfaction doesn’t come by chance Offshore & Onshore business experts An international group of companies members of leading associations Strong executive team Integrity and due diligence</p>
                </div>
                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center ${IsMobile() ? 'pl-8' : 'pl-32'} pt-8 bg-right`}>
                    <img className="" src={Section2UpperBg} />
                </BackroundImage>
            </section>

            <section className="grid grid-cols-2  sm:grid-cols-1 bg-white">
                <BackroundImage url={IsMobile() ? '' : BgYellowLeft} classes={`text-center bg-left ${IsMobile() ? 'order-2 pt-4' : ''} `}>
                    <img className="pr-32 sm:px-8 " src={Section3UpperBg} />
                </BackroundImage>
                <div className="space-y-4 pt-32 sm:pt-8 pr-16 sm:px-8 py-2">
                    <h2 className="font-bold">Our Services</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wider">Company Activity <br /> We can set up companies for most activities <br /> Consultants <br /> Commerce  over the Internet <br /> Businessmen <br /> Expatriates <br /> Traders <br /> Holding intellectual property <br /> Rights For the custody of real estate <br /> For inheritance purpose <br /> Fast Application Process <br /> <br /> Remote Application <br /> Submit application online Cost and time efficiency. Especially for those who prefer using nominee structure <br /> or have a complicated company structure. Apply from home: submit supporting documents depending on the prerequisites of your chosen bank. <br /> Quality support: our specialist banking-support team will review, advise on and support you with the paperwork.<br /> Your bank account is usually ready in 10 working days, depending on your chosen bank.</p>
                </div>
            </section>

            <section className="grid grid-cols-2 gap-8  sm:grid-cols-1 ">

                <div className="space-y-4 pt-16 sm:pt-8 px-16 sm:px-8 ">
                    <h2 className="font-bold">Merits Of Establishing An Offshore Company</h2>

                    <p className="text-gray-dark opacity-90 text-left tracking-wide">Any company or individual that is unable to secure commercial financing through traditional sources, particularly if funding needs are immediate. We work with over 100 Private Investors monthly who specialize in non-traditional funding for clients who need a fast turnaround. We can only offer a very specific financing that may or may not be the best available for the borrowers request By best available we mean the most capital at the lowest interest rate with the least onerous collateral requirements. Keep in mind that because we are not a direct lender but rather a clearinghouse for hundreds of different Private Investors and funding sources we offer a great advantage to the commercial borrower. Small businesses like yours often struggle to get sufficient financing at a reasonable rate. The Small Business Administration works with lenders like Prosper Lending to provide a better option. These loans offer reduced interest rates and better terms compared to what you may otherwise qualify for. We can help you secure a loan quickly and with excellent terms.</p>

                </div>


                <section className="w-fit ml-auto">
                    <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center  sm:pr-0 bg-right-cover`}>
                        <img className="py-8 pt-8 pl-40 sm:px-8 sm:pt-0" src={Section4Bg} />
                    </BackroundImage>
                </section>
            </section>




            <section className="grid grid-cols-2  sm:grid-cols-1 bg-white">
                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center bg-left sm:order-2`}>
                    <img className="max-w-xl w-4/5 ml-12 sm:m-auto pt-20 sm:pt-8  " src={Section5Bg} />
                </BackroundImage>
                <div className="space-y-4 pt-32 sm:pt-8 pr-16 sm:px-8 py-2 ">
                    <h2 className="font-bold">Buy Equipment</h2>
                    <p className="text-gray-dark opacity-90 text-left pr-16 tracking-wide leading-relaxed">To clarify, doing business offshore is not about evading taxes or keeping money from the government. Rather, it is about structuring your affairs in such a way as to take advantage of local and international laws. <br /> <br /> These laws that are available to anyone who cares to use them to their benefit. Therefore, we can show you perfectly legal and legitimate ways to set up your business internationally so that you understand the far-reaching benefits from asset protection to cost-savings. <br /> <br /> People in the US, UK, Australia and some other countries are, by and large, taxed on worldwide income. <br /> <br /> On the other hand, you likely know that Apple, Google and others have slashed their tax bills using completely legal techniques through the use of overseas structures. In addition, the offshore captive insurance company is another way our clients have legally slashed their tax bills under IRC 953(d) and 831(b). Accordingly, there are ways that you may be able to do this too, with our help plus the guidance of the proper licensed professionals. <br /><br /> We cannot emphasize the last point enough. Offshore tax benefits are a very sensitive areas of the law. <br /> <br /> So, before you use international strategies for taxation purposes, be sure that you don’t just talk with any CPA. Talk with an accountant and/or tax attorney who specializes helping citizens and residents with foreign income. You are a lot more likely to pass an audit with flying colors. Plus, you’ll sleep better at night, too.</p>
                </div>
            </section>

            <section className="grid grid-cols-2  pb-8  sm:grid-cols-1 bg-white">

                <div className="space-y-4 pt-32 sm:pt-8 pl-16 px-16 sm:px-8 py-2">
                    <h2 className="font-bold">Online Company Formation</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">One extraordinarily successful strategy is to use on offshore company to operate your online business. It is also a technique used by Apple and Google. If your business is based online and you incorporate your international company properly, therefore, it may have some very attractive tax benefits. <br /><br /> This may defer tax payments, similar to an IRA, for instance. It is abundantly important to have the tax advice of a knowledgeable CPA who can guide you in the use of this strategy. Use of these tools to save money on taxes may also depend on your country of residence and citizenship and your percentage of ownership of the company, among other actors. So, it should only be used under the guidance of experienced tax counsel. <br /><br /> An online business can have a global customer base. For example, do you want to multiply your customer base by 22 times? <br /><br /> The population outside of the US is about 22 times greater than inside. The world population outside of the UK is 109 times greater than inside, 200 greater outside of Canada and 304 times outside of Australia. You get the idea. Why should you limit yourself to the old fashion geographically constricted business model? Consequently, establishing an offshore company and offshore bank account to run your online business can be a great way to build momentum outside of the country in which you reside.</p>
                </div>

                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center bg-right`}>
                    <img className="max-w-xl w-4/5 sm:m-auto  pt-20 sm:pt-8 " src={Section6Bg} />
                </BackroundImage>
            </section>

            <section className="grid grid-cols-2  sm:grid-cols-1 bg-white">
                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center bg-left sm:order-2`}>
                    <img className="max-w-xl w-4/5 ml-12 sm:m-auto pt-20 sm:pt-8  " src={Section7Bg} />
                </BackroundImage>
                <div className="space-y-4 pt-32 sm:pt-0  pr-16 sm:px-8 py-2">
                    <h2 className="font-bold">Offshore Banking</h2>
                    <p className="text-gray-dark opacity-90 text-left pr-16 tracking-wide leading-relaxed">Within minutes of filing a lawsuit, an attorney can file another document freezing your bank account, your home, your business, and other assets. However, operating a business offshore puts up a huge barrier to a viscous litigant’s ability to freeze and seize your hard earned resources. Multiple Streams of Income What if your local company runs into difficult times? Remember the US and European recession of 2008, 2009 and following years? During that time the economies in Southeast Asia and Australia were booming. By having an offshore money machine, you limit your exposure to the local economy. Why not have multiple global online businesses running simultaneously? The low cost of establishing a number of offshore companies and accounts, along with new low-cost website development services makes the initial investment just a drop in the bucket compared to the tremendous upside potential. Our Partners provides all of these services, and has for tens of thousands of clients. If a farmer wants to harvest a crop he must first plant the seeds. Not all of the seeds grow but a majority of them do; and the ones that do can make him and his family a living for many generations.</p>
                </div>
            </section>

            <section className="grid grid-cols-2  pb-8  sm:grid-cols-1 bg-white">

                <div className="space-y-4 pt-32 sm:pt-8 pl-16 px-16 sm:px-8 py-2">
                    <h2 className="font-bold">Our Current Jurisdictions</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">Make sure your company benefits from the global trading arena <br /> Anguilla <br /> Bahamas <br />Belize<br /> British<br /> Virgin <br />Islands<br /> Canada<br /> Cayman <br />Island <br />Cyprus <br />Delaware<br /> Florida <br />Gibraltar<br /> Hong Kong <br />Latvia<br /> St Lucia <br />Malta<br /> Marshall <br />Islands <br />Netherlands<br /> Nevis<br /> Mauritius <br />Panama Ras Al Khaimah (UAE)<br /> Samoa<br /> Seychelles <br />Singapore<br /> Switzerland<br /> United Kingdom <br />Vanuatu</p>
                </div>

                <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center bg-right`}>
                    <img className="max-w-xl w-4/5 sm:m-auto  pt-20 sm:pt-8  " src={Section8Bg} />
                </BackroundImage>
            </section>


            <FindMore url={'/companyTemplate'} />

        </>
    );
}

export default Company