import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import classes from "./nav-bar.module.css";
import CartContext from "../../../common/context/CartContext";
import { getAbsoluteImagePath } from "../../../helpers/image-utils";
import { MENU_ITEMS_IMGS_DIRECTORY } from "../Menu/Menu";

type Props = {};

const NavBar = (props: Props) => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);
  const [isCartItemActive, setIsCartItemActive] = useState(false);

  const { cartItems } = useContext(CartContext)


  useEffect(() => {
    window.onscroll = () => {
      setIsNavbarActive(false);
      setIsSearchFormActive(false);
      setIsCartItemActive(false);
    };
  }, []);

  const handleClickMenuButton = () => {
    setIsNavbarActive(!isNavbarActive);
    setIsSearchFormActive(false);
    setIsCartItemActive(false);
  };

  const handleClickSearchButton = () => {
    setIsSearchFormActive(!isSearchFormActive);
    setIsNavbarActive(false);
    setIsCartItemActive(false);
  };

  const handleClickCartButton = () => {
    setIsCartItemActive(!isCartItemActive);
    setIsNavbarActive(false);
    setIsSearchFormActive(false);
  };

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

      <nav className={`${classes.navbar} ${isNavbarActive ? "active" : ""}`}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </nav>

      <div className={classes.icons}>
        <div
          className="fas fa-search"
          id="search-btn"
          onClick={handleClickSearchButton}
        ></div>
        <div
          className="fas fa-shopping-cart"
          id="cart-btn"
          onClick={handleClickCartButton}
        ></div>
        <div
          className="fas fa-bars"
          id="menu-btn"
          onClick={handleClickMenuButton}
        ></div>
      </div>

      <div
        className={`${classes.searchForm} ${isSearchFormActive ? "active" : ""
          }`}
      >
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <div
        className={`${classes.cartItemsContainer} ${isCartItemActive ? "active" : ""
          }`}
      > {
          cartItems.map(
            (cartItem) => {

              const imagePath = getAbsoluteImagePath(cartItem.item.imagePath, MENU_ITEMS_IMGS_DIRECTORY);
              return (
                <div key={cartItem.item._id} className={classes.cartItem}>
                  <span className="fas fa-times"></span>
                  <Image
                    src={imagePath}
                    width={80}
                    height={70}
                    alt="cart item"
                  />
                  <div className={classes.content}>
                    <h3>{cartItem.item.name}</h3>
                    <div className="price">{`$${cartItem.item.currentPrice}/ ${cartItem.quantity}`}</div>
                  </div>
                </div>
              )
            }
          )
        }

        <a href="#" className="btn">
          checkout now
        </a>
      </div>
    </header>
  );
};

export default NavBar;