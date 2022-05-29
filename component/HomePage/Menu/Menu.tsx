import axios from 'axios';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import CartContext, { CartContextProps } from '../../../common/context/CartContext';
import { getAbsoluteImagePath } from '../../../helpers/image-utils';
import { MenuItem } from '../../../model/Menu';
import classes from './menu.module.css'

export const MENU_ITEMS_IMGS_DIRECTORY = 'images/menu-items'

interface MenuProps {
  menuItems: MenuItem[]
}

const Menu = ({ menuItems = [] }: MenuProps) => {
  const { cartItems, addItemToCart } = useContext(CartContext)

  console.log('cartItems', cartItems);


  return (
    <section className={classes.menu} id="menu">

      <h1 className="heading"> our <span>menu</span> </h1>

      <div className={classes.boxContainer}>
        {menuItems.map(item => {
          const imagePath = getAbsoluteImagePath(item.imagePath, MENU_ITEMS_IMGS_DIRECTORY);

          return (
            <div key={item._id} className={classes.box}>
              <Image height={100} width={100} src={imagePath} alt="coffee menu items" />
              <h3>{item.name}</h3>
              <div className={classes.price}>{`$${item.currentPrice}`} <span>{`$${item.originalPrice}`}</span></div>
              <a href="#menu" className="btn" onClick={() => {
                addItemToCart(item)
              }}>add to cart</a>
            </div>
          )
        }
        )}
      </div>

    </section>
  );
};




export default Menu;