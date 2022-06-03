import React from 'react';
import classes from './footer.module.css'

const Footer = () => {
  return (
    <section className={classes.footer}>

      <div className={classes.share}>
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-pinterest"></a>
      </div>

      {/* <div className={classes.links}>
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">menu</a>
        <a href="#">products</a>
        <a href="#">review</a>
        <a href="#">contact</a>
        <a href="#">blogs</a>
      </div> */}

      <div className={classes.credit}>Design by <span>mr. web designer and re-build it in Nextjs by Huy</span> | all rights reserved</div>

    </section>
  );
};

export default Footer;