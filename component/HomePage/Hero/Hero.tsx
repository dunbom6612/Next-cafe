import React from "react";
import classes from "./hero.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={classes.home} id="home">
      <div className={classes.content}>
        <h3>fresh coffee in the morning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          labore, sint cupiditate distinctio tempora reiciendis.
        </p>
        <a href="#" className={classes.btn}>
          get yours now
        </a>
      </div>
    </section>
  );
};

export default Hero;
