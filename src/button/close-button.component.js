import React from "react";
import { ReactComponent as CloseIcon } from "./close.svg";
import styles from "./close-button.module.css";
import PropTypes from "prop-types";

const CloseButton = ({ onClick, className }) => (
  <button onClick={onClick} className={`${styles.close} ${className}`}>
    <CloseIcon className={styles.icon} alt="Close" />
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default CloseButton;
