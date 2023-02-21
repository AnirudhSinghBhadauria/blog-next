import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/hero-background.jpg" alt="hero-photo-section" width="300" height="300" />
      </div>
      <h1>Inkwell Chronicles.</h1>
      <p>
        Inkwell Chronicles offers insightful articles and tips about the latest
        technologies and gadgets.
      </p>
    </section>
  );
};

export default Hero;
