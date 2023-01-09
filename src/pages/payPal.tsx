import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { backendCall } from "../utils/backendCall";
import { redirect } from "react-router";
import { useNavigate } from "react-router-dom";


const PayPalPayment = ({ to, formData }: any) => {
    let navigate = useNavigate();

    // const payPalClientId: any = process.env.REACT_APP_PayPal_Client_ID
    const initialOptions: any = {
        "client-id": process.env.REACT_APP_PayPal_Client_ID,
        currency: "USD",
        intent: "capture"
    };

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "40",
                    },
                },
            ],
        })
    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then((orderData: any) => {
            // console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            const transaction = orderData.purchase_units[0].payments.captures[0];
            // console.log(`Transaction ${transaction}`);
            // console.log('formData', formData)
            sendEmail(to, formData)
        });
    };

    const sendEmail = (to: string, formData: any) => {
        switch (to) {
            case 'CitizenshipTemplateEmail':
                sendCitizenshipTemplateEmail(formData);
                break

            case 'BusinessConsultancyTemplateEmail':
                sendBusinessConsultancyTemplateEmail(formData);
                break
            case 'BusinessTemplateEmail':
                sendBusinessTemplateEmail(formData);
                break

            case 'CompanyTemplateEmail':
                sendCompanyTemplateEmail(formData);
                break


            case 'default':
                return 0
        }
    }

    const sendCitizenshipTemplateEmail = (formData: any) => {
        const data: any = {
            url: '/sendCitizenshipTemplate',
            method: 'POST',
            data: formData,
            isNavigate: false
        }
        backendCall(data).then(async res => {
            if (res) {
                console.log(res)

                return navigate("/success");
            }
        })
    }

    const sendBusinessConsultancyTemplateEmail = (formData: any) => {
        const data: any = {
            url: '/sendCapitalInvestmentTemplate',
            method: 'POST',
            data: formData,
            isNavigate: false
        }
        backendCall(data).then(async res => {
            if (res) {
                return navigate("/success");
            }
        })
    }

    const sendBusinessTemplateEmail = (formData: any) => {
        const data: any = {
            url: '/sendBusinessTemplate',
            method: 'POST',
            data: formData,
            isNavigate: false
        }
        backendCall(data).then(async res => {
            if (res) {
                return navigate("/success");
            }
        })
    }

    const sendCompanyTemplateEmail = (formData: any) => {
        const data: any = {
            url: '/sendCompanyTemplate',
            method: 'POST',
            data: formData,
            isNavigate: false
        }
        backendCall(data).then(async res => {
            if (res) {
                return navigate("/success");
            }
        })
    }





    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons style={{ layout: "horizontal" }}
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </PayPalScriptProvider>
    );
}

export default PayPalPayment