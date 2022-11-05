import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaypalCheckoutButton = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleApprove = (oderID) => {
    setPaidFor(true);
    navigate("/userpage");
    // <Link to="/userpage"></Link>;
  };

  if (paidFor) {
    // alert("Thank you for payment!")
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalButtons
      onClick={(data, actions) => {}}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              decription: product.decription,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture().then();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onCancel={() => {}}
      onError={(err) => {
        setError(err);
        console.error("PayPal Process Error", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
