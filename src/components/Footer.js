import React from "react";
import styles from "./styles/Footer.module.css";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["right-col"]}></div>
      <div className={styles["left-col"]}>
        <p className={styles.copyright}>Made with ❤ by Ehsan Nouri 
        ||  Created just for training  ||  All rights reserved © 2022.</p>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
