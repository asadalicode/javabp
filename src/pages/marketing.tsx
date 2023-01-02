import BackroundImage from "../utils/backgroundImage";
import TopBg from "../assets/capital/HeroBanner.svg";
import TopMobileBg from "../assets/capital/HeroBanner.svg";
import BgYellowLeft from "../assets/company/bgYellowLeft.svg";
import BgYellowRight from "../assets/citizenship/bgRightLayer.svg";
import BlackBg from "../assets/home/2.svg";

import Section1Bg from "../assets/home/section1_bg.svg";
import Section4Bg from "../assets/marketing/loanOptions.png";
import Section5Bg from "../assets/capital/Group282.png";
import Section6Bg from "../assets/capital/Group281.png";
import Section7Bg from "../assets/capital/Group282.jpg";
import Section2UpperBg from "../assets/marketing/Group36.png";
import Section3UpperBg from "../assets/capital/WhoWeAre.svg";
import Section5UpperBg from "../assets/home/section5_upper_bg.png";
import Section5UpperMobBg from "../assets/home/section5_upper_mob_bg.png";

import IsMobile from "../utils/detectDevice";

const Marketing = () => {

    return (
        <>
            <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">How We Can Help You Achieve Your Goals?</h1>
                    <p className=" text-white opacity-70">Consultancy, Strategy, Marketing, Executive Support for your Business</p>
                    <button className="rounded bg-yellow-secondary w-40 h-12 hover:bg-yellow ">
                        <p className="text-black-secondary"> Learn More</p></button>
                </div>
            </BackroundImage>


            <section className="grid grid-cols-2 py-16  sm:grid-cols-1 bg-white">


                <BackroundImage url={IsMobile() ? BgYellowLeft : BgYellowLeft} classes={`text-center ${IsMobile() ? 'pr-8' : 'pr-32'} pt-8 bg-left`}>
                    <img className="" src={Section2UpperBg} />
                </BackroundImage>


                <div className="space-y-4 w-11/12 pt-32 sm:pt-8  sm:px-8 ">
                    <h2 className="font-bold">Who We Are And What We Can Do For Your Business</h2>
                    <p className="text-gray-dark opacity-90 text-left tracking-wide">We seek to partner with clients who challenge themselves to be exceptional and have a strong desire to win and take their business to the next level. We define a bold ambition with clients, then work together as one team to create such high levels of value that we set new standards of excellence for our industries.</p>
                </div>

            </section>

            <section className="px-16  sm:px-8">


                <BackroundImage url={BlackBg} classes="bg-cover rounded-lg sm:bg-black">

                    <section className="space-y-4  px-16 sm:px-8 py-16">
                        <h2 className="font-bold text-left  sm:py-0 text-white ">Marketing & Branding</h2>
                        <p className="text-white opacity-90 text-left tracking-wider pb-32 sm:pb-0">
                            What’s your brand? Does your business have a clearly defined idea of what it is and what values it represents that makes it unique? If not, your brand is not working hard enough for you. Develop a new branding strategy with help from Prosper Marketing. Our expert marketing team will assist you in identifying the key aspects that your customers want to see in your brand. We perform research to learn about your target audience and apply the results to developing your brand. The Importance of Better Branding Branding is a major component of competing successfully in a crowded marketplace. The benefits of branding include: Clearly defining your role in the marketplace Developing a strong identity and original voice Setting your products and services apart from competitors and identifying their uniqueness Building the Whole Package While graphic design plays a role in developing the logo, color palette, and typographic, a good branding strategy encompasses more. Packaging design, advertising, potential sponsorships or partnerships, and the in-store experience are all a part of branding. We are experienced in all branding components and can assist your company in developing a powerful brand and message. Contact us today to learn about the power of branding and how we can help your business grow. Print Stand out in Print If you run a business, you understand the importance of leveraging marketing campaigns to bring in new customers and help your bottom line. You may be wondering, however, if traditional marketing tactics, such as printed materials, are no longer relevant in today’s increasingly digital world. Print marketing is in fact still very much alive–the key is to knowing how to leverage print marketing to reach the right audience at the right time to get their attention to tell them about your business. Many people still enjoy and may even prefer to hold marketing pieces in their hand. Some people retain information better when they physically handle pieces, which is why print marketing is still very much alive. If you’re looking to leverage Print Design and Marketing to spread the word about your business, you can rest easy knowing that with the right strategy, you can leverage this classic strategy. If you aren’t sure where to get started with your Print Design and Marketing strategy, lean on our seasoned marketing experts for advice. Contact us today to find out more about how we can put together a print strategy that makes sense for your business needs and will reach the right audience. Having a strategy is key to leveraging print marketing to create a buzz about your business’ product or service offering.
                        </p>

                    </section>

                </BackroundImage>
            </section>










            <section className="grid grid-cols-2 gap-8 bg-gray my-16   sm:grid-cols-1 ">

                <div className="space-y-4 pt-16 sm:pt-8 px-16 sm:px-8 ">
                    <h2 className="font-bold">Executive Planning And Support</h2>

                    <p className="text-gray-dark opacity-90 text-left tracking-wide">Leaders come to us to solve industry-defining challenges in: Strategic Planning (End-to-End Process) Zero-based Budgeting & Forecasting Project, Program & Portfolio Management Agile Transformation & Delivery Executive Coaching & Training Reorganizations & Restructures Organizational Change Management Senior-level & Executive Recruiting Resource Management Talent Development Corporate Training Content Marketing Develop a Content Marketing Strategy that Brings in Results If you’re ready to take your business to the next level and leverage current trends to widen your customer base and increase revenue, then you’re ready to consider a Content Marketing strategy as part of your overall marketing campaign. With content marketing, you create high quality, relevant content that will delight and engage your audience while setting you apart as an industry expert and keeping your business top of mind. It takes a great deal of skill, research and time to develop a quality marketing campaign, which is why you should lean on our expertise to help you achieve the results your business is looking for. Our team of dedicated professionals has the skills and expertise in Content Marketing to develop a quality campaign that will get your business in front of the right audience and deliver the right message. With the right content marketing strategy, you’ll have increased customer engagement and loyalty, a wider reach and more meaningful traffic on your site which can increase your conversion rate and help your bottom line</p>

                </div>


                <section className="w-fit ml-auto">
                    <BackroundImage url={IsMobile() ? '' : ''} classes={`text-center  sm:pr-0 ${IsMobile() ? '' : 'bg-right-cover'}`}>
                        <img className="py-8 pt-8 sm:px-8 sm:pt-0" src={Section4Bg} />
                    </BackroundImage>
                </section>
            </section>






            <section className="px-16  sm:px-8 sm:mb-8">


                <BackroundImage url={BlackBg} classes="bg-cover rounded-lg sm:bg-black py-16">

                    <section className="space-y-4  px-16 pb-10 sm:px-8 ">
                        <h2 className="font-bold text-left  sm:py-0 text-white ">Consultancy & Strategic Support</h2>
                        <div className="text-white opacity-90 text-left tracking-wider pb-32 sm:pb-0">
                            <p>  A business strategy is the means by which an organization sets out to achieve its desired objectives. It can simply be described as long-term business planning.  It is therefore about how people throughout the organization should make decisions and allocate resources in order accomplish key objectives. Strategic Technology Poor grasp of the technology, skepticism over its potential, or the natural conservatism of business: these are the three main reasons some organizations simply don’t take the metaverse seriously in 2022. That same mistrust was there in the 1990s when the internet began. Cast your mind back and you may remember various talking heads of the day asking questions such as whether we need global digital communication. In hindsight 30 years later, they were wrong; the internet permeates our lives in ways we never imagined, and it continues to do so. Nobody is willing to go back to how things where before. Now, that skepticism is back for the metaverse as we predict deeper immersion. The question is: where do we go as a society and as a business culture? </p> <br /> <br />
                            <h4 className=" font-semibold pb-2">A Sign of Things to Come</h4> <p>  The reluctance to enter the metaverse and even the confusion over what it means is perfectly understandable right now. Many people are still getting to grips with cryptocurrencies and NFTs (non-fungible tokens) and all the concerns that they bring as they enter spaces where they were previously unknown. Web3 or as it is also known MV3 is almost certainly to be the next phase of our digital lives and the evolutionary environment of digital spaces. Millions are already getting onboard the metaverse – an environment still in the early stages. Those who do not, whether that’s the general population or in business, will almost certainly be left behind. Many saw this coming and so it should come as a surprise to nobody. Facebook has nearly three billion active users a month. It’s sister platform Instagram has around one billion. Fortnite, the online gaming platform, has 350 million users. Fortnite is the biggest and best known of its kind, but it is not the only one. The digital lifestyle and immersive experiences are already here. Teenagers and preteens are the most tech savvy ever. Generation Z is the first to grow up with the internet as an integral part of their lives. That integration is only going to increase through Generation Z, and their children, and their children. </p> <br /> <br />

                            <h4 className=" font-semibold pb-2"> Real Life Goes Digital </h4> <p>  These tech-savvy generations are already here and they’re increasingly moving from the concept of renting online service to ownership of digital services. Identifying this, some well-known labels and brands are transitioning to Web3 so that they can offer their products as digital items in the metaverse. Examples: A collaboration between Zara (the Spanish fashion company) and Ader Error (a South Korean label) to offer digital makeup and clothing for online avatars. Adidas Originals and Nikeland have both stated clear intent to step into new creative frontiers with their products and services The intent is to help digital content creators both sell and own products in the digital environment, and there appears to be strong demand for these types of products through blockchain and digital identities in the metaverse. They may be as distinct from each other as our current physical selves. This has all the makings of a new economic landscape and the jobs to go with it. Web3 will create employment in everything from world building, events, guided tours, digital fashion design… the list goes on. If this seems a little silly, know that some are predicting whole bodysuits, haptic (touch sensitive) gloves and further AR development as additions to current VR and AR. These things are already slated as the next generation of wearable technology. Further, the creative economy is set to explode as these technologies become mainstream. </p> <br /> <br />

                            <h4 className=" font-semibold"> Blurred Boundaries Between Reality and the Digital  </h4> <p> Brands currently operating in the physical space, and who sell real world products, realise they have a huge opportunity to expand into territories they never previously considered. They also realise that if they do not, they will get left behind. It will be a huge learning curve, but it will also mean collaborations and partnerships between brands who previously may have existed in completely different physical spaces. It means creating digital identities and partnerships to seize the potential of Web3. While this may sound very Black Mirror or Ready Player One, this technology is now closer than it ever was. We can no longer deny that it is here or that there are benefits for everyone. Much like everyone insisted we all had to have a digital brand on the 2000s and 2010s and marketing strategies, we are now in a new situation to which businesses must adapt. The main question for businesses right now is not whether they are going to adapt to Web3/MV3, but how they are going to do it. The task of stitching together a strategy: … entails addressing a series of how's: how to grow the business, how to please customers, how to out-compete rivals, how to respond to changing market conditions, and how to achieve strategic and financial objectives.       </p>
                        </div>

                    </section>

                </BackroundImage>
            </section>









            <BackroundImage url={IsMobile() ? Section5UpperMobBg : Section5UpperBg} classes="space-y-9  bg-cover">
                <div className=" space-y-6 px-16 py-20">
                    <h5 className=" text-white text-left font-bold ">Find Out More About Our Service Offerings And How We Can Help You Access Your 20% Discount Off <br /> Our Services?</h5>
                    <h5 className=" text-white text-left font-bold ">Register Online For One Of Our Service Offerings To Qualify For Your Discount</h5>
                    <button className=" rounded border-2 border-yellow-secondary w-auto p-3 sm:bg-yellow-secondary">
                        <p className="text-yellow-secondary sm:text-black font-semibold">Register Online Here Now</p></button>
                </div>
            </BackroundImage>

        </>
    );
}

export default Marketing