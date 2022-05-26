import Image from 'next/image';
import React from 'react';
import classes from './menu.module.css'

const Menu = () => {
  return (
    <section className={classes.menu} id="menu">

      <h1 className="heading"> our <span>menu</span> </h1>

      <div className={classes.boxContainer}>

        <div className={classes.box}>
          <Image height={100} width={100} src="/asset/images/menu-1.png" alt="" />
          <h3>tasty and healty</h3>
          <div className={classes.price}>$15.99 <span>20.99</span></div>
          <a href="#" className="btn">add to cart</a>
        </div>

        <div className={classes.box}>
          <Image height={100} width={100} src="/asset/images/menu-2.png" alt="" />
          <h3>tasty and healty</h3>
          <div className={classes.price}>$15.99 <span>20.99</span></div>
          <a href="#" className="btn">add to cart</a>
        </div>

        <div className={classes.box}>
          <Image height={100} width={100} src="/asset/images/menu-3.png" alt="" />
          <h3>tasty and healty</h3>
          <div className={classes.price}>$15.99 <span>20.99</span></div>
          <a href="#" className="btn">add to cart</a>
        </div>

        <div className={classes.box}>
          <Image height={100} width={100} src="/asset/images/menu-4.png" alt="" />
          <h3>tasty and healty</h3>
          <div className={classes.price}>$15.99 <span>20.99</span></div>
          <a href="#" className="btn">add to cart</a>
        </div>

        <div className={classes.box}>
          <Image height={100} width={100} src="/asset/images/menu-5.png" alt="" />
          <h3>tasty and healty</h3>
          <div className={classes.price}>$15.99 <span>20.99</span></div>
          <a href="#" className="btn">add to cart</a>
        </div>

        <div className={classes.box}>
          <Image height={100} width={100} src="/asset/images/menu-6.png" alt="" />
          <h3>tasty and healty</h3>
          <div className={classes.price}>$15.99 <span>20.99</span></div>
          <a href="#" className="btn">add to cart</a>
        </div>

      </div>

    </section>
  );
};

export default Menu;