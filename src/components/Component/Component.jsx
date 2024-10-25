/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component1449 } from "../../icons/Component1449";
import "./style.css";

export const Component = ({
  variant,
  hover,
  className,
  href,
  href1,
  href2,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <a
      className={`component hover-${state.hover} ${className}`}
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
      <a href={href1} rel="noopener noreferrer" target="_blank">
        <p className="introducing-aave-s">
          Introducing Aave&#39;s new visual identity
        </p>
      </a>

      <div className="container">
        <div className="background" />

        <a
          className="text-wrapper"
          href={href2}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read more
        </a>

        <Component1449 className="component-1-449" />
      </div>
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

Component.propTypes = {
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
};
