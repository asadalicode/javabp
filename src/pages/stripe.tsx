import { loadStripe } from '@stripe/stripe-js';
import { ReactComponent as Stripe } from '../assets/icons/stripe.svg';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';




const CheckoutForm = () => {
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
        }).catch((error) => {
            console.log(error)
        });
    };

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

const StripePay = () => {
    return (
        <>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </>
    )
}
export default StripePay;