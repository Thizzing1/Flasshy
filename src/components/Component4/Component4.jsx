/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component1440 } from "../../icons/Component1440";
import "./style.css";

export const Component4 = ({
  text = "Learn More",
  variant,
  hover,
  className,
  horizontalDividerClassName,
  href,
  href1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <a
      className={`component-4 hover-0-${state.hover} ${state.variant} ${className}`}
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
      <div className={`horizontal-divider ${horizontalDividerClassName}`} />

      <a
        className="text-2"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>

      <Component1440
        className="component-1-440"
        color={state.variant === "two" ? "#1A88F8" : "#201D1D"}
      />
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

Component4.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
  href: PropTypes.string,
  href1: PropTypes.string,
};
