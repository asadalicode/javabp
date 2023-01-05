import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const PayPalPayment = () => {
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
        console.log("data:", data)
        console.log("actions:", actions)
        return actions.order.capture();
    };

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