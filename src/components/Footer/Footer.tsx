import React from "react";
import styles from "./footer.module.css";

type FooterType = {
  copyRight: string;
};

const Footer: React.FC<FooterType> = ({ copyRight }) => {
  return (
    <div className={styles.wrapper}>
      <>&#169; {copyRight} </>
    </div>
  );
};

export default Footer;
