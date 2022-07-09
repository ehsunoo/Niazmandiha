import React from "react";
import styles from "./styles/Sidebar.module.css";

function Sidebar(props) {
  return <aside className={styles.container}>{props.children}</aside>;
}

export default Sidebar;
