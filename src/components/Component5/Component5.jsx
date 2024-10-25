/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component1440 } from "../../icons/Component1440";
import "./style.css";

export const Component5 = ({
  text = "Go to the Forum",
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
      className={`component-5 hover-2-${state.hover} ${className}`}
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
      <a
        className="text-3"
        href={href1}
        rel="noopener noreferrer"
        target="_blank"
      >
        {text}
      </a>

      <Component1440
        className={`${!state.hover ? "class" : "class-2"}`}
        color="#1C4886"
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

Component5.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  href: PropTypes.string,
  href1: PropTypes.string,
};
