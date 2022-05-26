import Image from 'next/image';
import React from 'react';
import classes from './blogs.module.css'

const Blogs = () => {
  return (
    <section className={classes.blogs} id="blogs">

      <h1 className="heading"> our <span>blogs</span> </h1>

      <div className={classes.boxContainer}>

        <div className={classes.box}>
          <div className={classes.image}>
            <Image width={536} height={250} src="/asset/images/blog-1.jpeg" alt="" />
          </div>
          <div className={classes.content}>
            <a href="#" className={classes.title}>tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.image}>
            <Image width={536} height={250} src="/asset/images/blog-2.jpeg" alt="" />
          </div>
          <div className={classes.content}>
            <a href="#" className={classes.title}>tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.image}>
            <Image width={536} height={250} src="/asset/images/blog-3.jpeg" alt="" />
          </div>
          <div className={classes.content}>
            <a href="#" className={classes.title}>tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" className="btn">read more</a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Blogs;