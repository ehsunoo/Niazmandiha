import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addAd } from "../redux/reducers/adSlice";
import styles from "./styles/CreateAd.module.css";

function CreateAd({ close, setShowModal }) {
  const dispatch = useDispatch();

  const formRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const locationRef = useRef();

  // Dispatch addAd action to send form's data to DB.
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addAd({
        id: uuid(),
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value.replace(/\,/g, ""), // Remove commas from price string
        location: locationRef.current.value,
      })
    );
    // Close modal
    setShowModal(false);

    // Clear inputs
    formRef.current.reset();
  };

  // Comma sepration while typing price
  const priceChangeHandler = (e) => {
    e.target.value = e.target.value
      .replace(/\,/g, "") // Remove comma
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Seprate
  };

  return (
    <form ref={formRef} className={styles.container}>
      <span>
        <label htmlFor="title">عنوان: </label>
        <input ref={titleRef} name="title" type="text" />
      </span>
      <span>
        <label htmlFor="description">توضیحات: </label>
        <input ref={descriptionRef} name="description" type="text" />
      </span>
      <span>
        <label htmlFor="price">قیمت: </label>
        <input ref={priceRef} name="price" type="price" onChange={priceChangeHandler} />
      </span>
      <span>
        <label htmlFor="location">مکان: </label>
        <input ref={locationRef} name="location" type="text" />
      </span>
      <div className={styles.btnContainer}>
        <button type="button" onClick={submitHandler}>
          ثبت
        </button>
        <button type="button" onClick={close} style={{background: "gray"}}>
          انصراف
        </button>
      </div>
    </form>
  );
}

export default CreateAd;
