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
    email: string,
    nationality: string,
    familyMembers: string,
    considering_citizenship: string,
    interestedServices: [],
    termsOfService: boolean
}

const FormSchema = Yup.object().shape({
    firstName: Yup.string().label('First Name').required(),
    lastName: Yup.string().label('Last Name').required(),
    email: Yup.string().email().label('Email').required(),
    nationality: Yup.string().label('Nationality').required(),
    familyMembers: Yup.string().label('family Members').required(),
    considering_citizenship: Yup.string().label('Citizenship/Residency').required(),
    interestedServices: Yup.array(),
    termsOfService: Yup
        .bool()
        .oneOf([true], 'You need to accept the terms and conditions'),
});


const initialValues: initialSchemaValues = {
    firstName: '',
    lastName: '',
    email: '',
    nationality: '',
    familyMembers: '',
    considering_citizenship: '',
    interestedServices: [],
    termsOfService: false
}


const CitizenshipTemplateForm = () => {

    const [showModal, setShowModal] = useState(false);
    const handleSubmit = async (values: any) => {
        console.log(values)
        setShowModal(true)
    }


    return (
        <>
            <BackroundImage url={IsMobile() ? TopMobileBg : TopBg} classes='bg-contain'>
                <div className="bg-center-text text-center space-y-6">
                    <h1 className=" text-white  font-bold ">Citizenship, Residency & 2nd Passport</h1>
                    <button className="rounded bg-yellow-secondary w-40 h-12 hover:bg-yellow ">
                        <p className="text-black-secondary"> Learn More</p></button>
                </div>
            </BackroundImage>


            <section className="px-16 sm:px-8 bg-gray">
                <h2 className="font-bold pt-16 text-center pb-6">Citizenship, Residency & 2nd Passport
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
                                    <label className="block mb-2 text-sm font-semibold text-black">Email</label>
                                    <Field type="email" id="email" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.email && errors.email ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.email}
                                    />
                                    {/* {errors.email && touched.email && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.email}</span>
                                    )} */}

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-black">What Country is Your Nationality?</label>
                                    <Field type="text" id="nationality" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.nationality && errors.nationality ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.nationality}
                                    />
                                    {/* {errors.email && touched.email && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.email}</span>
                                    )} */}

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-black">How many family members you applying for?</label>
                                    <Field type="text" id="familyMembers" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.familyMembers && errors.familyMembers ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.familyMembers}
                                    />
                                    {/* {errors.email && touched.email && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.email}</span>
                                    )} */}

                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-black">Country You Considering Citizenship/Residency or Business Investment?</label>
                                    <Field type="text" id="considering_citizenship" className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.considering_citizenship && errors.considering_citizenship ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.considering_citizenship}
                                    />
                                    {/* {errors.email && touched.email && (
                                        <span className='pt-2 inline-block text-xs text-red'>{errors.email}</span>
                                    )} */}

                                </div>
                            </div>
                            <div className="mb-6 grid grid-cols-1">
                                <h5 className="block mb-2  font-semibold text-black">Are you interested in Investment in Property?
                                </h5>
                                <div className="grid space-y-3 pt-2">
                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="For_Own_Use" className="checked:bg-yellow w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">For Own Use</label>
                                    </div>

                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="For_Rental_Purposes" className="checked:bg-gray-300 w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">For Rental Purposes</label>
                                    </div>

                                    <div className="flex gap-2">
                                        <Field type="checkbox" name="interestedServices" value="Purchase_Land_for_Business_Development" className="checked:bg-gray-300 w-5 h-5" />
                                        <label className="block text-sm font-semibold text-black">Purchase Land for Business Development</label>
                                    </div>



                                </div>

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
                <PaymentModal setModal={setShowModal} />
            ) : null
            }


        </>
    );
}

export default CitizenshipTemplateForm