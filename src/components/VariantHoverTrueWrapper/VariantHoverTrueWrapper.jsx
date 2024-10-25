/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Component1444 } from "../../icons/Component1444";
import "./style.css";

export const VariantHoverTrueWrapper = ({
  text = "Get Started",
  variant,
  className,
}) => {
  return (
    <div className={`variant-hover-true-wrapper ${className}`}>
      <div className="div" />

      <div className="background-shadow">
        <div className="text">{text}</div>

        <Component1444 className="component-1-444" />
      </div>
    </div>
  );
};

VariantHoverTrueWrapper.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
};
