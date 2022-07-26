import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
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
