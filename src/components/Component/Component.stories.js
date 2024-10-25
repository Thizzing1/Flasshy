import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "one",
    hover: true,
    className: {},
  },
};
