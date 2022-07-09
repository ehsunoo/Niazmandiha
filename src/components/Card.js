import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/Card.module.css";

import C1 from "../assets/cards/1.jpg";

function Card({ content }) {
  return (
    <Link to={`/ads/${content.id}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>{content.title}</div>
          <div className={styles.price}>{content.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</div>
          <div className={styles.time}>دقایقی پیش در {content.location}</div>
        </div>
        <div className={styles.thumbnail}>
          {/* <img src={C1} /> */}
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faCameraRetro} size="3x" color="gray" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
