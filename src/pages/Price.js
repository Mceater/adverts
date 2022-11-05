// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../styles/price.css";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";

function Price() {
  const product3month = {
    description: "3 Months",
    price: 5,
  };

  const product6month = {
    description: "6 Months",
    price: 10,
  };

  return (
    <div className="home">
      <div class="background1">
        <div class="container1">
          <div class="panel pricing-table">
            <div class="pricing-plan">
              <img src="images/dollar.png" alt="" class="pricing-img" />
              <h2 class="pricing-header">Cheap-ShortTerm</h2>
              <ul class="pricing-features">
                <li class="pricing-features-item">Affordable</li>
                <li class="pricing-features-item">3 months</li>
              </ul>
              <span class="pricing-price">$5.00</span>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={product3month} />
              </div>
            </div>

            <div class="pricing-plan">
              <img src="images/doubledollar.png" alt="" class="pricing-img" />
              <h2 class="pricing-header">Costly-LongTerm</h2>
              <ul class="pricing-features">
                <li class="pricing-features-item">Costly</li>
                <li class="pricing-features-item">6 months</li>
              </ul>
              <span class="pricing-price">$10.00</span>
              <div className="paypal-button-container">
                <PaypalCheckoutButton product={product6month} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
