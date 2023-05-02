import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eligendi consequuntur explicabo maiores ullam, voluptatem odio
            doloribus eaque. Laborum nostrum fuga itaque atque quam ipsum nihil
            suscipit, facere unde repellendus?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eligendi consequuntur explicabo maiores ullam, voluptatem odio
            doloribus eaque. Laborum nostrum fuga itaque atque quam ipsum nihil
            suscipit, facere unde repellendus?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Lheynel Store</div>
          <div className="copyright">© Copyright 2023. All Rights Reserved</div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
