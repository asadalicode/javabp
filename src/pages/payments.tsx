import BackroundImage from "../utils/backgroundImage";
import TopBg from "../assets/capital/HeroBanner.svg";
import TopMobileBg from "../assets/capital/HeroBanner.svg";


import IsMobile from "../utils/detectDevice";
import { useFormik } from "formik";
import * as Yup from 'yup';


const Payment = () => {

    const paymentFormik = useFormik({
        validationSchema: Yup.object({
            firstName: Yup.string().label('First Name').required(),
            lastName: Yup.string().label('Last Name').required(),
            companyName: Yup.string().label('Company Name').required(),
            email: Yup.string().label('Email').required(),
            services: Yup.array().required(),
            country: Yup.string().label('Country').required(),
            termsOfService: Yup.bool().required()
        }),
        initialValues: {
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            services: [],
            country: '',
            termsOfService: ''
        },

        onSubmit: function (values) {
            console.log(values);
        }
    })

    return (
        <>
            <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">Consulting, Strategy & Marketing Support Registration</h1>
                    <button className="rounded bg-yellow-secondary w-40 h-12 hover:bg-yellow ">
                        <p className="text-black-secondary"> Learn More</p></button>
                </div>
            </BackroundImage>


            <section className="px-16  bg-gray">
                <h2 className="font-bold pt-16 text-center pb-6">Consulting, Strategy & Marketing Support Registration
                </h2>

                <section className="grid grid-cols-1">

                    <form onSubmit={paymentFormik.handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">First name</label>
                                <input type="text" id="firstName" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${paymentFormik.touched.firstName && paymentFormik.errors.firstName ? 'border-red-400' : 'border-gray-300'} `} placeholder="John"
                                    onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} value={paymentFormik.values.firstName}
                                />
                                {paymentFormik.touched.firstName && paymentFormik.errors.firstName && (
                                    <span className='pt-2 inline-block text-xs text-red'>{paymentFormik.errors.firstName}</span>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">Last name</label>
                                <input type="text" id="lastName" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${paymentFormik.touched.lastName && paymentFormik.errors.lastName ? 'border-red-400' : 'border-gray-300'} `} placeholder="John"
                                    onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} value={paymentFormik.values.lastName}
                                />
                                {paymentFormik.touched.lastName && paymentFormik.errors.lastName && (
                                    <span className='pt-2 inline-block text-xs text-red'>{paymentFormik.errors.lastName}</span>
                                )}                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">Company name</label>
                                <input type="text" id="companyName" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${paymentFormik.touched.companyName && paymentFormik.errors.companyName ? 'border-red-400' : 'border-gray-300'} `} placeholder="John"
                                    onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} value={paymentFormik.values.companyName}
                                />
                                {paymentFormik.touched.companyName && paymentFormik.errors.companyName && (
                                    <span className='pt-2 inline-block text-xs text-red'>{paymentFormik.errors.companyName}</span>
                                )}                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-black">Email</label>
                                <input type="text" id="email" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${paymentFormik.touched.email && paymentFormik.errors.email ? 'border-red-400' : 'border-gray-300'} `} placeholder="John"
                                    onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} value={paymentFormik.values.email}
                                />
                                {paymentFormik.touched.email && paymentFormik.errors.email && (
                                    <span className='pt-2 inline-block text-xs text-red'>{paymentFormik.errors.email}</span>
                                )}                            </div>
                        </div>
                        <div className="mb-6 grid grid-cols-1">
                            <h5 className="block mb-2  font-semibold text-black">Which one of our services to you need support with?
                            </h5>
                            <div className="grid space-y-3 pt-2">
                                <div className="flex gap-2">
                                    <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                    <label className="block text-sm font-semibold text-black">Strategy Development</label>
                                </div>

                                <div className="flex gap-2">
                                    <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                    <label className="block text-sm font-semibold text-black">Consultancy Support</label>
                                </div>

                                <div className="flex gap-2">
                                    <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                    <label className="block text-sm font-semibold text-black">Marketing</label>
                                </div>

                                <div className="flex gap-2">
                                    <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                    <label className="block text-sm font-semibold text-black">New Product Development</label>
                                </div>

                                <div className="flex gap-2">
                                    <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                    <label className="block text-sm font-semibold text-black">Communications Management</label>
                                </div>


                                <div className="flex gap-2">
                                    <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                    <label className="block text-sm font-semibold text-black">Electronic Brand Management</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                    <label className="block text-sm font-semibold text-black">Social Media Marketing</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                    <label className="block text-sm font-semibold text-black">Executive Support & Training</label>
                                </div>

                            </div>
                            {/* <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required /> */}
                        </div>
                        <div className="mb-6 grid grid-cols-1">
                            <h5 className="block mb-2  font-semibold text-black">Which country are you currently located?
                            </h5>
                            <input type="text" id="country" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${paymentFormik.touched.country && paymentFormik.errors.country ? 'border-red-400' : 'border-gray-300'} `} placeholder="John"
                                onChange={paymentFormik.handleChange} onBlur={paymentFormik.handleBlur} value={paymentFormik.values.country}
                            />

                            {paymentFormik.touched.country && paymentFormik.errors.country && (
                                <span className='pt-2 inline-block text-xs text-red'>{paymentFormik.errors.country}</span>
                            )}

                        </div>
                        <div className=" grid grid-cols-1">
                            <h5 className="block mb-2  font-semibold text-black">Terms of Service
                            </h5>
                            <div className="flex gap-2">
                                <input type="checkbox" className="checked:bg-gray-300 w-5 h-5" />
                                <label className="block text-sm font-semibold text-black">I agree to terms of service of the vendors</label>
                            </div>
                            <h5 className="block my-5  font-semibold text-black">Please proceed with payment in order to get connected to your industry expert
                            </h5>


                        </div>
                        <button type="submit" className=" rounded hover:opacity-80  bg-yellow-secondary  mb-6  px-4 py-2 font-semibold">
                            <p>Submit Form</p></button>
                    </form>

                </section>

            </section>



        </>
    );
}

export default Payment