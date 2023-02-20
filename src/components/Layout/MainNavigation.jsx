import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import classes from './main-nav.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/" aria-label="Home" title="InkWell Chronicles Home">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts" aria-label="Posts">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
