/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component8 = ({
  variant,
  hover,
  className,
  overlayGradientClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-8 hover-5-${state.hover} variant-2-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`overlay-gradient ${overlayGradientClassName}`} />
    </div>
  );
};

function reducer(state, action) {
  if (state.hover === false && state.variant === "one") {
    switch (action) {
      case "mouse_enter":
        return {
          hover: true,

          variant: "three",
        };
    }
  }

  if (state.hover === false && state.variant === "two") {
    switch (action) {
      case "mouse_enter":
        return {
          hover: true,

          variant: "three",
        };
    }
  }

  if (state.hover === false && state.variant === "three") {
    switch (action) {
      case "mouse_enter":
        return {
          hover: true,

          variant: "three",
        };
    }
  }

  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}

Component8.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
};
