import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Welcome to my first website!</div>
    </header>
  );
}

export default MainNavigation;
