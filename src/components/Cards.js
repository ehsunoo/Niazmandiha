import React from "react";
import { useSelector } from "react-redux";

import styles from "./styles/Cards.module.css";
import Card from "./Card";

function Cards() {
  const ads = useSelector((state) => state.ad.ads);
  const loading = useSelector((state) => state.ad.loading);

  return <div className={styles.container}>{!loading ? ads.map((ad) => <Card key={ad.id} content={ad} />) : "...Loading | Be sure that your VPN is connected"}</div>;
}

export default Cards;
