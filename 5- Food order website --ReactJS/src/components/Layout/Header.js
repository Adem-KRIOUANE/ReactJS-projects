import { Fragment } from "react";

import pic from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeadCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeadCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={pic} alt="Adem" />
      </div>
    </Fragment>
  );
};

export default Header;
