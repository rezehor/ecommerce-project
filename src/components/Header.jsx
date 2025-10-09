import { NavLink } from "react-router";
import "./Header.css";
import cartIconImg from "../assets/images/icons/cart-icon.png";
import SearchIconImg from "../assets/images/icons/search-icon.png";
import logoWhiteImg from "../assets/images/logo-white.png";
import mobileLogoWhiteImg from "../assets/images/mobile-logo-white.png";

export function Header({ cart }) {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={logoWhiteImg} />
          <img className="mobile-logo" src={mobileLogoWhiteImg} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={SearchIconImg} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIconImg} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
