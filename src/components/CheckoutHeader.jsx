import "./CheckoutHeader.css";
import { Link } from "react-router";
import checkoutLockIconImg from "../assets/images/icons/checkout-lock-icon.png";
import logoImg from "../assets/images/logo.png";
import mobileLogoImg from "../assets/images/mobile-logo.png";

export function CheckoutHeader({ cart }) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  })
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={logoImg} />
              <img className="mobile-logo" src={mobileLogoImg} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              {totalQuantity} items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src={checkoutLockIconImg} />
          </div>
        </div>
      </div>
    </>
  );
}
