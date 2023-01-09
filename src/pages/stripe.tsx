import { loadStripe } from '@stripe/stripe-js';
import { ReactComponent as Stripe } from '../assets/icons/stripe.svg';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { backendCall } from '../utils/backendCall';
import { useNavigate } from "react-router-dom";





const CheckoutForm = ({ to, formData }: any) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }
        const cardElement: any = elements.getElement("card");

        stripe?.createToken(cardElement).then((res) => {
            console.log(res)
            createStripeCheckout(res.token)

        }).catch((error) => {
            console.log(error)
        });
    };





    let navigate = useNavigate();





    const createStripeCheckout = (token: any) => {
        const data: any = {
            url: '/createCharge',
            method: 'POST',
            data: token,
            isNavigate: false
        }
        backendCall(data).then(async res => {
            if (res) {
                sendEmail(to, formData)
            }
        })
    }

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
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    iconStyle: 'solid',
                    style: {
                        base: {
                            fontSize: '18px',

                        }

                    },
                }}

            />
            <div className="flex items-center justify-start pt-3  rounded-b">
                <button type="submit" disabled={!stripe || !elements} className="position-relative rounded hover:opacity-80   bg-yellow-secondary  w-1/2 sm:w-full    font-semibold">

                    <span className='inline-flex font-bold items-center  gap-2'>  <Stripe className="w-12 position-absoulute" /> <p>Pay $40</p></span>
                </button>
            </div>

        </form >
    );
};
const stripePromise = loadStripe(`${process.env.REACT_APP_Stripe_Client_ID}`);

const StripePay = ({ to, formData }: any) => {

    return (
        <>
            <Elements stripe={stripePromise}>
                <CheckoutForm to={to} formData={formData} />
            </Elements>
        </>
    )
}
export default StripePay;



