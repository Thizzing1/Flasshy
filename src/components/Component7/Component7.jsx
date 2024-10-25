/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component7 = ({ text = "Brand", variant, className, href }) => {
  return (
    <div className={`component-7 ${className}`}>
      <div className="text-5">{text}</div>
    </div>
  );
};

Component7.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
  href: PropTypes.string,
};
