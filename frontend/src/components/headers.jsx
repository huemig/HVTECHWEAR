import React from "react";
import search from "../../src/assets/images/search.png";
import cart from "../../src/assets/images/cart.png";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <nav>
        <div class="left-nav">
          <h1>
            Hive <br />
            Techware
          </h1>
        </div>
        <div class="right-nav">
          <div class="search">
            <input type="search" placeholder="Search" />
            <img src={search} alt="search" />
          </div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
          <img src={cart} alt="cart" />
        </div>
      </nav>
    </header>
  );
};
export default Headers;
