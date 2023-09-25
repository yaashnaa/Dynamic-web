import React, { useState } from "react";
import styles from "./RecipeCard.module.css";
import { ReactComponent as Heart } from "@material-design-icons/svg/filled/favorite.svg";
import { ReactComponent as Add } from "@material-design-icons/svg/filled/add.svg";
import {ReactComponent as Minus} from '@material-design-icons/svg/filled/remove.svg'
function UserRating() {
  const [count, setCount] = useState(0);
  const handlePlusClick = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className={styles.ratings_wrapper}>
      <button onClick={handleMinusClick}> <Minus /> </button>
      {[...Array(count)].map((heart, i) => {
        return (
          <span className={styles.heart} key={i}>
            {" "}
            <Heart/>{" "}
          </span>
        );
      })}
      <button onClick={handlePlusClick}>
        <Add/>
      </button>
    </div>
  );
}

export default UserRating;
