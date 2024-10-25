/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component1440 } from "../../icons/Component1440";
import "./style.css";

export const ButtonComponent = ({
  text = "  Connect",
  variant,
  hover,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`button-component hover-6-${state.hover} variant-3-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="text-6">{text}</div>

      {state.variant === "two" && state.hover && (
        <Component1440 className="variant-52-3" color="white" />
      )}
    </div>
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

ButtonComponent.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
};
