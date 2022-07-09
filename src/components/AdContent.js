import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/AdContent.module.css";
import C1 from "../assets/cards/1.jpg";
import { getAd } from "../redux/reducers/adSlice";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

function AdContent() {
  const params = useParams();
  const dispatch = useDispatch();

  const ad = useSelector((state) => state.ad.ad);

  useEffect(() => {
    dispatch(getAd(params.id));
  }, [params.i]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{ad.title}</h3>
        </div>
        <div className={styles.time}>
          <p>دقایقی پیش در {ad.location}</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.info}>اطلاعات تماس</button>
          <button className={styles.chat}>چت</button>
        </div>
        <div className={styles.details}>
          <div className={styles.key}>وضعیت:</div>
          <div className={styles.value}>نو</div>
          <div className={styles.key}>قیمت:</div>
          <div className={styles.value}>{ad.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</div>
          <div className={styles.key}>دارای ضمانت:</div>
          <div className={styles.value}>دارد</div>
        </div>
      </div>
      <div className={styles.image}>
        <FontAwesomeIcon icon={faCameraRetro} size="5x"/>
      </div>
    </div>
  );
}

export default AdContent;
