import Image from 'next/image';
import React from 'react';
import classes from './products.module.css'

const Products = () => {
  return (
    <section className={classes.products} id="products">

      <h1 className="heading"> our <span>products</span> </h1>

      <div className={classes.boxContainer}>

        <div className={classes.box}>
          <div className={classes.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={classes.image}>
            <Image height={250} width={160} src="/asset/images/product-1.png" alt="" />
          </div>
          <div className={classes.content}>
            <h3>fresh coffee</h3>
            <div className={classes.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className={classes.price}>$15.99 <span>$20.99</span></div>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={classes.image}>
            <Image height={250} width={160} src="/asset/images/product-2.png" alt="" />
          </div>
          <div className={classes.content}>
            <h3>fresh coffee</h3>
            <div className={classes.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className={classes.price}>$15.99 <span>$20.99</span></div>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={classes.image}>
            <Image height={250} width={160} src="/asset/images/product-3.png" alt="" />
          </div>
          <div className={classes.content}>
            <h3>fresh coffee</h3>
            <div className={classes.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className={classes.price}>$15.99 <span>$20.99</span></div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Products;