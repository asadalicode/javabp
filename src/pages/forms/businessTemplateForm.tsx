import BackroundImage from "../../utils/backgroundImage";
import TopBg from "../../assets/capital/HeroBanner.svg";
import TopMobileBg from "../../assets/marketing/HeroBanner_mbl.png";
import IsMobile from "../../utils/detectDevice";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import PaymentModal from "../modals/paymentModal";


export interface initialSchemaValues {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    interestedServices: [],
    country: string,
    termsOfService: boolean
}

const FormSchema = Yup.object().shape({
    firstName: Yup.string().label('First Name').required(),
    lastName: Yup.string().label('Last Name').required(),
    phone: Yup.string(),
    email: Yup.string().email().label('Email').required(),
    interestedServices: Yup.array().label('one sss').min(1).label('one sss'),
    country: Yup.string().label('Country').required(),
    termsOfService: Yup
        .bool()
        .oneOf([true], 'You need to accept the terms and conditions'),
});


const initialValues: initialSchemaValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    interestedServices: [],
    country: '',
    termsOfService: false
}


const BusinessTemplateForm = () => {

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState();
    const handleSubmit = async (values: any) => {
        console.log(values)
        setFormData(values)
        setShowModal(true)
    }


    return (
        <>
            {/* <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">Investment, Partnerships & Templates</h1>
                    
                </div>
            </BackroundImage> */}


            <section className="px-16 py-16 sm:px-8 bg-gray">
                <h2 className="font-bold pt-16 text-center pb-6">Investment, Partnerships & Templates
                </h2>

                <section className="grid grid-cols-1">
                    <Formik
                        initialValues={
                            initialValues
                        }
                        validationSchema={FormSchema}
                        onSubmit={handleSubmit}
                    >{({ errors, handleChange, handleBlur, touched, values }) => (
                        <Form>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-black">First name</label>
                                    <Field type="text" id="firstName" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.firstName && errors.firstName ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.firstName}
                                    />
                                    {/* {errors.firstName && touched.firstName && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.firstName}</span>
                                    )} */}
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-black">Last name</label>
                                    <Field type="text" id="lastName" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.lastName && errors.lastName ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.lastName}
                                    />
                                    {/* {errors.lastName && touched.lastName && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.lastName}</span>
                                    )} */}

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-black">Phone</label>
                                    <Field type="text" id="phone" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.phone && errors.phone ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.phone}
                                    />
                                    {/* {errors.companyName && touched.companyName && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.companyName}</span>
                                    )} */}

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-black">Email</label>
                                    <Field type="email" id="email" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.email && errors.email ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.email}
                                    />
                                    {/* {errors.email && touched.email && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.email}</span>
                                    )} */}

                                </div>
                            </div>
                            <div className="mb-6 grid grid-cols-1">
                                <h5 className="block mb-2  font-semibold text-black">Which one of our services to you need support with?
                                </h5>
                                <div className="grid space-y-3 pt-2">
                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="List_of_1500_Private_Investors" className="checked:bg-yellow w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">List of 1500 Private Investors</label>
                                    </div>

                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="Business_Investment" className="checked:bg-gray-300 w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">Business Investment</label>
                                    </div>

                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="Venture_Capital_Partnership" className="checked:bg-gray-300 w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">Venture Capital Partnership</label>
                                    </div>

                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="Equity_Partnership" className="checked:bg-gray-300 w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">	Equity Partnership</label>
                                    </div>

                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="Business_Templates" className="checked:bg-gray-300 w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">Business Templates</label>
                                    </div>


                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="Financial_Templates" className="checked:bg-gray-300 w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">Financial Templates</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="Legal_Templates" className="checked:bg-gray-300 w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">Legal Templates</label>
                                    </div>


                                </div>

                            </div>
                            <div className="mb-6 grid grid-cols-1">
                                <h5 className="block mb-2  font-semibold text-black">Which country are you currently located?
                                </h5>
                                <Field type="text" id="country" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.country && errors.country ? 'border border-red' : ''} `} placeholder="Enter..."
                                    onChange={handleChange} onBlur={handleBlur} value={values.country}
                                />

                                {errors.country && touched.country && (
                                    <span className='pt-2 inline-block text-xs text-red'>{errors.country}</span>
                                )}

                            </div>
                            <div className=" grid grid-cols-1">
                                <h5 className="block mb-2  font-semibold text-black">Terms of Service
                                </h5>
                                <div className="flex gap-2 items-end">

                                    <label htmlFor="termsOfService" className="block text-sm font-semibold text-black">
                                        I agree to terms of service of the vendors</label>
                                    <Field type="checkbox" name="termsOfService" className={`checked:bg-yellow w-5 h-5`} />
                                    {errors.termsOfService && touched.termsOfService && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.termsOfService}</span>
                                    )}
                                </div>
                                <h5 className="block my-5  font-semibold text-black">Please proceed with payment in order to get connected to your industry expert
                                </h5>


                            </div>
                            <button type="submit" className=" rounded hover:opacity-80  bg-yellow-secondary  mb-6  px-4 py-2 font-semibold">
                                <p>Submit Form</p></button>
                        </Form>
                    )}
                    </Formik>

                </section>

            </section>
            {showModal ? (
                <PaymentModal setModal={setShowModal} to={'BusinessTemplateEmail'} formData={formData} />
            ) : null
            }


        </>
    );
}

export default BusinessTemplateForm