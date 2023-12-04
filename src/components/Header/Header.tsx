import React from "react";
import styles from "./header.module.css";
type Header = {
  logo: string;
  isUserActive: boolean;
};

const Header: React.FC<Header> = ({ logo, isUserActive }) => {
  return (
    <div className={styles.wrapper}>
      <div>{logo}</div>
      <div> {isUserActive ? <>ACTIVE</> : <>NOT ACTIVE</>} </div>
    </div>
  );
};

export default Header;
