import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [isTop, setIsTop] = useState(true);

  //For scroll top change color effect
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 200) setIsTop(false);
      else setIsTop(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${!isTop && classes.middle}`}>
      <div className={classes.logo}>Welcome to my first website!</div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
