// import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Price() {
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div>
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
                <span class="pricing-price">$0.01</span>
                <a href="#/" class="pricing-button is-featured">
                  Pay
                </a>
                <div className="paypal-button-container">
                  <PayPalButtons />
                </div>
              </div>

              <div class="pricing-plan">
                <img src="images/doubledollar.png" alt="" class="pricing-img" />
                <h2 class="pricing-header">Costly-LongTerm</h2>
                <ul class="pricing-features">
                  <li class="pricing-features-item">Costly</li>
                  <li class="pricing-features-item">6 months</li>
                </ul>
                <span class="pricing-price">$0.019</span>
                <a href="#/" class="pricing-button is-featured">
                  Pay
                </a>
                <div className="paypal-button-container">
                  <PayPalButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

export default Price;
