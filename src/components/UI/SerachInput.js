import React from "react";
import styles from "./styles/SearchInput.module.css";

function SearachInput() {
  return (
    <div className={styles.container}>
      <label htmlFor="search">
        <input id="search" type="text" placeholder="جستجو در همه‌ی آگهی‌ها..."></input>
      </label>
    </div>
  );
}

export default SearachInput;
