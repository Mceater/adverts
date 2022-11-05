import "../styles/price.css";

function PriceNoButton() {
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
              {/* <a href="#/" class="pricing-button is-featured">
                  Pay
                </a> */}
            </div>

            <div class="pricing-plan">
              <img src="images/doubledollar.png" alt="" class="pricing-img" />
              <h2 class="pricing-header">Costly-LongTerm</h2>
              <ul class="pricing-features">
                <li class="pricing-features-item">Costly</li>
                <li class="pricing-features-item">6 months</li>
              </ul>
              <span class="pricing-price">$10.00</span>
              {/* <a href="#/" class="pricing-button is-featured">
                  Pay
                </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceNoButton;
