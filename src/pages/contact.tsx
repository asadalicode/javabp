import BackroundImage from "../utils/backgroundImage";
import TopBg from "../assets/capital/HeroBanner.svg";
import TopMobileBg from "../assets/marketing/HeroBanner_mbl.png";



import IsMobile from "../utils/detectDevice";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { backendCall } from "../utils/backendCall";
import { useNavigate } from "react-router";


export interface initialSchemaValues {
    firstName: string,
    lastName: string,
    email: string,
    comment: string
}

const FormSchema = Yup.object().shape({
    firstName: Yup.string().label('First Name').required(),
    lastName: Yup.string().label('Last Name').required(),
    email: Yup.string().email().label('Email').required(),
    comment: Yup.string().label('Message').required(),
});


const initialValues: initialSchemaValues = {
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
}


const Contact = () => {
    let navigate = useNavigate();
    // const [formData, setFormData] = useState();
    const handleSubmit = async (values: any) => {
        // console.log(values)
        // setFormData(values)
        sendContactEmail(values)
    }

    const sendContactEmail = (formData: any) => {
        const data: any = {
            url: '/senContactEmail',
            method: 'POST',
            data: formData,
            isNavigate: false
        }
        backendCall(data).then(async res => {
            if (res) {
                return navigate("/confirmation");
            }
        })
    }



    return (
        <>
            <section className="px-16 py-16 sm:px-8 bg-gray">
                <h2 className="font-bold pt-16 text-center pb-6">Need to get in touch? Contact us!
                </h2>

                <section className="grid grid-cols-1 pt-6">
                    <Formik
                        initialValues={
                            initialValues
                        }
                        validationSchema={FormSchema}
                        onSubmit={handleSubmit}
                    >{({ errors, handleChange, handleBlur, touched, values }) => (
                        <Form>
                            <div className="grid gap-6 mb-6 md:grid-cols-3">
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
                            </div>
                            <div className="mb-6 grid grid-cols-1">
                                <label className="block mb-2 text-sm font-semibold text-black">Comment</label>
                                <div>
                                    <textarea id="comment" rows={5} className={`focus:outline-yellow-secondary  text-sm rounded-lg block w-full p-3 ${touched.comment && errors.comment ? 'border border-red' : ''} `} placeholder="Enter..."
                                        onChange={handleChange} onBlur={handleBlur} value={values.comment}
                                    />
                                </div>
                            </div>

                            <button type="submit" className=" rounded hover:opacity-80  bg-yellow-secondary  mb-6  px-4 py-2 font-semibold">
                                <p>Submit Form</p></button>
                        </Form>
                    )}
                    </Formik>

                </section>

            </section>



        </>
    );
}

export default Contact