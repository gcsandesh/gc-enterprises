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
    <div className={styles.details}>
      <h3 className={styles.footerMenu__title}>Order Now</h3>
      <p>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
        </span>
        <span>GC Enterprises</span>
      </p>
      <p>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faPhone} />
        </span>
        <span>+977-9876543210</span>
      </p>
      <p>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faLocationPin} />{" "}
        </span>
        <span>Butwal- 11, Kalikanagar</span>
      </p>
      <p>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />{" "}
        </span>
        <span>info@gcstore.com.np</span>
      </p>
    </div>
  );
}

export default OrderNow;
