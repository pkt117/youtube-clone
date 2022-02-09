import React, { useRef } from "react";
import style from "./header.module.css";

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
    <header className={style.header}>
      <button className={style.logo} onClick={pageReload}>
        <i className="fab fa-youtube"></i>
        <span>Youtube</span>
      </button>

      <form className={style.form}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search.."
          className={style.input}
        />
        <button className={style.search} onClick={onSubmit}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
