import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";
import Logo from "../assets/logo.png";
import SerachInput from "./UI/SerachInput";
import Modal from "../components/Modal";
import Dropdown from "./UI/Dropdown";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <header className={styles.container}>
      <div className={styles["right-col"]}>
        <div className={`${styles.logo} ${styles.cc}`}>
          <Link to="/"><img src={Logo} /></Link>
        </div>
        <Link to="/" className={`${styles.category}`}>
          <Dropdown />
        </Link>
        <div className={`${styles.searchbar}  ${styles.cc}`}>
          <SerachInput />
        </div>
      </div>
      <div className={styles["left-col"]}>
        <Link to="/" className={`${styles.profile}  ${styles.cc}`}>
          پروفایل من
        </Link>
        <Link to="/" className={`${styles.chat}     ${styles.cc}`}>
          چت
        </Link>
        <Link to="/" className={`${styles.support}  ${styles.cc}`}>
          پشتیبانی
        </Link>
        <div className={`${styles.register} ${styles.cc}`}>
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            ثبت آگهی
          </button>
          <Modal show={showModal} setShowModal={setShowModal} close={handleClose}></Modal>
        </div>
      </div>
    </header>
  );
}

export default Header;
