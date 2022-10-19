import React from "react";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

function OrderNow() {
  return (
    <div>
      <h3 className={styles.footerMenu__title}>Order Now</h3>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faUser} />
        GC Enterprises
      </p>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faPhone} />
        +977-9876543210
      </p>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faLocationPin} /> Butwal
        11, Kalikanagar
      </p>
      <p>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{" "}
        info@gcstore.com.np
      </p>
    </div>
  );
}

export default OrderNow;
