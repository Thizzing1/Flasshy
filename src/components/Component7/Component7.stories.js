import { Component7 } from ".";

export default {
  title: "Components/Component7",
  component: Component7,
  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Brand",
    variant: "two",
    className: {},
  },
};
