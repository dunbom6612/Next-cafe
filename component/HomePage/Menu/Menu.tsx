import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getAbsoluteImagePath } from '../../../helpers/image-utils';
import { MenuItem } from '../../../model/Menu';
import classes from './menu.module.css'

const MENU_ITEMS_IMGS_DIRECTORY = 'images/menu-items'

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  console.log('menuItems', menuItems);


  useEffect(() => {
    fetch('/api/menu')
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.menuItems);
      });
  }, []);

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
              <a href="#" className="btn">add to cart</a>
            </div>

          )
        }
        )}
      </div>

    </section>
  );
};


export default Menu;