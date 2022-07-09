import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCar, faMobile, faLightbulb, faBrush, faDice, faUserFriends, faCog, faBriefcase, faTshirt } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/HomeSidebar.module.css";

function HomeSidebar() {
  return (
    <>
      <section className={styles.categories}>
        <h4 className={styles.title}>دسته‌ها</h4>
        <ul>
          <li>
            <FontAwesomeIcon icon={faBuilding} /> املاک
          </li>
          <li>
            <FontAwesomeIcon icon={faCar} /> وسایل نقلیه
          </li>
          <li>
            <FontAwesomeIcon icon={faMobile} /> کالای دیجیتال
          </li>
          <li>
            <FontAwesomeIcon icon={faLightbulb} /> خانه و آشپزخانه
          </li>
          <li>
            <FontAwesomeIcon icon={faBrush} /> خدمات
          </li>
          <li>
            <FontAwesomeIcon icon={faTshirt} /> وسایل شخصی
          </li>
          <li>
            <FontAwesomeIcon icon={faDice} /> سرگرمی و فراغت
          </li>
          <li>
            <FontAwesomeIcon icon={faUserFriends} /> اجتماعی
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} /> تجهیزات و صنعتی
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} /> استخدام و کاریابی
          </li>
        </ul>
      </section>
      <section className={styles.filters}></section>
    </>
  );
}

export default HomeSidebar;
