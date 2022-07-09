import React from "react";
import styles from "./styles/Dropdown.module.css";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <Link to="/" className={styles.dropbtn}>دسته‌ها</Link>
      <div className={styles.dropdownContent}>
        <Link to="/">املاک</Link>
        <Link to="/">وسایل نقلیه</Link>
        <Link to="/">کالای دیجیتال</Link>
      </div>
    </div>
  );
}

export default Dropdown;
