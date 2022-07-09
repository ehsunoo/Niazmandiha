import React from "react";
import CreateAd from "./CreateAd";
import styles from "./styles/Modal.module.css";

function Modal({ show, close, setShowModal }) {
  const showHideClassName = show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={styles["modal-main"]}>
        <h1>ثبت آگهی جدید</h1>
        <CreateAd setShowModal={setShowModal} close={close} />
      </section>
    </div>
  );
}

export default Modal;
