import React from "react";
import styles from "./style.module.css";

const CommingSoon = () => {
  return (
    <div className={styles.commingSoonContainer}>
      {" "}
      <div className={styles.wrapper}>
        <img src="/images/cummingSoon.png" alt="#" className={styles.images} />
      </div>
    </div>
  );
};

export default CommingSoon;
