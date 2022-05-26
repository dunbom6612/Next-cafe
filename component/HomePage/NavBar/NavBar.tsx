import React from "react";
import Image from "next/image";
import classes from "./nav-bar.module.css";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className={classes.header}>
      <a href="#" className="logo">
        <Image
          src="/asset/images/logo.png"
          alt="Main Logo"
          width={75}
          height={60}
        />
      </a>

      <nav className={classes.navbar}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </nav>

      <div className={classes.icons}>
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
      </div>

      <div className={classes.searchForm}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <div className={classes.cartItemsContainer}>
        <div className={classes.cartItem}>
          <span className="fas fa-times"></span>
          <Image src="/asset/images/cart-item-1.png" layout="fill" alt="" />
          <div className={classes.content}>
            <h3>cart item 01</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <div className={classes.cartItem}>
          <span className="fas fa-times"></span>
          <Image src="/asset/images/cart-item-2.png" layout="fill" alt="" />
          <div className={classes.content}>
            <h3>cart item 02</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <div className={classes.cartItem}>
          <span className="fas fa-times"></span>
          <Image src="/asset/images/cart-item-3.png" layout="fill" alt="" />
          <div className={classes.content}>
            <h3>cart item 03</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <div className={classes.cartItem}>
          <span className="fas fa-times"></span>
          <Image src="/asset/images/cart-item-4.png" layout="fill" alt="" />
          <div className={classes.content}>
            <h3>cart item 04</h3>
            <div className="price">$15.99/-</div>
          </div>
        </div>
        <a href="#" className="btn">
          checkout now
        </a>
      </div>
    </header>
  );
};

export default NavBar;
