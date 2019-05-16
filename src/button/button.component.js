import React from "react";
import PropTypes from "prop-types";

import styles from "./button.module.css";

/**
 * **Button Component**, used whenever you need a button.
 *
 * @param {*} {
 *   children,
 *   onClick,
 *   href,
 *   disabled = false,
 *   active,
 *   padded = true,
 *   type,
 *   className
 * }
 * @returns
 */
// FIXME: Rename to Action as that abstracts away that it could be a `button` or an `a` element.
const Button = ({
  children,
  onClick,
  href,
  disabled = false,
  active,
  padded = true,
  type,
  className
}) => {
  const props = {};
  const classes = [styles.button];
  if (type) classes.push(styles[type]);
  if (className) classes.push(className);
  if (href) {
    props.href = href;
  }
  if (!disabled && onClick) {
    props.onClick = onClick;
  }
  if (disabled) {
    classes.push(styles.disabled);
  }
  if (active) {
    classes.push(styles.active);
  }
  if (!padded) {
    classes.push(styles["no-padding"]);
  }

  props.className = classes.join(" ");
  return href ? (
    <a {...props}>{children}</a>
  ) : (
    <button {...props} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  active: PropTypes.bool,
  padded: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string
};

export default Button;
