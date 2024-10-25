/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component1440 } from "../../icons/Component1440";
import "./style.css";

export const Component6 = ({
  text = "Learn More",
  variant,
  hover,
  className,
  href,
  href1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <a
      className={`component-6 hover-1-${state.hover} ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="div-wrapper">
        <a
          className="text-4"
          href={href1}
          rel="noopener noreferrer"
          target="_blank"
        >
          {text}
        </a>
      </div>

      <Component1440 className="component-1-344" color="#201D1D" />
      <div className="horizontal-divider-2" />
    </a>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}

Component6.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  href: PropTypes.string,
  href1: PropTypes.string,
};
