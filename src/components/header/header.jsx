import React, { useRef } from "react";
import styles from "./header.module.css";

const Header = (props) => {
  const inputRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value === "") return;
    props.onSearch(inputRef.current.value);
    inputRef.current.value = "";
  };

  const pageReload = () => {
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={pageReload}>
        <i className={`fab fa-youtube {styles.logoIcon}`}></i>
        <span>Youtube</span>
      </button>

      <form className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search.."
          className={styles.input}
        />
        <button className={styles.search} onClick={onSubmit}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
