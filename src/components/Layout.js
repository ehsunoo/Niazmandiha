import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

import styles from "./styles/Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
