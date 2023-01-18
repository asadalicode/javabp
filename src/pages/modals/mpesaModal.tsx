import { useEffect, useState } from "react";
import { backendCall } from "../../utils/backendCall";
import PayPal from "../payPal";
import StripePay from "../stripe";

const MPESAPaymentModal = ({ setModal }: any) => {
    const payViaMpesa = () => {
        const data: any = {
            url: 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            method: 'GET',
            isNavigate: false
        }
        backendCall(data).then(async res => {
            if (res) {
                console.log(res)
            }
        })
    }

    payViaMpesa()

    return (
        <>

            <div
                className="sm:px-8 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-4/6 sm:w-full my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h4 className="font-semibold">
                                Pay via Mpesa
                            </h4>
                            <button
                                className="bg-transparent p-1 ml-auto  border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-50 hover:opacity-100  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 grid grid-cols-1">
                            <h5 className="text-right font-bold">TOTAL: $40.00</h5>


                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setModal(false)}
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
    )
}

export default MPESAPaymentModal